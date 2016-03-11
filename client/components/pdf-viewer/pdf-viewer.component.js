angular.module('leukemiapp').controller('pdfController', PdfViewerController);

function PdfViewerController($scope, $reactive) {
   $reactive(this).attach($scope);
   var vm = this;

   $scope.pdfUrl = '/pdf/firstpdf.pdf';
   console.log('pdf URL is ', $scope.pdfUrl);

   $scope.onError = (error) => {
      console.log(error);
   }

   $scope.onProgress = (progress) => {
      console.log(progress);
   }
}

PDFDocuments = [
   '/firstpdf.pdf'
];