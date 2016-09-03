angular.module('zfpxchat', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/pages/home.html',
        controller: 'HomeCtrl'
    }).when('/login', {
        templateUrl: '/pages/login.html',
        controller: 'LoginCtrl'
    }).when('/rooms', {
        templateUrl: '/pages/rooms.html',
        controller: 'RoomsCtrl'
    }).otherwise({
            redirectTo: '/'
    })
}]);