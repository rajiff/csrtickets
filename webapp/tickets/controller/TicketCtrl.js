angular.module('csrapp')
  .controller('TicketCtrl', ['$scope',
  function($scope) {
      $scope.showHints = true;

      $scope.storeLocs = [{
        'location': 'Area 1',
        'pin': '6700'
  }, {
        'location': 'Area 2',
        'pin': '6701'
  }, {
        'location': 'Area 3',
        'pin': '6702'
  }]

      $scope.logNewTicket = function() {

      }
  }
]);