'use strict';

/**
 * @ngdoc function
 * @name spwnedApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the spwnedApp
 */
angular.module('spwnedApp')
  .controller('AdminCtrl', function (Admin, $http) {
    // bind vm to 'this'
    var vm = this;

    $(document).ready(function(){
      // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
      $('.modal-trigger').leanModal();

      $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 5 // Creates a dropdown of 15 years to control year
      });
    });

    /**
     * Delete game (force delete game as opposed to game ending by end date or someone winning)
     * @param  adminId
     * @param  gameId  [game to delete]
     * @return ______
     */
    vm.deleteGame = function(adminId, gameId){
        Admin.deleteGame(adminId, gameId)
        .error(function(data){
            /* Act on the event */
        })
        .success(function(data){
            /* Act on the event */
        });
    }

    /**
     * Remove registered player before game starts
     * @param  adminId
     * @param  playerId [player to remove]
     * @param  gameId [game player to be removed is in]
     * @return ______
     */
    vm.removePlayer = function(adminId, playerId, gameId){
        Admin.removePlayer(adminId, playerId, gameId)
        .error(function(data){
            /* Act on the event */
        })
        .success(function(data){
            /* Act on the event */
        });
    }

    /**
     * Starts a game (call after all users have joined)
     * @param  adminId
     * @param  gameId [game to start]
     * @return Success message
     */
    vm.startGame = function(adminId, gameId) {
        Admin.startGame(adminId, gameId)
        .error(function(data){
            /* Act on the event */
        })
        .success(function(data){
            /* Act on the event */
        });
    }

  });
