var app = angular.module('mainApp', ['ui.bootstrap']);

app.config(function ($routeProvider) {
    $routeProvider
    
         .when('/home',
            {
                controller: 'homeController',
                templateUrl: 'app/templates/home.html'
            })
        .otherwise({ redirectTo: '/home' });
});