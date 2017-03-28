/**
 * Created by lihongyan on 2017/3/21.
 */
angular.module('app').controller('mainCtrl',['$scope',function ($scope) {
    $scope.list = [{
        id:1,
        name:'销售',
        imgSrc:'image/company-3.png',
        companyName:'千度',
        city:"shh",
        industry:"互联网",
        time:"1020-23-45"
    },{
        id:2,
        name:'销售',
        imgSrc:'image/company-3.png',
        companyName:'千度',
        city:"shh",
        industry:"互联网",
        time:"1020-23-45"
    },{
        id:3,
        name:'销售',
        imgSrc:'image/company-3.png',
        companyName:'千度',
        city:"shh",
        industry:"互联网",
        time:"1020-23-45"
    }]
}])