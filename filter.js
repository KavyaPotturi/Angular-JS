<!DOCTYPE html>
<html ng-app="myApp">
  <body ng-controller="myCtrl">
    <p>Original: {{name}}</p>
    <p>Uppercase: {{name | uppercase}}</p>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
    <script>
      var app = angular.module("myApp", []);
      app.controller("myCtrl", function($scope) {
        $scope.name = "angularjs filters";
      });
    </script>
  </body>
</html>
