app.directive('toggleMenuDirective', function () {
  return {
    restrict: 'E',
    templateUrl: '/src/partials/base/toggleMenu.html',
    scope: {
      props: '='
    },
    link: function (scope) {
      console.log('scope.props', scope.props);
      var position = scope.props.position;
      scope.position = '123';
      if (position === 'left') {
//        scope.position = 'toggleMenu';
        $('.toggleMenu').addClass('toggleMenu-left');
      }

      if (position === 'right') {
        $('.toggleMenu').addClass('toggleMenu-right');
      }

      if (position === 'bottom') {
        $('.toggleMenu').addClass('toggleMenu-bottom');
      }
      var button = $('.button');
      var blockLeft = $('.toggleMenu-left');
      var blockRight = $('.toggleMenu-right');
      var blockBottom = $('.toggleMenu-bottom');
      var infoMenu = $('.infoMenu');

      blockBottom.find(button).click(function () {
        if (blockBottom.hasClass('visible')) {
          blockBottom.animate({"bottom": "-150px"}, {duration: 300}).removeClass('visible');
        } else {
          blockBottom.animate({"bottom": "0px"}, {duration: 300}).addClass('visible');
        }
      });
      blockLeft.find(button).click(function () {
        if (blockLeft.hasClass('visible')) {
          blockLeft.animate({"left": "-200px"}, {duration: 300}).removeClass('visible');
        } else {
          blockLeft.animate({"left": "0px"}, {duration: 300}).addClass('visible');
        }
      });
      blockRight.find(button).click(function () {
        if (blockRight.hasClass('visible')) {
          blockRight.animate({"right": "-200px"}, {duration: 300}).removeClass('visible');
        } else {
          blockRight.animate({"right": "0px"}, {duration: 300}).addClass('visible');
        }
      });
    }
  };
});
