angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginController',
      })
      .state('address', {
        url: '/address/:userId',
        templateUrl: 'views/address.html',
        controller: 'AddressController',
        resolve : {
          UserId : function($stateParams){
            return $stateParams.userId;
          }
        }
      });

    $urlRouterProvider.otherwise('/login');
  }]);
