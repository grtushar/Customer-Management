/**
 * Created by prime on 5/18/16.
 */

angular.module('customer-management')
    .controller("createCustomerController", function($scope, $state, customerService) {

        $scope.customer = {
            id: null,
            name: null,
            age: null
        };

        $scope.createCustomer = function() {
            customerService.createCustomer($scope.customer).then(function() {
                $state.go("home");
            });
        };

        $scope.cancel = function() {
            $state.go("home");
        };

        function init() {

        }
        init();
    });
