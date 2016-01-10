app.directive('toggleMenuDirective', function ($timeout) {
  return {
    restrict: 'E',
    templateUrl: '/src/partials/base/toggleMenu.html',
    scope: {
      props: '='
    },
    link: function (scope) {
      var position = scope.props.position;
      scope.$watch('props', function (newVal, oldVal) {
        scope.position = newVal;
        render(scope.position.position, oldVal.position);
      }, true);
      var render = function (position, oldVal) {
        $('.toggleMenu').removeClass('toggleMenu-' + oldVal);
        $('.toggleMenu').addClass('toggleMenu-' + position);
        var propObjDataFirst = undefined;
        var propObjDataSecond = undefined;
        if (position === 'left') {
          propObjDataFirst = {'left': '-200px'};
          propObjDataSecond = {'left': '0px'};
        }

        if (position === 'right') {
          propObjDataFirst = {'right': '-200px'};
          propObjDataSecond = {'right': '0px'};
        }

        if (position === 'bottom') {
          propObjDataFirst = {'bottom': '-150px'};
          propObjDataSecond = {'bottom': '0px'};
        }

        $timeout(function () {
          $('button').unbind();
          var $toggleMenu = $('.toggleMenu');
          var $button = $('.toggleMenu .button');
          $toggleMenu.attr('style', '');
          $toggleMenu.addClass('visible');
          $toggleMenu.find($button).click(function () {
            if ($toggleMenu.hasClass('visible')) {
              $toggleMenu.animate(propObjDataFirst, {duration: 300}).removeClass('visible');
            } else {
              $toggleMenu.animate(propObjDataSecond, {duration: 300}).addClass('visible');
            }
          });
        });
      }
    }
  };
});
