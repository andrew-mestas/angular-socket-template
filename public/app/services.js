(function(){
  var searchApi = function($resource){
    var search = function(){
        return $resource('', { endpoint: '@endpoint', query: '@query'}, {
          get: { method: "GET", isArray: false }
        })
      }
      return { search: search }
  }
    angular.module('myAppServices', ['ngResource'])
           .factory('searchApi', ['$resource', searchApi])
}());