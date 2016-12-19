(function () {
'use strict';

angular.module('myApp', [])
.controller('myCtrl', myCtrl);

myCtrl.$inject = ["$scope"];
function myCtrl ($scope) {
  $scope.String = "";
  $scope.Items = 0;
  $scope.Result;
  $scope.Output = null;

  $scope.myRough = function() {
    if($scope.String.length >0) {
    console.log("Items entered:" +String);
    var itemList = $scope.String.split(",");
    console.log("Items as list:" +itemList);

    $scope.Result = CountItems(itemList);
    $scope.Output = true;
    }
    else {
      $scope.Result = "Please enter data first";
      $scope.Output = false;
    }
  };
}
function CountItems(items) {
  var itemCount = items.length;
  console.log("items entered:" +itemCount);
  if(itemCount <4)
    return "Enjoy!!!";
  else {
    return "Too Much!!!";
  }
}
})();
