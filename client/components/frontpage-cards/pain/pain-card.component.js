angular.module('leukemiapp').directive('painCard', function () {
   return {
      restrict: 'E',
      templateUrl: 'client/components/frontpage-cards/pain/pain-card.html',
      controllerAs: 'paincard',
      controller: PainCardController
   }
});

function PainCardController($scope, $reactive, $location) {
   $reactive(this).attach($scope);
   var vm = this;

   vm.subscribe('painData');

   vm.helpers({
      latestPainRegistration: () => {
         //var selectedDate = Session.get('selectedDate');
         return Pain.findOne(
            {
               //timestamp: {$lt: moment(selectedDate).toDate()}
            }, {
               sort: {
                  timestamp: -1,
                  createdAt: -1
               }
         });
      }
   });
   console.log(vm.latestPainRegistration);

   vm.newRegistration = () => {
      Session.set('registrationType', 'Pain');
      $location.path("app/questionwizard");
   };

   vm.showGraphData = () => {
      Session.set('graphDataType', 'Pain');
      $location.path("app/graphdata");
   };

   vm.painType = () => {
      var registration = vm.latestPainRegistration;
      var message = 'Ingen data';
      if (registration !== undefined) {
         message = registration.painType;
         message = message.charAt(0).toUpperCase() + message.slice(1);
      }
      return message;
   };

   vm.painScore = () => {
      var registration = vm.latestPainRegistration;
      var message = 'Ingen data';
      if (registration !== undefined)
         message = registration.painScore;
      return message;
   };

   vm.morphineDose = () => {
      var registration = vm.latestPainRegistration;
      var message = 'Ingen data';
      if (registration !== undefined) {
         if (registration.morphineDose !== undefined && registration.morphineDose > 0)
            message = registration.morphineDose;
         else
            message = 'Ingen morfin';
      }
      return message;
   };

   vm.morphineMeasureUnit = () => {
      var registration = vm.latestPainRegistration;
      var message = '';
      if (registration !== undefined) {
         if (registration.morphineMeasureUnit !== undefined)
            message = registration.morphineMeasureUnit;
      }
      return message;
   }
}