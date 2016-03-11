angular.module('leukemiapp').directive('bloodsampleCard', function () {
   return {
      restrict: 'E',
      templateUrl: 'client/components/frontpage-cards/bloodsample/bloodsample-card.html',
      controllerAs: 'bloodcard',
      controller: BloodsampleCardController
   }
});

function BloodsampleCardController($scope, $reactive, $location) {
   $reactive(this).attach($scope);
   var vm = this;

   vm.subscribe('bloodsampleData');

   vm.helpers({
      latestBloodsampleRegistration: () => {
         //var selectedDate = Session.get('selectedDate');
         return Bloodsample.findOne(
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
   console.log(vm.latestBloodsampleRegistration);

   vm.newRegistration = () => {
      Session.set('registrationType', 'Bloodsample');
      $location.path("app/questionwizard");
   };

   vm.showGraphData = () => {
      Session.set('graphDataType', 'Bloodsample');
      $location.path("app/graphdata")
   };

   vm.alat = () => {
      var registration = vm.latestBloodsampleRegistration;
      if (registration !== undefined && registration.Alat != null)
         return registration.Alat;
      else return ' - ';
   };

   vm.hemoglobin = () => {
      var registration = vm.latestBloodsampleRegistration;
      if (registration !== undefined && registration.Hemoglobin != null)
         return registration.Hemoglobin;
      else return ' - ';
   };

   vm.thrombocytter = () => {
      var registration = vm.latestBloodsampleRegistration;
      if (registration !== undefined && registration.Thrombocytter != null)
         return registration.Thrombocytter;
      else return ' - ';
   }
}