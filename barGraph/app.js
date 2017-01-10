angular.module('MyApp',['ui.router','ngDraggable'])
.config(function ($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/Activity');
  $stateProvider
       .state('Activity', {
         url: '/Activity',
         templateUrl: 'templates/Activity.html',
         controller: 'ActivityController'
       })
       .state('Activity.Shape', {
         templateUrl: 'templates/Shape.html',
         controller: 'ActivityController'
       })
       .state('Activity.Color', {
         templateUrl: 'templates/Color.html',
         controller: 'ColorsController'
       })
     });
