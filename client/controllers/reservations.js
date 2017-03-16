var ReservationApp = angular.module('ReservationApp');

ReservationApp.controller('ReservationController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
    console.log('ReservationController loaded');

    $scope.getReservations = function(){
        $http.get('/reservations').then(function(response){
            $scope.reservations = response.data;
        });
    }

    $scope.getReservation = function(){
        var id=$routeParams._id;
        $http.get('/reservations/'+id).then(function(response){
            $scope.reservations = response.data;
        });
    }
    
   $scope.addReservation = function(){
        $http.post('/reservations', $scope.reservation).then(function(response){
            window.location.href='/';
        });
    }

    $scope.updateReservation = function(){
        var id=$routeParams._id;
        $http.post('/reservations/'+id, $scope.reservation).then(function(response){
            window.location.href='/';
        });
    }

    $scope.deleteReservation = function(id){
        $http.delete('/reservations/'+id, $scope.reservation).then(function(response){
            window.location.href='/';
        });
    }
}]);