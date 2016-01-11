app.directive('sliderDirective', function () {
  return {
    restrict: 'E',
    templateUrl: '/src/partials/base/slider.html',
    scope: {
      props: '='
    },
    link: function (scope) {
      console.log('scope', scope.props);
      var count = 0;
      var propsLength = scope.props.length;
      scope.imgScope = scope.props[0];
      scope.$watch('imgScope', function (newVal, oldVal) {

      });
     nextSlide = function (loc) {
          count++;
          console.log('count', count);
      }
    }
  };
});
