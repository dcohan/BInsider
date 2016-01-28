angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$ionicSideMenuDelegate) {
	$scope.toggleLeft = function() {
		$ionicSideMenuDelegate.toggleLeft();
	  };
})

.controller('ChatsCtrl', function($scope, $http, News) {

   $scope.News = new News();

   /*
   $scope.items = [];
   $scope.lastPage = false;
   
   $scope.nextPage = function() {
    var url = "mocks/news.json";
    $http.get(url).success(function(data) {
	  var hasData = data.hasMore;
      var items = data.data;
      for (var i = 0; i < items.length; i++) {
        $scope.items.push(items[i]);
      }
	 
	  
	  if (!hasData) {
		$scope.lastPage = true;
	  }
	  $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };*/
})

.controller('ChatDetailCtrl', function($scope, $stateParams) {
  //$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
