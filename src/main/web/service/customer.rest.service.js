/**
 * Created by prime on 5/1/16.
 */

angular.module('customer-management')
    .service("customerRestService", function($http) {
        function getCustomers() {
            var promise = $http({
                method: 'GET',
                url: 'http://localhost:8080/customers'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                return response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

            return promise;
        }

        this.getCustomers = getCustomers;

        function getCustomer(id) {
            var promise = $http({
                method: 'GET',
                url: 'http://localhost:8080/customers/' + id
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                return response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

            return promise;
        }

        this.getCustomer = getCustomer;

        function createCustomer(customer) {
            var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            };
            var promise =
                $http.post('http://localhost:8080/customers', customer, config)
                    .success(function (data, status, headers, config) {
                        return data;
                    })
                    .error(function (data, status, header, config) {
                        console.log(data);
                    });


            return promise;
        }

        this.createCustomer = createCustomer;

        function updateCustomer(customer) {
            var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            };
            var promise =
                $http.put('http://localhost:8080/customers', customer, config)
                    .success(function (data, status, headers, config) {
                        return data;
                    })
                    .error(function (data, status, header, config) {
                        console.log(data);
                    });


            return promise;
        }

        this.updateCustomer = updateCustomer;

        function deleteCustomer(id) {
            var promise = $http({
                method: 'DELETE',
                url: 'http://localhost:8080/customers/'+id
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                return response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

            return promise;
        }

        this.deleteCustomer = deleteCustomer;
    });
