app.controller('HomeCtrl', function ($scope, $http, $location) {
  $scope.breadcrumbsOptions = [{
    name: 'Главная страница'
  }];
  $scope.goToPage = function (name) {
    var pathName = '/' + name;
    console.log('pathName', pathName);
    $location.path(pathName);
  }
});