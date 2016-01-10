app.directive('toggleMenuDirective', function ($timeout) {
  return {
    restrict: 'E',
    templateUrl: '/src/partials/base/toggleMenu.html',
    scope: {
      props: '='
    },
    link: function (scope) {
      console.log('scope.props', scope.props);
      var position = scope.props.position;
      var propObjDataFirst = {};
      var propObjDataSecond = {};
      if (position === 'left') {
        scope.position = 'toggleMenu-left';
        propObjDataFirst = {'left': '-200px'};
        propObjDataSecond = {'left': '0px'};
      }

      if (position === 'right') {
        scope.position = 'toggleMenu-right';
        propObjDataFirst = {'right': '-200px'};
        propObjDataSecond = {'right': '0px'};
      }

      if (position === 'bottom') {
        scope.position = 'toggleMenu-bottom';
        propObjDataFirst = {'bottom': '-150px'};
        propObjDataSecond = {'bottom': '0px'};
      }

      $timeout(function () {
        var $button = $('.toggleMenu .button');
        var $toggleMenu = $('.toggleMenu');
        $toggleMenu.find($button).click(function () {
          if ($toggleMenu.hasClass('visible')) {
            $toggleMenu.animate(propObjDataFirst, {duration: 300}).removeClass('visible');
          } else {
            $toggleMenu.animate(propObjDataSecond, {duration: 300}).addClass('visible');
          }
        });
      });
    }
  };
});
