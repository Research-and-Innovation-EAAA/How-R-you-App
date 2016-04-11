angular.module('leukemiapp').controller('pdfController', PdfViewerController);

function PdfViewerController($scope, $reactive, $ionicPopup) {
   $reactive(this).attach($scope);
   var vm = this;

   vm.clickTester = () => {
      console.log('Click registered.');
   };

   vm.openUrl = (url) => {
      if (Meteor.isCordova) {
         $ionicPopup.alert({
            title: 'Funktion ikke tilgængelig',
            content: 'Denne funktion er kun tilgængelig på leukemia.meteorapp.com'
         });
      } else {
         window.open(url, "_blank");
      }
   }
}