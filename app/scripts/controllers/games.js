'use strict';

/**
 * @ngdoc function
 * @name spwnedApp.controller:GamesCtrl
 * @description
 * # GamesCtrl
 * Controller of the spwnedApp
 */
 angular.module('spwnedApp')
 .controller('GamesCtrl', function (Game, $http) {
    // bind vm to 'this'
    var vm = this;
    
    $http.get('./data/game.json').success(function(response) {
      vm.allGames = response.data;
    });

    /**
     * Gets all games
     * @return  A list of all games
     * @param   mongo where condition
     * @param   mongo count condition (boolean)
     */
<<<<<<< HEAD
    vm.getAllGames = function(where, count){
        Game.getAllGames(where, count)
        .error(function(data) {
            /* Act on the event */
        })
        .success(function(data){
            /* Act on the event */
        });
=======
     vm.getAllGames = function(){
      Game.getAllGames()
      .error(function(data) {
      })
      .success(function(data){
      });
>>>>>>> origin/master
    }

    /**
     * Creates a new game
     * @param  formData.title
     * @param  formData.description
     * @param  formData.admin_id
     * @param  formData.start_date
     * @param  formData.end_date
     * @param  formData.capacity
     * @return Relevant game data
     */
     vm.createGame = function(formData) {
      Game.createGame(formData)
      .error(function(data){
        /* Act on the event */
      })
      .success(function(data){
        /* Act on the event */
      });
    }

    /**
     * Gets a single game by id
     * @return  A single game
     */
     vm.getGame = function(gameId){
      Game.getGame(gameId)
      .error(function(data) {
        /* Act on the event */
      })
      .success(function(data){
        /* Act on the event */
      });
    }

    /**
     * Joins a user to a game
     * @param  gameId
     * @param  userId
     * @return user_id, game_id, player_id
     */
     vm.joinGame = function(gameId, userId) {
      Game.joinGame(gameId, userId)
      .error(function(data){
        /* Act on the event */
      })
      .success(function(data){
        /* Act on the event */
      });
    }

    /**
     * Starts a game (call after all users have joined)
     * @param  gameId
     * @return Success message
     */
    vm.startGame = function(gameId) {
        Game.startGame(gameId)
        .error(function(data){
            /* Act on the event */
        })
        .success(function(data){
            /* Act on the event */
        });
    }

    /**
     * Deletes a game
     * @param  gameId
     * @return TBA
     */
     vm.deleteGame = function(gameId){
      Game.deleteGame(gameId)
      .error(function(data) {
        /* Act on the event */
      })
      .success(function(data){
        /* Act on the event */
      });
    }
  });
