/**
 * Created by prime on 4/30/16.
 */

angular.module('customer-management')
    .controller("customerTableController", function($scope, $state, customerService) {
        $scope.customers = [
           {
               "id": 1,
               "name": "a",
               "age": 30
           },           {
               "id": 2,
               "name": "b",
               "age": 35
           },           {
               "id": 3,
               "name": "v",
               "age": 25
           },           {
               "id": 4,
               "name": "e",
               "age": 37
           },           {
               "id": 5,
               "name": "w",
               "age": 33
           }
        ];

        $scope.toCreateCustomer = function() {
            $state.go("create");
        };

        $scope.deleteCustomer = function(id, index) {
            customerService.deleteCustomer(id).then(function() {
                $scope.customers.splice(index, 1);
            }, function() {

            })
        };

        $scope.showDetails = function(id) {
            $state.go("info", {'id': id});
        };

        function init() {
            //$scope.customers = customerService.getCustomers();
           customerService.getCustomers().then(function(customers) {
               $scope.customers = customers;
           })
        }
        init();
    });
