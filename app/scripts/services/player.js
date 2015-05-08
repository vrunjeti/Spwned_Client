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
    var url = '';
    return {
      getAllPlayers: function (where, count) {
        return $http.get(url + 'player', {
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
        return $http.put(url + 'player/' + playerId + '/report', {
          secret_code: secretCode
        });
      }

    };
  });
