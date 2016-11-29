(function(){
    var resizer = function ($window) {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {      
                scope.isLarge = $window.innerWidth > 500 ? true : false;
                angular.element($window).on('resize', function () {
                    scope.$apply(function(){
                        scope.isLarge = $window.innerWidth > 500 ? true : false;
                    })
                });
            }
        }
    };
    angular.module("myAppDirectives", [])
           .directive('resizer', ['$window', resizer]);
}());