angular.module('UsersCtrl', []).controller('UsersController', function($scope, $http) {
  //$scope.userData = {};

  $scope.getUsers = function () {
    // get all users and show them
    $http.get('/api/user')
      .then(function (response) {
          $scope.users = response.data;
          console.log(response);
        },
        function (response) {
          console.log('Error: ', response);
        });
  };

  // create a new user
  $scope.createUser = function () {
    $http.post('/api/user', angular.toJson($scope.user))
      .success(function (response) {
/*        console.log('TEST:' + $scope.user);
        $scope.userData = {}; // clear the form so that a new user can be created
        $scope.user = response.data;*/
        console.log(response);

      })
      .error(function (data) {
        console.log('Error: ' + data);
      });
  };
});