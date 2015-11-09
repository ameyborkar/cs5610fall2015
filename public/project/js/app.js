var app = angular.module("app", ["ngRoute"]);

//all the routes
app.config(function ($routeProvider) {
    $routeProvider
     
    .when('/home', {
        templateUrl: 'views/Books/bookList.view.html',
        controller: ''
    })
    .when('/login', {
        templateUrl: 'views/Login/login.view.html',
        controller: ''
    })
    .when('/register', {
        templateUrl: 'views/Register/registration.view.html',
        controller: ''
    })
    .when('/profile', {
        templateUrl: 'views/Profile/profile.view.html',
        controller: '',
        
    })
    .otherwise({
        redirectTo: '/home'
    })
});








