'use strict';

/**
 * @ngdoc service
 * @name spwnedApp.admin
 * @description
 * # admin
 * Factory in the spwnedApp.
 */
angular.module('spwnedApp')
  .factory('admin', function () {
    // will set url once API is hosted
    var url = '';
    return {
      deleteGame: function (adminId, gameId) {
        return $http.delete(url + 'deleteGame', {
          params: {
            admin_id: adminId,
            game_id: gameId
          }
        });
      },
      removePlayer: function(adminId, playerId, gameId){
        return $http.delete(url + 'deletePlayer', {
          params: {
            admin_id: adminId,
            player_id: playerId,
            game_id: gameId
          }
        });
      },
      startGame: function(adminId, gameId){
        return $http.put(url + 'admin/startGame', {
          params: {
            admin_id: adminId,
            game_id: gameId
            // other info needed?
          }
        });
      }
    }
  });
