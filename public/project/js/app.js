var app = angular.module("app", ["ngRoute"]);

//all the routes
app.config(function ($routeProvider) {
    $routeProvider
     
    .when('/home', {
        templateUrl: 'views/BookList.html',
        controller: ''
    })
    .when('/login', {
        templateUrl: 'views/Login.html',
        controller: ''
    })
    .when('/register', {
        templateUrl: 'views/Registration.html',
        controller: ''
    })
    .when('/profile', {
        templateUrl: 'views/Profile.html',
        controller: '',
        
    })
    .when('/book', {
        templateUrl: 'views/Book.html',
        controller: ''
    })
    .otherwise({
        redirectTo: '/home'
    })
});








