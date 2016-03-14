/*var usersCreateApp = angular.module('usersCreateApp', []);
usersCreateApp.controller('usersCreateCtrl', function($scope, $http) {
  // create a blank object to handle form data.
  $scope.createUser = function () {
    var user = /!*$.param*!/({
      json: JSON.stringify({
        'firstname': $scope.firstname,
        lastname: $scope.lastname,
        username: $scope.username,
        email: $scope.email,
        phone: $scope.phone
      })
    });
    $http.post('/api/user', user)
      .success(function (user, status) {
        //$scope = user;
        $scope.user = user;
        console.log(user);
        console.log("User created");
      })
      .error(function (user, status) {
        $scope.ResponseDetails =
          console.error("Error in creating user");
          console.error(status);
      })
    //return user;
  }
});*/

/*var usersCreateApp = angular.module('usersCreateApp', []);
usersCreateApp.controller('usersCreateCtrl', function($scope, $http) {
  // create a blank object to handle form data.
  $scope.createUser = function () {
    var user = ({
        firstname: $scope.firstname,
        lastname: $scope.lastname,
        username: $scope.username,
        email: $scope.email,
        phone: $scope.phone
    });
    $http.post('/api/user', user)
      .success(function (user, status) {
        //$scope = user;
        $scope.user = user;
        console.log(user);
        console.log("User created");
      })
      .error(function (user, status) {
        $scope.ResponseDetails =
          console.error("Error in creating user");
        console.error(status);
      })
    //return user;
  }
});*/

var usersCreateApp = angular.module('usersCreateApp', []);
usersCreateApp.controller('usersCreateCtrl', function($scope, $http) {
  // create a blank object to handle form data.
  $scope.createUser = function () {
    var new_user = {
      method: 'POST',
      url: '/api/user',
      headers: {'Content-Type': 'application/json'},
      data: {
        //type:
        firstname: $scope.firstname,
        lastname: $scope.lastname,
        username: $scope.username,
        email: $scope.email,
        phone: $scope.phone
      }
    }
    $http.post('/api/user', new_user)
      .success(function (new_user, status) {
        //$scope = user;
        $scope.user = new_user;
        console.log(new_user);
        console.log("User created");
      })
      .error(function (new_user, status) {
        $scope.ResponseDetails =
          console.error("Error in creating user");
        console.error(status);
      })
    //return user;
  }
});




var listUsersApp = angular.module('listUsersApp', []);
listUsersApp.controller('listUsersCtrl', function($scope, $http) {
  $http.get('/api/user')
    .then(function(response) {
      console.log("Users fetched");
      $scope.users = response.data;
    });
});

/*
angular.module('usersService', []).factory('User', ['$http', function($http) {
  return {
    // get all users
    get : function() {
      return $http.get('/api/user');
    },

    // create a user method
    create : function(userData) {
      return $http.post('/api/user', userData);
    },

    delete : function(id) {
      return $http.delete('/api/user/' + id);
    }
  }
}]);*/
