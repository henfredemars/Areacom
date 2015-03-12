'use strict';

var customersApp = angular.module('customers');
// Customers controller
customersApp.controller('CustomersController', ['$scope', '$stateParams', 'Authentication', 'Customers','$modal', '$log' ,
	function($scope, $stateParams, Authentication, Customers, $modal, $log) {
        this.authentication = Authentication;
        // Find a list of Customers
        this.customers = Customers.query();

        //open a modal window to update a single user record
        this.modalUpdate = function (size, selectedCustomer) {

            var modalInstance = $modal.open({
                templateUrl: 'modules/customers/views/edit-customer.client.view.html',
                controller: function ($scope, $modalInstance, customer) {
                    $scope.customer = customer;
                },

                size: size,
                resolve: {
                    customer: function () {
                        return selectedCustomer;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    }
]);

customersApp.controller('CustomersCreateController', ['$scope', 'Customers',
    function($scope, Customers) {

    }
]);

customersApp.controller('CustomersEditController', ['$scope', 'Customers',
    function($scope, Customers) {

    }
]);

        //
        //
		//// Create new Customer
		//$scope.create = function() {
		//	// Create new Customer object
		//	var customer = new Customers ({
         //       firstName: this.firstName,
         //       lastName: this.lastName,
         //       userName: this.userName,
        //        password: this.password,
         //       email: this.email,
         //       phone:this.phone
        //
        //});
        //
		//	// Redirect after save
		//	customer.$save(function(response) {
		//		$location.path('customers/' + response._id);
        //
		//		// Clear form fields
		//		$scope.firstName = '';
         //       $scope.lastName = '';
         //       $scope.country = '';
         //       $scope.email = '';
         //       $scope.phone = '';
        //
		//	}, function(errorResponse) {
		//		$scope.error = errorResponse.data.message;
        //
		//	});
		//};
        //
		//// Remove existing Customer
		//$scope.remove = function(customer) {
		//	if ( customer ) {
		//		customer.$remove();
        //
		//		for (var i in $scope.customers) {
		//			if ($scope.customers [i] === customer) {
		//				$scope.customers.splice(i, 1);
		//			}
		//		}
		//	} else {
		//		$scope.customer.$remove(function() {
		//			$location.path('customers');
		//		});
		//	}
		//};
        //
		//// Update existing Customer
		//$scope.update = function() {
		//	var customer = $scope.customer;
        //
		//	customer.$update(function() {
		//		$location.path('customers/' + customer._id);
		//	}, function(errorResponse) {
		//		$scope.error = errorResponse.data.message;
		//	});
		//};
        //
        //
        //
		//// Find existing Customer
		//$scope.findOne = function() {
		//	$scope.customer = Customers.get({
		//		customerId: $stateParams.customerId
		//	});
		//};