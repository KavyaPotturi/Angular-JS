<!DOCTYPE html>
<html ng-app="myApp">
  <body ng-controller="myCtrl">
    <ul>
      <li ng-repeat="post in posts">{{post.title}}</li>
    </ul>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
    <script>
      var app = angular.module("myApp", []);
      app.controller("myCtrl", function($scope, $http) {
        $http.get("https://jsonplaceholder.typicode.com/posts")
          .then(function(response) {
            $scope.posts = response.data.slice(0, 5); // show first 5 posts
          });
      });
    </script>
  </body>
</html>
