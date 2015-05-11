'use strict';

/**
 * @ngdoc function
 * @name spwnedApp.controller:GamesCtrl
 * @description
 * # GamesCtrl
 * Controller of the spwnedApp
 */
 angular.module('spwnedApp')
 .controller('GamesCtrl', function (Game, Users, $http, $window, $location, $scope, $route) {
    // bind vm to 'this'
    var vm = this;

    $scope.$on('$viewContentLoaded', function() {
      vm.getAllGames('', false);
      vm.getUserAccount($window.sessionStorage.userId);
      vm.currUserId = $window.sessionStorage.userId;
    });

    $(document).ready(function(){
      // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
      $('.modal-trigger').leanModal();

      $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 5 // Creates a dropdown of 15 years to control year
      });
    });

    /**
     * Gets the data associated with a user account
     * @param  userId
     * @return relevant user data
     */
    vm.getUserAccount = function(userId) {
        Users.getUserAccount(userId)
        .error(function(data) {
            /* Act on the event */
        })
        .success(function(data){
            vm.userInfo = data.data;
        });
    }

    /**
     * Gets all games
     * @return  A list of all games
     * @param   mongo where condition
     * @param   mongo count condition (boolean)
     */
     vm.getAllGames = function(where, count){
      Game.getAllGames(where, count)
      .error(function(data) {
        /* Act on the event */
      })
      .success(function(data){
        vm.allGames = data.data;
      });
    }

    /**
     * Creates a new game
     * @param  formData.title
     * @param  formData.description
     * @param  formData.userId
     * @param  formData.capacity
     * @return Relevant game data
     */
     vm.createGame = function(formData) {
      console.log($window.sessionStorage.userId);
      formData.userId = $window.sessionStorage.userId;
      Game.createGame(formData)
      .error(function(data){
        /* Act on the event */
      })
      .success(function(data){
        console.log(data);
        $route.reload();
      });
    }

    /**
     * Gets a single game by id
     * @param   gameId
     * @param   userId (implicit param, used to call Game.getGame)
     * @return  A single game
     */
     vm.getGame = function(gameId){
        console.log('game id is:' + gameId);
        Game.getGame(gameId, $window.sessionStorage.userId)
        .error(function(data) {
            /* Act on the event */
        })
        .success(function(data){
            console.log(data);
            // if user is admin of game, store admin id
            if(data.data.admin_token !== null){
              // vm.storeAdminId(data.data.admin_token);
              $window.sessionStorage[gameId] = data.data.admin_token;
              $location.path('/games/' + data.data._id + '/admin');
            }
            // if user is player of game, store player id
            else if(data.data.player_token !== null){
              // vm.storePlayerId(data.data.player_token);
              $window.sessionStorage[gameId] = data.data.player_token;
              $location.path('/games/' + data.data._id + '/player');
            }
        });
    }

    /**
     * Joins a user to a game
     * @param  gameId
     * @param  userId
     * @return user_id, game_id, player_id
     */
     vm.joinGame = function(gameId, userId) {
      Game.joinGame(gameId, userId)
      .error(function(data){
        /* Act on the event */
      })
      .success(function(data){
        console.log(data);
        vm.getGame(data.data.game_id);
      });
    }

    /**
     * Deletes a game
     * @param  gameId
     * @return TBA
     */
     vm.deleteGame = function(gameId){
      Game.deleteGame(gameId)
      .error(function(data) {
        /* Act on the event */
      })
      .success(function(data){
        /* Act on the event */
      });
    }

    /**
     * Stores admin id to $window.sessionStorage (to use for admin routes)
     * @param  adminId
     * @note   $window.sessionStorage only allows strings as values, so we need to JSON.parse and JSON.stringify arrays
     */
     vm.storeAdminId = function(adminId){
        // if adminKeys is empty, create new array, push adminId and store the stringified array
        if($window.sessionStorage.adminKeys === ''){
          var aKeys = [];
          aKeys.push(adminId);
          var aks = JSON.stringify(aKeys);
          $window.sessionStorage.adminKeys = aks;
        }
        // if adminKeys is not empty, parse what is currently stored into an array, push adminId and store the stringified array
        else {
          var akp = JSON.parse($window.sessionStorage.adminKeys);
          akp.push(adminId);
          var aks = JSON.stringify(akp);
          $window.sessionStorage.adminKeys = aks;
        }
      }

    /**
     * Stores player id to $window.sessionStorage (to use for player routes)
     * @param  playerId
     * @note   $window.sessionStorage only allows strings as values, so we need to JSON.parse and JSON.stringify arrays
     */
     vm.storePlayerId = function(playerId){
        // if playerKeys is empty, create new array, push playerId and store the stringified array
        if($window.sessionStorage.playerKeys === ''){
          var pKeys = [];
          pKeys.push(playerId);
          var pks = JSON.stringify(pKeys);
          $window.sessionStorage.playerKeys = pks;
        }
        // if playerKeys is not empty, parse what is currently stored into an array, push playerId and store the stringified array
        else {
          var pkp = JSON.parse($window.sessionStorage.playerKeys);
          pkp.push(playerId);
          var pks = JSON.stringify(pkp);
          $window.sessionStorage.playerKeys = pks;
        }
      }

    });
