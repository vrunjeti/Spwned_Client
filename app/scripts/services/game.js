'use strict';

/**
 * @ngdoc service
 * @name spwnedApp.Game
 * @description
 * # Game
 * Factory in the spwnedApp.
 */
angular.module('spwnedApp')
  .factory('Game', function ($http) {
    var url = 'http://45.55.224.229:4000/api/';
    return {
      getAllGames: function (where, count) {
        return $http.get(url + 'game', {
          params: {
            where: where,
            count: count
          }
        });
      },
      createGame: function(formData){
        return $http.post(url + 'game', {
          title: formData.title,
          description: formData.description,
          user_id: formData.userId,
          start_date: formData.startDate,
          end_date: formData.endDate,
          capacity: formData.capacity
        });
      },
      getGame: function(gameId, userId){
        return $http.get(url + 'game/' + gameId, {
          params: {
            user_id: userId
          }
        });
      },
      joinGame: function(gameId, userId){
        return $http.put(url + 'game/' + gameId + '/join', {
          user_id: userId
        });
      },
      deleteGame: function(gameId){
        return $http.delete(url + 'game' + gameId);
      }
    };
  });
