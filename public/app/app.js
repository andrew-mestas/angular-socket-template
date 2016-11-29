(function(){
  var myApp = angular.module('myApp', ['myAppServices', 'ngRoute', 'myAppDirectives']);

  myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'views/home.html',
          controller: 'homeCtrl'
        })
      .otherwise({
          templateUrl: "views/404.html"
        });

      $locationProvider.html5Mode(false).hashPrefix("!");
    }
  ]);

}());
         
    