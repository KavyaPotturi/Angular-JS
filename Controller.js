<!DOCTYPE html>
<html ng-app="myApp">
  <body ng-controller="myCtrl">
    <h2>{{greeting}}</h2>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
    <script>
      var app = angular.module('myApp', []);
      app.controller('myCtrl', function($scope) {
        $scope.greeting = "Welcome to Angular JS!";
      });
    </script>
  </body>
</html>
