var app = angular.module("myModule", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/home", {
      templateUrl: "pages/pages-student/home.html",
    })
    .when("/nhiem-vu", {
      templateUrl: "pages/pages-student/mission.html",
    })
    .when("/qua-tang", {
      templateUrl: "pages/pages-student/gift.html",
    })
    .otherwise({
      redirectTo: "/home",
    });
});
