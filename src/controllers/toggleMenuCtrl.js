app.controller('toggleMenuCtrl', function ($scope) {
  $scope.breadcrumbsOptions = [{
    name: 'Главная страница'
  }, {
    name: 'Toggle menu',
    url: 'toggleMenu'
  }];

  $scope.toggleMenuProps = {
    position: 'left'
  };

});