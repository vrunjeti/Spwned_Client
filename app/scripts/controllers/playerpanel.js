'use strict';

/**
 * @ngdoc function
 * @name spwnedApp.controller:PlayerpanelCtrl
 * @description
 * # PlayerpanelCtrl
 * Controller of the spwnedApp
 */
angular.module('spwnedApp')
  .controller('PlayerpanelCtrl', function (Player, $http, $routeParams) {
    // bind vm to 'this'
  	var vm = this;

    $http.get('./data/game.json').success(function(response) {
      vm.allGames = response.data;
      vm.gameID = $routeParams._id;
    });

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

  });
