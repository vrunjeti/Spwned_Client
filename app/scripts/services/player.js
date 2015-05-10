'use strict';

/**
 * @ngdoc service
 * @name spwnedApp.Player
 * @description
 * # Player
 * Factory in the spwnedApp.
 */
angular.module('spwnedApp')
  .factory('Player', function ($http) {
    // will set url once API is hosted
    var url = 'http://45.55.224.229:4000/api/';
    return {
      getAllPlayers: function (gameId, where, count) {
        return $http.get(url + gameId + '/players', {
          params: {
            where: where,
            count: count
          }
        });
      },
      getPlayer: function(playerId){
        return $http.get(url + 'player/' + playerId);
      },
      reportKill: function(playerId, secretCode){
        return $http.put(url + 'player/report', {
          player_id: playerId,
          secret_code: secretCode
        });
      }

    };
  });
