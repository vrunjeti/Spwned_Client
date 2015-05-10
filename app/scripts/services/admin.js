'use strict';

/**
 * @ngdoc service
 * @name spwnedApp.admin
 * @description
 * # admin
 * Factory in the spwnedApp.
 */
angular.module('spwnedApp')
  .factory('admin', function (Game, $http, $window) {
    // will set url once API is hosted
    var url = 'http://45.55.224.229:4000/api/';
    var vm = this;

    $(document).ready(function(){
      // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
      $('.modal-trigger').leanModal();

      $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 5 // Creates a dropdown of 15 years to control year
      });
    });


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
