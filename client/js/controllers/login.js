

angular
  .module('app')
  .controller('LoginController', ['$scope', '$state', '$http', function ($scope, $state, $http) {

    $scope.login = login;

    function login(user) {
      console.log("User details entered are: " + JSON.stringify(user));
      $http.post('/api/Users/login', user).success(function (res) {
        console.log("Response is: " + JSON.stringify(res));
        $state.go('address', {userId: res.userId});
      }).error(function (err) {
        alert('Username or password is incorrect.');
      });
    }

  }]);
