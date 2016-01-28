angular.module('starter.services', [])

.factory('News', function($http) {
   var News = function() {
    this.items = [];
    this.busy = false;
	this.lastPage = false;
  };

  News.prototype.nextPage = function() {
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
	  //$scope.$broadcast('scroll.infiniteScrollComplete');
	  this.busy = false;
    }.bind(this));
  }
	
  return News;
 
});
