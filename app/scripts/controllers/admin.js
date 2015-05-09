'use strict';

/**
 * @ngdoc function
 * @name spwnedApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the spwnedApp
 */
angular.module('spwnedApp')
  .controller('AdminCtrl', function (Admin, $http) {
    // bind vm to 'this'
    var vm = this;

    /**
     * Delete game (force delete game as opposed to game ending by end date or someone winning)
     * @param  adminId
     * @param  gameId  [game to delete]
     * @return ______
     */
    vm.deleteGame = function(adminId, gameId){
        Admin.deleteGame(adminId, gameId)
        .error(function(data){
            /* Act on the event */
        })
        .success(function(data){
            /* Act on the event */
        });
    }

    /**
     * Remove registered player before game starts
     * @param  adminId
     * @param  playerId [player to remove]
     * @return ______
     */
    vm.removePlayer = function(adminId, playerId){
        Admin.removePlayer(adminId, playerId)
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
        Admin.startGame(adminId, gameId)
        .error(function(data){
            /* Act on the event */
        })
        .success(function(data){
            /* Act on the event */
        });
    }

  });
