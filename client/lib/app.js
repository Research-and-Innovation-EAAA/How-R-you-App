angular
   .module('leukemiapp', [
      'angular-meteor',
      'ionic',
      'flexcalendar',
      'pascalprecht.translate',
      'accounts.ui',
      'mgo-angular-wizard',
      'ionic-datepicker',
      'ionic-timepicker',
      'nvd3',
      'pdf'
   ]);

if (Meteor.isCordova) {
   angular.element(document).on('deviceready', onReady);
}
else {
   angular.element(document).ready(onReady);
}

// Manually bootstrap the app
// Removes the need to use ng-app in index.html
function onReady() {
   angular.bootstrap(document, ['leukemiapp'], {
      strictDi: true
   });
}

