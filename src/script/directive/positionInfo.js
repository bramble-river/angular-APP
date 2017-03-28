/**
 * Created by lihongyan on 2017/3/23.
 */
angular.module('app').directive('appPositionInfo',[function () {
    return {
        restrict:'A',
        replace:true,
        templateUrl:'view/template/positionInfo.html',
        link:function (scope) {
            scope.imagePath = scope.isActive ? 'image/star-active.png':'image/star.png'
        },
        scope:{
            isActive:"="
        }
    }
}])