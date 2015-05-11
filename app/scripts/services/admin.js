'use strict';

/**
 * @ngdoc service
 * @name spwnedApp.admin
 * @description
 * # admin
 * Factory in the spwnedApp.
 */
angular.module('spwnedApp')
  .factory('Admin', function ($http) {
    // will set url once API is hosted
    var url = 'http://45.55.224.229:4000/api/';

    return {
      deleteGame: function (adminId, gameId) {
        return $http.put(url + 'admin/delete_game', {
          admin_id: adminId,
          game_id: gameId
        });
      },
      removePlayer: function(adminId, playerId, gameId){
        return $http.put(url + 'deletePlayer', {
          params: {
            admin_id: adminId,
            player_id: playerId,
            game_id: gameId
          }
        });
      },
      startGame: function(adminId, gameId){
        return $http.put(url + 'admin/start',
           {
            admin_id: adminId,
            game_id: gameId
            // other info needed?
          }
        );
      },
      getKills: function(gameId){
        return $http.get(url + 'kills', {
          params: {
            game_id: gameId
          }
        });
      }
    }
  });
