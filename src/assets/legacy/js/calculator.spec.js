// describe("CalculatorController", function () {
//   beforeEach(module("calculatorApp"));

//   var $controller, $rootScope;

//   beforeEach(inject(function (_$controller_, _$rootScope_) {
//     $controller = _$controller_;
//     $rootScope = _$rootScope_;
//   }));

//   it("should add two numbers", function () {
//     var $scope = $rootScope.$new();
//     var controller = $controller("CalculatorController", { $scope: $scope });

//     $scope.a = 5;
//     $scope.b = 3;
//     $scope.add();

//     expect($scope.result).toBe(8);
//   });

//   it("should subtract two numbers", function () {
//     var $scope = $rootScope.$new();
//     var controller = $controller("CalculatorController", { $scope: $scope });

//     $scope.a = 10;
//     $scope.b = 4;
//     $scope.subtract();

//     expect($scope.result).toBe(6);
//   });

//   it("should multiply two numbers", function () {
//     var $scope = $rootScope.$new();
//     var controller = $controller("CalculatorController", { $scope: $scope });

//     $scope.a = 7;
//     $scope.b = 8;
//     $scope.multiply();

//     expect($scope.result).toBe(56);
//   });

//   it("should divide two numbers", function () {
//     var $scope = $rootScope.$new();
//     var controller = $controller("CalculatorController", { $scope: $scope });

//     $scope.a = 10;
//     $scope.b = 2;
//     $scope.divide();

//     expect($scope.result).toBe(5);
//   });
// });
