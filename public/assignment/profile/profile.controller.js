(function(){
	'use strict';

	var moduleName = "profile";

	myFormApp.registerModule(moduleName);

	angular
	.module(moduleName)
	.controller("ProfileController", ['$scope', '$location', '$rootScope', 'UserService', ProfileController]);
	
	function ProfileController($scope, $location, $rootScope, UserService ){
		$scope.$location = $location;
		$scope.user = $rootScope.user;
		//listen for login/sigin to grab logged in user
		$rootScope.$on("auth", function(event, user){
			$scope.user = $rootScope.user = user;
		});


		//Update button to update user profile
		$scope.update = function(){
			$scope.error = null;
			$scope.success = null;
			UserService.updateUser($scope.user.id, $scope.user, function(error, updatedUser){
				if (error){
					$scope.error = error;
				} else {
					$scope.user = updatedUser;
					$scope.success = "Succesfully updated user profile";
				}
			});
		};
	};

})();
