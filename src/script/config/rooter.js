/**
 * Created by lihongyan on 2017/3/21.
 */
'use strict'
angular.module('app').config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('main',{
        url:'/main',
        templateUrl:'view/main.html',
        controller:'mainCtrl'
    });
    $stateProvider.state('position',{
        url:'/position/:id',
        templateUrl:'view/position.html',
        controller:'positionCtrl'
    });
    $stateProvider.state('company',{
        url:'/company/:id',
        templateUrl:'view/company.html',
        controller:'companyCtrl'
    });
    $urlRouterProvider.otherwise('main');
}])