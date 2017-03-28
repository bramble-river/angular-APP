/**
 * Created by lihongyan on 2017/3/23.
 */
angular.module('app').directive('appPositionClass',[function () {
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/positionClass.html'
    }
}])