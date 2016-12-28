(function() {

  var app = angular.module('home', []);

  var MainController = function($scope){

    var person = {
      firstName: "Kyle",
      lastName: "Zercher"

    };
    
    $scope.person = person;

    $scope.message = "Hello World";

  };

  app.controller("MainController", ["$scope", MainController]);

}());
