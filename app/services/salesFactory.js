
(function(){
    var salesFactory = function($http){
     //request server(server.js) to send data
        var factory = {};
        factory.getCustomers = function (){
           return $http.get('/salesData')
        };
        // return fatory object to controller
        return factory;
    };
    salesFactory.$inject = ['$http'];
    
        angular.module('retailApp')
            .factory('salesFactory',salesFactory);
}());