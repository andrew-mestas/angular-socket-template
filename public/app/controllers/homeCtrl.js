(function(){
  var app = angular.module("myApp");
  
  var homeCtrl = function($scope, searchApi) {
    console.log(searchApi)
  }

  app.controller("homeCtrl", homeCtrl);
}());