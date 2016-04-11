angular.module('leukemiapp').controller('pdfController', PdfViewerController);

function PdfViewerController($scope, $reactive) {
   $reactive(this).attach($scope);
   var vm = this;

   vm.clickTester = () => {
      console.log('Click registered.');
   }
}