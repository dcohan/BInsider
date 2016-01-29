angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $ionicSideMenuDelegate, News) {

	$scope.toggleLeft = function() {
		$ionicSideMenuDelegate.toggleLeft();
	  };
	  
   $scope.News = new News();

})

.controller('NewDetailCtrl', function($scope, News, $ionicSideMenuDelegate,$stateParams) {
  //$scope.notice = News.get($stateParams.newId);
})

.controller('AccountCtrl', function($scope, Settings) {
  $scope.settings = {
    enableNotifications: true
  };
  
  $scope.updateNotifications = function() {
    var SettingsSvc = new Settings();
	SettingsSvc.EnablePushNotifications($scope.settings.enableNotifications,'deviceid');
  }
});
