(function() {
'use strict';

angular.module('powerRankings', ['ui.router', 'CBSSportsAPI' ]);

angular.module('powerRankings').config(powerRankingsConfig);

function powerRankingsConfig ($stateProvider, $locationProvider) {

   $stateProvider.state('power-rankings', {
      url: '/powerrankings',
      templateUrl: 'power-rankings/partial/power-rankings.html'
   });
   $stateProvider.state('power-rankings-results', {
      url: '/powerrankingsresults',
      templateUrl: 'power-rankings/partial/power-rankings-results.html'
   });
   /* Add New States Above */
}
})();
