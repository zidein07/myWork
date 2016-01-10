app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/src/partials/home.html',
      controller: 'HomeCtrl'
    })
    .when('/squareAnimate', {
      templateUrl: '/src/partials/squareAnimate.html',
      controller: 'squareAnimateCtrl'
    })
    .when('/toggleMenu', {
      templateUrl: '/src/partials/toggleMenu.html',
      controller: 'toggleMenuCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);