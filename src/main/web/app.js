/**
 * Created by prime on 4/30/16.
 */

var app = angular.module('customer-management', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.defaults.headers.get = {};
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/view/customer-table.view.html',
            controller: 'customerTableController'
        })
        .state('create', {
            url: '/create',
            templateUrl: '/view/create-customer.view.html',
            controller: 'createCustomerController'
        })
        .state('info', {
            url: '/home/:id',
            templateUrl: '/view/customer.view.html',
            controller: 'customerController'
        })

})