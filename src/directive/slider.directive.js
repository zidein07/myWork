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
      var animateStatus = false;
      scope.imgScope = scope.props;
      var countMaxLength = scope.props.length;
      scope.$watch('imgScope', function (newVal, oldVal) {

      });
      scope.nextSlide = function (loc) {
        var $sliderAllImg = $('.sliderAllImg');
        var timeChangeImg = 2000;
        var typeAnimate = 'easeOutBounce';
        var widthSlide = 800;
        if (animateStatus) {
          setTimeout(function () {
            animateStatus = false;
          }, timeChangeImg + 200);
        } else {
          if (loc === 'left') {
            count--;
            if (count < 0) {
              count = countMaxLength - 1;
            }
            $sliderAllImg.animate({'left': (-count * widthSlide) + 20 + 'px'}, timeChangeImg, typeAnimate);
            animateStatus = true;
          }
          if (loc === 'right') {
            count++;
            if (count > countMaxLength - 1) {
              count = 0;
            }
            $sliderAllImg.animate({'left': (-count * widthSlide) + 20 + 'px'}, timeChangeImg, typeAnimate);
            animateStatus = true;
          }
        }

      }
    }
  };
});
