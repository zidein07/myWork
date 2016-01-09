app.directive('breadcrumbsDir', function () {
  return {
    restrict: 'E',
    templateUrl: '/src/partials/base/breadcrumbs.html',
    scope: {
      options: '='
    },
    link: function (scope) {
      console.log('scope.options', scope.options);
      scope.options = scope.options.map(function (item) {
        if (!item.url) {
          item.url = '/#/'
        } else {
          item.url = '/#/' + item.url;
        }
        return item;
      });
    }
  };
});
