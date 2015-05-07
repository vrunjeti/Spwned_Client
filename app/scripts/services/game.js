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
      getAllGames: function () {
        return $http.get(url + 'game');
      },
      createGame: function(formData){
        return $http.post(url + 'game', {
          title: formData.title,
          description: formData.description,
          admin_id: formData.admin_id,
          start_date: formData.start_date,
          end_date: formData.end_date,
          capacity: formData.capacity
        });
      },
      getGame: function(id){
        return $http.get(url + 'game/' + id);
      },
      joinGame: function(gameId, userId){
        return $http.post(url + 'game/' + gameId, {
          user_id: userId
        });
      },
      deleteGame: function(id){
        return $http.delete(url + 'game' + id);
      }
    };
  });
