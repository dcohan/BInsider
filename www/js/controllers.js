angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $ionicSideMenuDelegate, News) {

	$scope.toggleLeft = function() {
		$ionicSideMenuDelegate.toggleLeft();
	  };
	  
   $scope.News = new News();

})

.controller('NewDetailCtrl', function($scope, $ionicSideMenuDelegate,$stateParams) {
  //$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
