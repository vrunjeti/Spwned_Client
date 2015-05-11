'use strict';

/**
 * @ngdoc function
 * @name spwnedApp.controller:PlayerpanelCtrl
 * @description
 * # PlayerpanelCtrl
 * Controller of the spwnedApp
 */
angular.module('spwnedApp')
  .controller('PlayerpanelCtrl', function (Users, Player, Game, $http, $scope, $routeParams, $window) {
    // bind vm to 'this'
  	var vm = this;

    vm.currentGame = $routeParams.gameid;
    vm.currPlayerId = $window.sessionStorage[vm.currentGame];
    // vm.otherPlayerInfo = [];
    vm.killList = [];

    $scope.$on('$viewContentLoaded', function() {
      vm.getUserAccount($window.sessionStorage.userId);
      vm.getPlayer($window.sessionStorage[vm.currentGame]);
      vm.getGameInfo(vm.currentGame);
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
     * This next block is for getting the player's kill history
     */

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
            console.log(data);
            vm.playerInfo = data.data;
            vm.getNextTarget();
            for(var i = 0; i < vm.playerInfo.killed.length; i++){
                vm.getKillById(vm.playerInfo.killed[i]);
            }
        });
    }

    vm.getKillById = function(killId) {
        Player.getKillById(killId)
        .success(function(data){
            vm.getUserAccountByPlayerId(data.data.target_id);
        });
    }

    vm.getUserAccountByPlayerId = function(playerId){
        Player.getPlayer(playerId)
        .success(function(data){
            vm.getUserAccountByUserId(data.data.user_id);
        });
    }

    vm.getUserAccountByUserId = function(userId) {
        Users.getUserAccount(userId)
        .error(function(data) {
            /* Act on the event */
        })
        .success(function(data){
            vm.killList.push(data.data);
        });
    }

    /**
     * END BLOCK of getting player's kill history
     */

    /**
     * The following block is for getting the name of the player's next target
     */

    vm.getNextTarget = function(){
        console.log(vm.playerInfo);
        Player.getPlayer(vm.playerInfo.target_id)
        .success(function(data){
            Users.getUserAccount(data.data.user_id)
            .success(function(data){

                vm.nextTarget = data.data;
            })
        });
    }

    vm.getGameInfo = function(gameId) {
        Game.getGame(gameId, $window.sessionStorage.userId)
        .error(function(data){

        })
        .success(function(data){
            vm.gameInfo = data.data;
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
            $route.reload();
        });
    }

  });
