'use strict';

/**
 * @ngdoc function
 * @name spwnedApp.controller:PlayerpanelCtrl
 * @description
 * # PlayerpanelCtrl
 * Controller of the spwnedApp
 */
angular.module('spwnedApp')
  .controller('PlayerpanelCtrl', function (Users, Player, $http, $scope, $routeParams, $window) {
    // bind vm to 'this'
  	var vm = this;

    vm.currentGame = $routeParams.gameid;

    $scope.$on('$viewContentLoaded', function() {
      vm.getUserAccount($window.sessionStorage.userId);
      vm.getPlayer();
      vm.getKills(vm.currentGame);
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
     * Returns a list of all players with a game of gameId
     * @param  gameId
     * @param  where  [mongo where condition]
     * @param  count  [mongo count condition]
     * @return list of all players in the game
     */
    vm.getAllPlayers = function(gameId, where, count){
        // might need to do null/undefined/empty checking on where and count if API doesn't handle it
        Player.getAllPlayers(gameId, where, count)
        .error(function(data){
            // do something with error
        })
        .success(function(data){
            // do something with all players data
        });
    }

    /**
     * Gets the data associated with a player (player is tied to game)
     * @param  playerId
     * @return player data
     */
    vm.getPlayer = function(playerId){
        Player.getPlayer(playerId)
        .error(function(data){
            // do something with error
        })
        .success(function(data){
            // do something with player data
            vm.playerInfo = data.data;
            
        });
    }

    /**
     * Player can report a kill
     * @param  playerId   [player reporting the kill, not the target's id]
     * @param  secretCode [code that's linked to target, confirms kill]
     * @return relevant kill data
     */
    vm.reportKill = function(playerId, secretCode){
        Player.reportKill(playerId, secretCode)
        .error(function(data){
            // do something with error
        })
        .success(function(data){
            // do something
        });
    }

    vm.getKills = function(gameId) {
        Admin.getKills(gameId)
        .error(function(data) {
            /* Act on the event */
        })
        .success(function(data) {
            vm.allKills = data.data;
        });    
        
    }

  });
