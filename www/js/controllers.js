angular.module('starter.controllers', [])

.controller('HomeCtrl', function($rootScope, $scope, News) {
	  
   $rootScope.News = new News();

})

.controller('NewDetailCtrl', function($rootScope, $scope, News,$stateParams, $sce, $http) {

   var notice = $rootScope.News.getById($stateParams.newId);
   if (notice) {
		var url = notice.newUrl;
    $http.get(url).success(function(data) {
	  $scope.newDetailedHtml = $sce.trustAsHtml(data);
    });
  }
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
