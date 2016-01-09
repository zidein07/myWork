app.controller('HomeCtrl', function ($scope, $http, $location) {
  $scope.breadcrumbsOptions = [{
    name: 'Главная страница'
  }];
  $scope.pageList = [
    {
      name: 'Square animate',
      slug: 'squareAnimate',
      img: '/assets/img/squareAnimate.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
  ];
  $scope.goToPage = function (name) {
    var pathName = '/' + name;
    console.log('pathName', pathName);
    $location.path(pathName);
  }
});