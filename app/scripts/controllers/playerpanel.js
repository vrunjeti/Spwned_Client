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
    // vm.otherPlayerInfo = [];
    vm.killList = [];

    $scope.$on('$viewContentLoaded', function() {
      vm.getUserAccount($window.sessionStorage.userId);
      vm.getPlayer($window.sessionStorage[vm.currentGame]);
      // vm.getPlayerKills(vm.currentGame, $window.sessionStorage[vm.currentGame]);
    
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

    vm.getUserAccountByUserId = function(userId) {
        Users.getUserAccount(userId)
        .error(function(data) {
            /* Act on the event */
        })
        .success(function(data){
            console.log(data);
            vm.killList.push(data.data);
        });
    }

    vm.getUserAccountByPlayerId = function(playerId){
        Player.getPlayer(playerId)
        .success(function(data){
            vm.getUserAccountByUserId(data.data.user_id);
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
            // console.log(vm.playerInfo);
            // console.log(vm.playerInfo.killed);
            for(var i = 0; i < vm.playerInfo.killed.length; i++){
                vm.getKillById(vm.playerInfo.killed[i]);
                // console.log(killObject);
                // vm.getUserAccountByUserId(killObject.target_id);
            }
        });
    }

    vm.getKillById = function(killId) {
        Player.getKillById(killId)
        .success(function(data){
            console.log(data);
            // return data.data;
            console.log('TARGET IDDDDDDDDDDDDD: ' + data.data.target_id);
            vm.getUserAccountByPlayerId(data.data.target_id);
        });
    }

    // vm.getOtherPlayer = function(playerId){
    //     Player.getOtherPlayer(playerId)
    //     .error(function(data){
    //         // do something with error
    //     })
    //     .success(function(data){
    //         // do something with player data
    //         vm.otherPlayerInfo.push(data.data); 

    //     });
    // }

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

    // vm.getPlayerKills = function(gameId, playerId) {
    //     Player.getPlayerKills(gameId)
    //     .error(function(data) {
    //         /* Act on the event */
    //     })
    //     .success(function(data) {
    //         vm.allKills = data.data;
    //         for(var i = 0; i < vm.allKills.length; i++){
    //             vm.getOtherPlayer(vm.allKills[i].target_id);
    //         }
    //     });
    // }

  });
