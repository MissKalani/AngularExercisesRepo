(function () {
    'use strict';
    var app = angular.module('angularExerciseApp');

    app.controller('eventsCtrl', ['$scope', function ($scope) {
        $scope.event = {
            name: 'Angular Exercise',
            date: 'April 10 2016',
            time: '10:30 AM',
            location: {
                address: 'Altran AB Borlänge Office',
                city: 'Borlänge',
                country: 'Sweden'
            },
            sessions: [
                {
                    name: 'Directives Class',
                    creatorName: 'Jonas Nilsson',
                    voteCount: 0
                },
                {
                    name: 'Scopes for the fun of it',
                    creatorName: 'Ida Benjaminsson',
                    voteCount: 0
                },
                {
                    name: 'Well behaved controllers',
                    creatorName: 'Louise Bennett',
                    voteCount: 0
                }
            ]
        }
        $scope.upVoteSession = function (session) {
            session.voteCount++;
        };
        $scope.downVoteSession = function (session) {
            session.voteCount--;
        }

    }]);
})();