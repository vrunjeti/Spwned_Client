'use strict';

/**
 * @ngdoc overview
 * @name spwnedApp
 * @description
 * # spwnedApp
 *
 * Main module of the application.
 */
angular
  .module('spwnedApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/games', {
        templateUrl: 'views/games.html',
        controller: 'GamesCtrl',
        controllerAs: 'games'
      })
      .when('/games/:gameid/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      /*.when('/games/:gameid/admin/adminpanel', {
        templateUrl: 'views/adminpanel.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })*/
      .when('/games/:gameid/admin/kills', {
        templateUrl: 'views/kills.html',
        controller: 'AdminCtrl',
        controllerAs: 'kills'
      })
      .when('/messages/p/:playerid', {
        templateUrl: 'views/messages.html',
        controller: 'MessagesCtrl',
        controllerAs: 'messages'
      })
      .when('/games/:gameid/player', {
        templateUrl: 'views/playerpanel.html',
        controller: 'PlayerpanelCtrl',
        controllerAs: 'player'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
