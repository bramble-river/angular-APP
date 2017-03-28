/**
 * Created by lihongyan on 2017/3/22.
 */
angular.module('app').directive('appHeadBar',[function () {
  return{
      restrict:"A",
      replace:true,
      templateUrl:'view/template/headbar.html',
      scope:{
          text: '@'
      },
      link:function (scope) {
          scope.back = function () {
              window.history.back();
          }
      }
  }
}]);