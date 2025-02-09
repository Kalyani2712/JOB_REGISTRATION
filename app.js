angular.module('jobApplicationFormApp', [])
  .controller('jobApplicationFormController', function($scope) {
    $scope.applicant = {};

    $scope.submitApplication = function() {
      // You can handle form submission logic here, such as sending data to a server
      console.log('Application submitted:', $scope.applicant);
      // For this example, let's just show a confirmation message
      $scope.applicationSubmitted = true;
    };
  });
