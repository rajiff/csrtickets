var csrapp = angular.module('csrapp', ['ngMaterial', 'ngMdIcons', 'ui.router']);

csrapp.controller('AppRouteCtrl', ['$scope', '$state',
  function($scope, $state) {
    $state.go("index");
  }
]);