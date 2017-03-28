/**
 * Created by lihongyan on 2017/3/21.
 */
angular.module('app').directive('appHead',[function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl:'view/template/head.html'
    }
}])