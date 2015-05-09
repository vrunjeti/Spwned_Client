'use strict';

/**
 * @ngdoc function
 * @name spwnedApp.controller:PlayerpanelCtrl
 * @description
 * # PlayerpanelCtrl
 * Controller of the spwnedApp
 */
angular.module('spwnedApp')
  .controller('PlayerpanelCtrl', function ($http, $routeParams) {
  	var vm = this;

  	$http.get('./data/game.json').success(function(response) {
      vm.allGames = response.data;
      vm.gameID = $routeParams._id;
    });
  });
