app.controller('squareAnimateCtrl', function ($scope, $http, $location) {
  $scope.breadcrumbsOptions = [{
    name: 'Главная страница'
  }, {
    name: 'Square animate',
    url: 'squareAnimate'
  }];
  var habitat = $('.habitat');
  var blockBlue = $('.blockBlue');
  var blockRed = $('.blockRed');

  var w = habitat.width();
  var h = habitat.height();

  blockProp = function (speed, size, x, y) {
    this.speed = speed;
    this.size = size;
    this.x = x;
    this.y = y;
  };
  var sizeBlock = blockBlue.height();
  var BlockBlueProp = new blockProp(10, sizeBlock, 300, 0);
  var BlockRedProp = new blockProp(7, sizeBlock, 0, 0);
  setInterval(function () {
    BlockBlueProp.x += BlockBlueProp.speed;
    BlockRedProp.y += BlockRedProp.speed;
    if (BlockBlueProp.x >= w - BlockBlueProp.size || BlockBlueProp.x < -w + BlockBlueProp.size) {
      BlockBlueProp.speed = -BlockBlueProp.speed;
    }
    console.log('BlockRedProp.y', BlockRedProp.y);
    if (BlockBlueProp.x >= 0 && BlockBlueProp.x <= BlockBlueProp.size &&
      BlockRedProp.y >= 0 && BlockRedProp.y <= BlockRedProp.size) {
      BlockBlueProp.speed = -BlockBlueProp.speed;
      BlockRedProp.speed = -BlockRedProp.speed;
    }
    if (BlockRedProp.y >= h - BlockRedProp.size || BlockRedProp.y < -h + BlockRedProp.size) {
      BlockRedProp.speed = -BlockRedProp.speed;
    }
    blockRed.css({top: BlockRedProp.y});
    blockBlue.css({left: BlockBlueProp.x});
  }, 10);
});