/**
 * You must include the dependency on 'ngMaterial'
 */
(function() {
     'use strict';

angular.module('nextTools', ['ngMaterial', 'ui.router'])
  .controller('nextToolsCtrl', CardlstCtrl);

// configuring our routes
.config(function($stateProvider, $urlRouteProvider){

  $stateProvider
  // route to show basic page
  .state('main', {
     url: '/main',
     templateUrl: 'main/main.html',
     controller: 'MainController',
     controllerAs: 'main'

  })
   // send users to the form page
    $urlRouterProvider.otherwise('/form/profile');
});


function CardlstCtrl($scope) {
  // next and previews function
   $scope.max = 4;
   $scope.min = 0;
   $scope.selectedIndex = 0;
   $scope.nextTab = function() {
     var index = ($scope.selectedIndex == $scope.max) ? 0 : $scope.selectedIndex + 1;
     $scope.selectedIndex = index;
   };
   $scope.preTab = function() {
     var index = ($scope.selectedIndex == $scope.min) ? 0 : $scope.selectedIndex - 1;
     $scope.selectedIndex = index;
  };

  // matths list
  $scope.mathslists = [
    { title: '2D Graph Plotter', img: 'assets/images/colors.png' },
    { title: 'Unit Converter', img: 'assets/images/time.png' },
    { title: 'Area Explorer', img: 'assets/images/map.png' },
    { title: 'Common  Logarithms', img: 'assets/images/clipboard.png' },
    { title: 'maths Tools', img: 'assets/images/settings.png' }
  ];

  // chemistry list
  $scope.chemistrylists = [
    { title: 'Periodic Table', img: 'assets/images/colors.png' },
    { title: 'pH of Acids and Bases', img: 'assets/images/compass.png' },
    { title: 'Balancing Equations', img: 'assets/images/settings.png' }
  ];

  // social list
  $scope.sociallists = [
    { title: 'Next Maps', img: 'assets/images/map.png'},
    { title: 'iMaps', img: 'assets/images/map.png'}

  ];

  //  primary list
  $scope.primarylists = [
    { title: 'Drawing', img: 'assets/images/colors.png'},
    { title: 'Clock', img: 'assets/images/map.png'},
    { title: 'World Time', img: 'assets/images/compass.png'},
    { title: 'Abacus', img: 'assets/images/clipboard.png'},
    { title: 'Multiplication Table', img: 'assets/images/settings.png'},
    { title: 'Drawing', img: 'assets/images/colors.png'},
    { title: 'Clock', img: 'assets/images/map.png'},
    { title: 'World Time', img: 'assets/images/compass.png'},
    { title: 'Abacus', img: 'assets/images/clipboard.png'},
    { title: 'Multiplication Table', img: 'assets/images/settings.png'}
  ];
}
$(document).ready(
function() {
 // $(".cards_wrap").niceScroll();
});

})();
