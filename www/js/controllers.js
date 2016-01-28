angular.module('starter.controllers', ['infinite-scroll'])

.controller('DashCtrl', function($scope,$ionicSideMenuDelegate) {
	$scope.toggleLeft = function() {
		$ionicSideMenuDelegate.toggleLeft();
	  };
})

.controller('ChatsCtrl', function($scope, $http, Reddit) {

	$scope.items = [];
	$scope.lastPage = false;
	$scope.index =0 ;

   $scope.nextPage = function() {
    var url = "mocks/news.json";
    $http.get(url).success(function(data) {
      var items = data;
      for (var i = 0; i < items.length; i++) {
        $scope.items.push(items[i]);
      }
	  $scope.index ++;
	  
	  if ($scope.index == 3) {
		$scope.lastPage = true;
	  }
	  $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };
  
  $scope.moreDataCanBeLoaded = function() {
    return !$scope.lastPage;
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
