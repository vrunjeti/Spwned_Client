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
    // will set url once API is hosted
    var url = '';
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
        return $http.get(url + 'game/', {
          params: {
            game_id: gameId,
            user_id: userId
          }
        });
      },
      joinGame: function(gameId, userId){
        return $http.post(url + 'game/' + gameId + '/join', {
          user_id: userId
        });
      },
      startGame: function(gameId){
        return $http.put(url + gameId + '/start');
      },
      deleteGame: function(gameId){
        return $http.delete(url + 'game' + gameId);
      }
    };
  });
