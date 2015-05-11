'use strict';

/**
 * @ngdoc function
 * @name spwnedApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the spwnedApp
 */
angular.module('spwnedApp')
  .controller('AdminCtrl', function (Admin, Game, Player, Users, $http, $scope, $routeParams, $window, $location) {
    // bind vm to 'this'
    var vm = this;
    /*vm.getUserAccount($window.sessionStorage.userId);*/
    vm.currentGame = $routeParams.gameid;

    vm.allKillersList = [];
    vm.allTargetsList = [];
    vm.finalKillsList = [];

    $scope.$on('$viewContentLoaded', function() {
        vm.getGame(vm.currentGame);
        vm.getKills(vm.currentGame, vm.createFinalKillsList);
        // vm.getUserAccount($window.sessionStorage.userId);
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
     * Delete game (force delete game as opposed to game ending by end date or someone winning)
     * @param  adminId
     * @param  gameId  [game to delete]
     * @return ______
     */
    vm.deleteGame = function(adminId, gameId){
        console.log("adminID is " + adminId);
        console.log(gameId);
        Admin.deleteGame(adminId, gameId)
        .success(function(data){
            console.log('User Deleted!')
            $location.path('/games')
        });
    }

    /**
     * Remove registered player before game starts
     * @param  adminId
     * @param  playerId [player to remove]
     * @param  gameId [game player to be removed is in]
     * @return ______
     */
    vm.removePlayer = function(adminId, playerId, gameId){
        Admin.removePlayer(adminId, playerId, gameId)
        .error(function(data){
            /* Act on the event */
        })
        .success(function(data){
            /* Act on the event */
        });
    }

    /**
     * Starts a game (call after all users have joined)
     * @param  adminId
     * @param  gameId [game to start]
     * @return Success message
     */
    vm.startGame = function(adminId, gameId) {
        console.log('gameID is: ' + gameId);
        Admin.startGame(adminId, gameId)
        .error(function(data){
            /* Act on the event */
        })
        .success(function(data){
            console.log('Game Created!');
            $location.path('/games');
        });
    }

    /**
     * Gets a single game by id
     * @param   gameId
     * @param   userId (implicit param, used to call Game.getGame)
     * @return  A single game
     */
     vm.getGame = function(gameId){
        Game.getGame(gameId, $window.sessionStorage.userId)
        .error(function(data) {
            /* Act on the event */
        })
        .success(function(data){
            vm.gameInfo = data.data;
        });
    }

    vm.getKills = function(gameId, callback) {
        Admin.getKills(gameId)
        .error(function(data) {
            /* Act on the event */
        })
        .success(function(data) {
            vm.allKills = data.data;
            console.log(vm.allKills);
            for(var i = 0; i < vm.allKills.length; i++){
                Player.getPlayer(vm.allKills[i].killer_id)
                .success(function(data){
                    Users.getUserAccount(data.data.user_id)
                    .success(function(data){
                        vm.allKillersList.push(data.data.first_name);
                    });
                });
            }
            for(var j = 0; j < vm.allKills.length; j++){
                Player.getPlayer(vm.allKills[j].target_id)
                .success(function(data){
                    Users.getUserAccount(data.data.user_id)
                    .success(function(data){
                        vm.allTargetsList.push(data.data.first_name);
                        if(vm.allTargetsList.length === vm.allKills.length){
                            callback();
                        }
                    });
                });
            }
        });
    }

    vm.createFinalKillsList = function(){
        // console.log(vm.allKills);
        for(var k = 0; k < vm.allKillersList.length; k++){
            console.log(vm.allKills[k]);
            vm.finalKillsList[k] = {
                killer: vm.allKillersList[k],
                target: vm.allTargetsList[k],
                timeOfKill: moment(vm.allKills[k].timeOfKill).format("MMMM Do YYYY, h:mm:ss a")
            };
        }
    }

  });
