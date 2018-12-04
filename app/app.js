
(function() {
    
    var app = angular.module('retailApp', ['ngRoute','ngAnimate']);
   //define routing for views and controllers 
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'salesController',
                templateUrl: 'app/views/sales.html'
            })
            .otherwise( { redirectTo: '/' } );
        });
    
}());