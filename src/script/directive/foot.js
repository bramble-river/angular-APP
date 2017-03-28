/**
 * Created by lihongyan on 2017/3/22.
 */
angular.module('app').directive('appFoot',[function () {
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/foot.html'
    }
}])