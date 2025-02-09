angular.module('jobRegistrationApp', [])
  .controller('registrationController', function($scope) {
    $scope.currentPage = 'welcome';
    $scope.formData = {};

    $scope.startRegistration = function() {
      $scope.currentPage = 'personalInfo';
    };

    $scope.nextPage = function(page) {
      $scope.currentPage = page;
    };

    $scope.prevPage = function(page) {
      $scope.currentPage = page;
    };

    $scope.submitRegistration = function() {
      console.log('Form submitted:', $scope.formData);
      $scope.formData = {};
      $scope.currentPage = 'welcome';
      alert('Thank you for submitting your job registration!');
    };
  });
