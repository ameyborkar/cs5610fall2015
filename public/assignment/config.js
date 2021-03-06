"use strict";
(function(){
	angular
		.module("FormBuilderApp")
		.config(Configure);
		
	function Configure($routeProvider) {
		$routeProvider
			.when("/home", {
				templateUrl: "home/home.view.html"
			})
			.when("/profile", {
				templateUrl: "profile/profile.view.html",
				controller: "ProfileController"
			})
			.when("/forms", {
				templateUrl: "form/form.view.html",
				controller: "FormController"
			})
			.when("/register", {
				templateUrl: "register/register.view.html",
				controller: "RegisterController"
			})
			.when("/login", {
				templateUrl: "login/login.view.html",
				controller: "LoginController"
			})
			.otherwise({
				redirectTo: "/home"
			});
	}
}) ();