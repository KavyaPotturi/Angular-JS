<!DOCTYPE html>
<html ng-app="myApp">
  <body>
    <hello-directive></hello-directive>
    
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
    <script>
      var app = angular.module("myApp", []);
      app.directive("helloDirective", function() {
        return {
          template: "<h3>This is a custom directive!</h3>"
        };
      });
    </script>
  </body>
</html>
