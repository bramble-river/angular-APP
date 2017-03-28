/**
 * Created by lihongyan on 2017/3/22.
 */
angular.module('app').directive('appPositionList',[function () {
  return{
      restrict:"A",
      replace:true,
      templateUrl:'view/template/positionList.html',
      scope:{
          data: '='
      }
  }
}]);