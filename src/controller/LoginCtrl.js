angular.module('zfpxchat').controller('LoginCtrl',['$scope','$http','$rootScope','$location',function($scope,$http,$rootScope,$location){
  $scope.login = function(){
      $http({
          url:'/user/login',
          method:'POST',
          data:{email:$scope.email}
      }).success(function(user){
         $scope.user = user;
         $rootScope.user = user;
          $location.path('/rooms');
      });
  }
}]);