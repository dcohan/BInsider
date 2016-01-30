angular.module('starter.controllers', ['ionic'])

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
	 
	SettingsSvc.deviceInformation = ionic.Platform.device();
	if (ionic.Platform.isWebView()) {
		SettingsSvc.deviceType = 'WEB';
	} 
	
	if (ionic.Platform.isIPad()) {
		SettingsSvc.deviceType = 'IPAD';
	} 
	
	if (ionic.Platform.isIOS()) {
		SettingsSvc.deviceType = 'IOS';
	} 
	
	if (ionic.Platform.isAndroid()) {
		SettingsSvc.deviceType = 'ANDROID';
	} 

	if (ionic.Platform.isWindowsPhone()) {
		SettingsSvc.deviceType = 'WPHONE';
	} 

	SettingsSvc.currentPlatform = ionic.Platform.platform();
	SettingsSvc.currentPlatformVersion = ionic.Platform.version();

	SettingsSvc.EnablePushNotifications($scope.settings.enableNotifications,'deviceid');
  }
});
