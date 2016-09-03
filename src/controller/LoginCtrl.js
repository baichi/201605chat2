angular.module('zfpxchat').controller('LoginCtrl',['$scope','$http',function($scope,$http){
  $scope.login = function(){
      $http({
          url:'/user/login',
          method:'POST',
          data:{email:$scope.email}
      }).success(function(user){
          console.log(user);
         $scope.user = user;
      });
  }
}]);