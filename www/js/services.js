angular.module('starter.services', [])

.factory('News', function($http) {
   var news = function() {
    this.items = [];
    this.busy = false;
	this.lastPage = false;
  };

  news.prototype.nextPage = function() {
    if (this.busy) return;
    this.busy = true;

    var url = "mocks/news.json";
    $http.get(url).success(function(data) {
	  var hasData = data.hasMore;
      var items = data.data;
      for (var i = 0; i < items.length; i++) {
        this.items.push(items[i]);
      }
	  
	  if (!hasData) {
		this.lastPage = true;
	  }
	  this.busy = false;
    }.bind(this));
  };
  
  news.prototype.getById = function(newId) {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].id === parseInt(newId)) {
          return this.items[i];
        }
      }
      return null;
  };
	
  return news;
  
})

.factory('Settings', function($http) {
   var Settings = function() {
	this.deviceType = "";
	this.currentPlatform = "";
	this.currentPlatformVersion = "";
  };

  Settings.prototype.EnablePushNotifications = function(value) {
    
	if (value){
		var push = new Ionic.Push({
		  "debug": true
		});

		push.register(function(token) {
		  console.log("Device token:",token.token);
		  
			var url = "mocks/enablePushes.json?value="+value+"&deviceId="+token.token+"&deviceType="+this.deviceType;
			$http.get(url);
			
			console.log('Push notifications updated!');
		});
	}
	
    
  } 
  
  return Settings;
});

