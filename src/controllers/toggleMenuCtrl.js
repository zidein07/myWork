app.controller('toggleMenuCtrl', function ($scope) {
  $scope.breadcrumbsOptions = [{
    name: 'Главная страница'
  }, {
    name: 'Toggle menu',
    url: 'toggleMenu'
  }];
  var button = $('.button');
  var blockLeft = $('.toggleMenu-left');
  var blockRight = $('.toggleMenu-right');
  var blockBottom = $('.toggleMenu-bottom');
  var infoMenu = $('.infoMenu');

  blockBottom.find(button).click(function () {
    if (blockBottom.hasClass('visiBle')){
      blockBottom.animate({"bottom":"-200px"}, {duration: 300}).removeClass('visiBle');
    }else{
      blockBottom.animate({"bottom":"0px"},  {duration: 300}).addClass('visiBle');
    }
  });
  blockLeft.find(button).click(function () {
    if (blockLeft.hasClass('visiBle')){
      blockLeft.animate({"left":"-200px"}, {duration: 300}).removeClass('visiBle');
    }else{
      blockLeft.animate({"left":"0px"},  {duration: 300}).addClass('visiBle');
    }
  });
  blockRight.find(button).click(function () {
    if (blockRight.hasClass('visiBle')){
      blockRight.animate({"right":"-200px"}, {duration: 300}).removeClass('visiBle');
    }else{
      blockRight.animate({"right":"0px"},  {duration: 300}).addClass('visiBle');
    }

  });

  var hideAndShowClass = function () {

  }
});