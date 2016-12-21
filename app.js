(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);


  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.items="";
    $scope.answer ="";

    function splitString(stringToSplit, separator){
      var arrayOfItems = stringToSplit.split(separator);
      return arrayOfItems;
    }

    function countItems(){

      var coma = ",";
      var itemsForCount = splitString($scope.items, coma);
      var count = itemsForCount.length;
      console.log(count);
      return count;
    }

    $scope.showAnswer = function(){

      if ($scope.items == ""){
        $scope.answer = "Please enter data first!"
      }else {

      var value = countItems();

      if (value <= 3) {
        $scope.answer = "Enjoy!";

      }else {
        $scope.answer = "Too much!";
      }

    }

}
  }
})();
