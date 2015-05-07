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
          formData // use params
        });
      },
      getGame: function(id){
        return $http.get(url + 'game/' + id);
      },
      joinGame: function(formData){
        return $http.post(url + 'game', {
          formData // use params
        });
      },
      deleteGame: function(id){
        return $http.delete(url + 'game' + id);
      }
    };
  });
