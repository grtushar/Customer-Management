/**
 * Created by prime on 5/19/16.
 */

angular.module('customer-management')
    .controller("customerController", function($scope, $state, $stateParams, customerService) {
        $scope.customer = {};

        $scope.updateCustomer = function() {
            customerService.updateCustomer($scope.customer).then(function() {
                $state.go("home");
            });
        };

        $scope.cancel = function() {
            $state.go("home");
        };

        function init() {
            customerService.getCustomer($stateParams.id).then(function(customer) {
                $scope.customer = customer;
            })
        }
        init();

    });
