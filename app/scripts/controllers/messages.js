'use strict';

/**
 * @ngdoc function
 * @name spwnedApp.controller:MessagesCtrl
 * @description
 * # MessagesCtrl
 * Controller of the spwnedApp
 */
angular.module('spwnedApp')
  .controller('MessagesCtrl', ['Users', 'Messages', '$scope', '$http', '$window', '$location', '$routeParams', function(Users, Messages, $scope, $http, $window, $location, $routeParams) {

  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

  $scope.user = $window.sessionStorage.userId;
  $scope.isAdmin = Users.getAllUsers().success(function(data){
  $scope.users = [];
  	data.data.forEach(function(user){
  		var index = user.games.indexOf($routeParams.game_id);
  		if(index > -1) {
  			user.name = user.first_name + ' ' + user.last_name;
  			$scope.users.push(user);
  		}
  	});
  });

 	Messages.getMessages($routeParams.gameid, $routeParams.userid)
 		.success(function(data){
 			$scope.msgs = data.data;
 			data.data.forEach(function(msg){
 				Users.getUserAccount(msg.sender_id)
 					.success(function(data){
 						msg.sender = data.data.first_name + ' ' + data.data.last_name;
 					});
 				Users.getUserAccount(msg.recipient_id)
 					.success(function(data){
 						msg.recipient = data.data.first_name + ' ' + data.data.last_name;
 					});
 			});
 			
 		});

	$scope.reply = function(recipient_id, body) {
		var msg = {
			game_id : $routeParams.gameid,
			sender_id : $routeParams.userid,
			recipient : recipient_id,
			body : body
		}

		Messages.sendMessage($routeParams.gameid, $routeParams.userid, msg)
			.success(function(data){
				$location.path('/messages/g/' + $routeParams.gameid + '/u/' + $routeParams.userid);
			});
	}

}]);
