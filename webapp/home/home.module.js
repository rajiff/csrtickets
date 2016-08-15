var csrapp = angular.module('csrapp');

csrapp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/index');

    $stateProvider
      .state('index', {
        url: "/index",
        views: {
          "header": {
            templateUrl: "/home/template/header.html",
            controller: "HeaderCtrl"
          },
          "content@": {
            templateUrl: "/home/template/index.html",
            controller: "IndexCtrl"
          },
          "footer": {
            templateUrl: "/home/template/footer.html"
          }
        }
      });
    }
  ]);

csrapp.config(["$mdThemingProvider",
  function($mdThemingProvider) {
    var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
      'contrastDefaultColor': 'light',
      'contrastDarkColors': ['50'],
      '50': '#03b1f4'
    });

    $mdThemingProvider.definePalette('customBlue', customBlueMap);

    $mdThemingProvider.theme('default')
      .primaryPalette('customBlue', {
        'default': '500',
        'hue-1': '50'
      })
      .accentPalette('pink');

    $mdThemingProvider.theme('input', 'default').primaryPalette('grey')

    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').primaryPalette(
      'grey').dark()
  }
]);

csrapp.config(function($mdIconProvider) {
  $mdIconProvider.fontSet('md', 'material-icons');
});