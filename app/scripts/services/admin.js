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
        return $http.delete(url + 'deleteGame');
      },
      removePlayer: function(adminId, playerId){
        return $http.delete(url + 'deletePlayer');
      },
      startGame: function(adminId, gameId){
        return $http.put(url + 'admin/startGame', {
          admin_id: adminId
          // other info needed?
        });
      }
    }
  });
