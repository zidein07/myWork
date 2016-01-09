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

  var w = habitat.width;
  var h = habitat.height;

  blockProp = function(speed, size, x, y) {
    this.speed = speed;
    this.size = size;
    this.x = x;
    this.y = y;
  };

  var BlockBlueProp = new blockProp(5, 20, 0, 0);
  var BlockRedProp = new blockProp(5, 20, 0, 0);

  setInterval(function(){
    BlockBlueProp.y += BlockBlueProp.speed;
    BlockRedProp.x += BlockRedProp.speed;
    if (BlockBlueProp.y >= 380 || BlockBlueProp.y < -380) {
      BlockBlueProp.speed = -BlockBlueProp.speed;
    }
    if (BlockRedProp.x >= 380 || BlockRedProp.x < -380) {
      BlockRedProp.speed = -BlockRedProp.speed;
    }

    blockRed.css({top: BlockRedProp.x});
    blockBlue.css({left: BlockBlueProp.y});

  }, 10);


});