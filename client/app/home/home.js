(function () {
'use strict';
function homeConfig($stateProvider) {

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'home/home.html',
        controller: 'homeCtrl'
    });
    /* Add New States Above */
}


function homeCtrl($scope) {
   $scope.test="Home Page Time";
}

angular.module('home', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('home').config(homeConfig);

angular.module('home').controller('HomeCtrl', ['$scope', homeCtrl]);
})();
