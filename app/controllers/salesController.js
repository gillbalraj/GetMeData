
(function() {
    
    var salesController = function ($scope,$log, salesFactory) {
        $scope.sortBy = 'TIME_DATE';
        $scope.reverse = false;
        $scope.salesData = [];
        
      // call factory to get salesData  
        function init(){
           salesFactory.getCustomers()
            .success(function(salesData) {
                $scope.salesData = salesData;
           }).error(function(data, status, headers, config) {
               $log.log(data.error + ' '+ status);
           });
        };
        init();

        // sorting columns by their property name
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        
    };
    
    salesController.$inject = ['$scope', '$log','salesFactory'];

    angular.module('retailApp')
      .controller('salesController', salesController);
    
}());