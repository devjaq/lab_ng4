"use strict";



angular
  .module("App", ["ngRoute"])
  .config(($routeProvider, $locationProvider) => {
    $routeProvider
    .when("/userProfile", {
      template: `<user-profile></user-profile>`
    })
    .when("/editProfile", {
      template: `<edit-profile></edit-profile>`
    })
    .otherwise({
      redirectTo: `/userProfile`
    });
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   // requireBase: false
    // });
  });