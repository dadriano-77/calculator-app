angular
  .module("calculatorApp")
  .controller("CalculatorController", function ($scope) {
    $scope.a = 0;
    $scope.b = 0;
    $scope.result = 0;

    $scope.add = function () {
      $scope.result = $scope.a + $scope.b;
    };

    $scope.subtract = function () {
      $scope.result = $scope.a - $scope.b;
    };

    $scope.multiply = function () {
      $scope.result = $scope.a * $scope.b;
    };

    $scope.divide = function () {
      $scope.result =
        $scope.a !== 0 && $scope.b !== 0 ? $scope.a / $scope.b : 0;
    };
  });
