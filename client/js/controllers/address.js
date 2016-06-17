angular
  .module('app')
  .controller('AddressController', ['$scope', '$state', '$http', 'UserId', function ($scope, $state, $http, UserId) {
    $scope.session = {};
    console.log("User id is: " + JSON.stringify(UserId));
    $scope.session.userId = UserId;
    $scope.save = save;

    function save(address) {
      console.log("Address Saving: "  + JSON.stringify(address));
      $http.post('api/Address/', address).success(function (res) {
        alert('Address saved successfully.');
      }).error(function (err) {
        alert("Something went wrong.");
        console.log("ERror is : "+ JSON.stringify(err));
      });
    }
  }]);
