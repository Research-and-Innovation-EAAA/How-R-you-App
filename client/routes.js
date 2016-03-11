angular.module('leukemiapp')
   .config(function ($stateProvider, $urlRouterProvider) {

      // Ionic uses AngularUI Router which uses the concept of states
      // Learn more here: https://github.com/angular-ui/ui-router
      $stateProvider
         .state('app', {
            url: '/app',
            templateUrl: 'client/components/side-menu/side-menu.html'
         })
         .state('app.frontpage', {
            url: '/frontpage',
            views: {
               'menuContent': {
                  templateUrl: 'client/components/frontpage/frontpage.html'
               }
            }
         })
         .state('app.questionwizard', {
            url: '/questionwizard',
            views: {
               'menuContent': {
                  templateUrl: 'client/components/wizard/question-wizard.html'
               }
            }
         })
         .state('app.graphdata', {
            url: '/graphdata',
            views: {
               'menuContent': {
                  templateUrl: 'client/components/graph-data/graph-data.html'
               }
            }
         })
         .state('app.pdf', {
            url: '/pdf',
            views: {
               'menuContent': {
                  templateUrl: 'client/components/pdf-viewer/pdf-viewer-container.html'
               }
            }
         });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/frontpage');
   });