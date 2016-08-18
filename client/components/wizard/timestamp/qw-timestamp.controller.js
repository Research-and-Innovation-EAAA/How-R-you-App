angular.module('leukemiapp').controller('timestampController', TimestampController);

function TimestampController($scope, $reactive, $timeout) {
   $reactive(this).attach($scope);
   var vm = this;

   var subHandle;

   vm.helpers({
      registrationWithTimestamp: () => {
         return Registrations.findOne({
            $and: [
               {moduleName: vm.dataType},
               {timestamp: vm.getReactively('timestamp')}
            ]
         });
      }
   });

   $scope.$on('stepLoaded', function (event, data) {
      if (data.stepNumber == 0) {
         console.log('Timestamp loaded!');
         subHandle = vm.subscribe('registrationWithTimestamp',
            () => [vm.getReactively('dataType'), vm.getReactively('timestamp')],
            () => {
               updateRegistrationTimestamp();
               console.log('Subscription ready!');
            });
      }
   });

   //Init
   vm.dataType = Session.get('registrationType');

   if (vm.timePickerObj === undefined)
      vm.timePickerObj = {
         displayValue: function () {
            return formatTime(vm.timePickerObj.inputEpochTime);
         },
         inputEpochTime: (new Date().getHours() * 60 * 60 + Math.floor(new Date().getMinutes() / 5) * 5 * 60),  //Optional
         step: 5,  //Optional
         format: 24,  //Optional
         titleLabel: 'Tidspunkt',  //Optional
         setLabel: 'Vælg',  //Optional
         closeLabel: 'Luk',  //Optional
         setButtonType: 'button-positive',  //Optional
         closeButtonType: 'button-stable',  //Optional
         callback: function (val) {    //Mandatory
            if (val) {
               vm.timePickerObj.inputEpochTime = val;
               updateRegistrationTimestamp();
            }
         }
      };

   if (vm.datePickerObj === undefined)
      vm.datePickerObj = {
         titleLabel: 'Dato',  //Optional
         todayLabel: 'I dag',  //Optional
         closeLabel: 'Luk',  //Optional
         setLabel: 'Vælg',  //Optional
         setButtonType: 'button-positive',  //Optional
         todayButtonType: 'button-stable',  //Optional
         closeButtonType: 'button-stable',  //Optional
         inputDate: new Date(),  //Optional
         mondayFirst: true,  //Optional
         //disabledDates: disabledDates, //Optional
         weekDaysList: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"], //Optional
         monthList: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], //Optional
         templateType: 'popup', //Optional
         showTodayButton: 'true', //Optional
         modalHeaderColor: 'bar-positive', //Optional
         modalFooterColor: 'bar-positive', //Optional
         //from: new Date(2012, 8, 2), //Optional
         //to: new Date(2018, 8, 25),  //Optional
         callback: function (val) {  //Mandatory
            if (val) {
               vm.datePickerObj.inputDate = val;
               updateRegistrationTimestamp();
            }
         },
         dateFormat: 'dd-MM-yyyy', //Optional
         closeOnSelect: false //Optional
      };

   function formatTime(inputEpochTime) {
      var selectedTime = new Date(inputEpochTime * 1000);
      var hours = selectedTime.getUTCHours();
      var minutes = selectedTime.getUTCMinutes();
      return (hours < 10 ? '0' : '') + hours + ' : ' + (minutes < 10 ? '0' : '') + minutes;
   }

   function updateRegistrationTimestamp() {
      var date = vm.datePickerObj.inputDate;

      //TODO: Add propriety to module config file which controls if time is ignored
      if (vm.dataType !== 'Medicine' && vm.dataType !== 'Bloodsample') {
         var hours = Math.floor(vm.timePickerObj.inputEpochTime / 3600);
         var minutes = Math.floor((vm.timePickerObj.inputEpochTime - hours * 3600) / 60);
         date.setHours(hours, minutes, 0, 0);
      } else {
         date.setHours(12,0,0,0);
      }

      $timeout(() => {
         vm.timestamp = new Date(date.getTime());
      }).then(() => {

         //Code to execute after vm.timestamp is updated

         var registration = Session.get('registration');
         var validated = Session.get('regValidated');

         if (validated === undefined)
            validated = [];
         if (registration === undefined)
            registration = {};
         if (vm.registrationWithTimestamp != null) {
            console.log('registrationWithTimestamp found!');
            validated[0] = false;
            registration = vm.registrationWithTimestamp;

            for (var property in registration) {
               if (registration.hasOwnProperty(property)) {
                  console.log('registration:', registration, 'property:', property);
                  if (registration[property] === '-' ) {
                     registration[property] = null;
                  }
               }
            }
            registration.updating = true;

         } else {
            console.log('registrationWithTimestamp is null!');
            validated[0] = true;
            registration = {
               timestamp: date
            };
         }
         Session.set('regValidated', validated);
         console.log('regValidated session variable updated', validated);
         Session.set('registration', registration);
         console.log('registration session variable updated', registration);
      });
   }

   $scope.$watch(() => {
      return vm.timestamp;
   }, (newVal, oldVal, scope) => {
      console.log('vm.timestamp changed from', oldVal, 'to', newVal);
   })
}