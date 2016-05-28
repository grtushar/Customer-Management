/**
 * Created by prime on 5/1/16.
 */
angular.module('customer-management')
    .service("customerService", function(customerRestService) {
        function getCustomers() {
            var promise =  customerRestService.getCustomers().then(function(response) {
                return response;
            });

            return promise;
        }
        this.getCustomers = getCustomers;

        function getCustomer(id) {
            var promise =  customerRestService.getCustomer(id).then(function(response) {
                return response;
            });

            return promise;
        }
        this.getCustomer = getCustomer;

        function createCustomer(customer) {
            var promise =  customerRestService.createCustomer(customer).then(function(response) {
                return response;
            });

            return promise;
        }
        this.createCustomer = createCustomer;

        function updateCustomer(customer) {
            var promise =  customerRestService.updateCustomer(customer).then(function(response) {
                return response;
            });

            return promise;
        }
        this.updateCustomer = updateCustomer;

        function deleteCustomer(id) {
            var promise =  customerRestService.deleteCustomer(id).then(function(response) {
                return response;
            });

            return promise;
        }
        this.deleteCustomer = deleteCustomer;
    });