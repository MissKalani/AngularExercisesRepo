(function () {
    'use strict';
    var app = angular.module('angularExerciseApp');

    app.controller('greetingsCtrl', ['$scope', function ($scope) {
        $scope.helloMessage = "Hello from the other side!";
        $scope.myStyle = { color: 'red' };
        $scope.myClass = "blue";
        $scope.disableBtn = true;
        $scope.person = {
            name: 'Mae Laurene Suralta',
            title: 'IT-Consultant',
            details: {
                birthdate: '24 May 1982', email: 'maelaurene@gmail.com'
            },        
        };
        $scope.logoImg = 'img/angularlogo.jpg';

        $scope.snippet = '<span style="color:red">hi there</span>';

    }]);
})();


