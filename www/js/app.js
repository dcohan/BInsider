// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
	
	Ionic.io(); 
	
	var user = Ionic.User.current();
	if (!user.id) {
		user.id = Ionic.User.anonymousId();

		// save our newly created user
		user.save();
	}
	
	var push = new Ionic.Push({
	  "debug": true,
	   "onNotification": function(notification) {
		var payload = notification.payload;
		alert(notification);
		alert(payload);
	  }
	});

	push.register(function(token) {
	  
	  
		//var url = "mocks/enablePushes.json?value="+value+"&deviceId="+token+"&deviceType="+this.deviceType;
		//$http.get(url);
		
		 // now we have token, so add it to user
		push.addTokenToUser(user);
		
		

		// don't forget to save user to Ionic Platform with our new token
		user.save();
		
		//alert("Device token after added token to user:",token.token);
		
		alert('Push notifications updated!');
	});
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // Each tab has its own nav history stack:

  .state('home', {
    url: '/home',
    views: {
      'tab-default': {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  .state('new-detail', {
      url: '/new/:newId',
      views: {
        'tab-default': {
          templateUrl: 'partials/new-detail.html',
          controller: 'NewDetailCtrl'
        }
      }
    })

  .state('account', {
    url: '/account',
    views: {
      'tab-default': {
        templateUrl: 'partials/account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
