var csrapp = angular.module('csrapp');

csrapp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('index.logticket', {
        url: "/logticket",
        views: {
          "content@": {
            templateUrl: "/tickets/template/logticket.html",
            controller: "TicketCtrl"
          }
        }
      })
      .state('index.tickets', {
        url: "/tickets",
        views: {
          "content@": {
            templateUrl: "/tickets/template/viewtickets.html",
            controller: "TicketViewCtrl"
          }
        }
      });

    } //end of config
  ]);