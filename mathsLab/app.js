/*Routing the Application*/
/*Including the  all Dependencies*/
angular.module('MyApp',['ui.router','ngDraggable'])
.config(function ($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/Home');
  $stateProvider
       .state('Home', {
         url: '/Home',
         templateUrl: 'templates/Home.html'
       })
       .state('Home.Aim',{
         url:'/Aim',
         templateUrl:'templates/Aim.html'
       })
       .state('Home.Content',{
         url:'/Content',
         templateUrl:'templates/Content.html'
       })
       .state('Activity',{
         url:'/Activity',
         templateUrl:'templates/Activity.html',
         controller:'ActivityController'
       })
       .state('Quiz',{
         url:'/Quiz',
         templateUrl:'templates/Quiz.html',
         controller:'ActivityController'
       })
})
