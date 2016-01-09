app.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'HOME_TITLE': 'Home page'
  });

  $translateProvider.translations('ru', {
    'HOME_TITLE': 'Главная страница'
  });

  $translateProvider.preferredLanguage('en');
  $translateProvider.useStorage('translateStorage');
}]);