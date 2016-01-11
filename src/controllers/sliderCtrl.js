app.controller('sliderCtrl', function ($scope) {
  $scope.breadcrumbsOptions = [{
    name: 'Главная страница'
  }, {
    name: 'Slider',
    url: 'slider'
  }];
  $scope.imgArr = [
    '/assets/slideImg/1.jpg',
    '/assets/slideImg/2.jpg',
    '/assets/slideImg/3.jpg',
    '/assets/slideImg/4.jpg',
    '/assets/slideImg/5.jpg',
    '/assets/slideImg/6.jpg'
  ];

});