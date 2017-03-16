var ReservationApp = angular.module('ReservationApp',['ui.router']);

ReservationApp.config(function($stateProvider){
    var initState = {
        name: 'initial',
        url: '#!/',
        template: 'views/reservations.html'
    }

    var addState = {
        name: 'add',
        url: '#!/reservations/add',
        template: 'views/add_reservation.html'
    }

    var detState = {
        name: 'details',
        url: '#!/reservations/details/{_id}',
        template: 'views/reservation_details.html'
    }

    $stateProvider.state(initState);
    $stateProvider.state(addState);
    $stateProvider.state(detState);

    
    
    /*$routeProvider.when('/', {
        controller:'ReservationController',
        templateUrl: 'views/reservations.html'
    })
    .when('/reservations', {
        controller: 'ReservationController',
        templateUrl: 'views/reservations.html'
    })
    .when('/reservations/add', {
        controller:'ReservationController',
        templateUrl: 'views/add_reservation.html'
    })
    .when('/reservations/edit/', {
        controller:'ReservationController',
        templateUrl: 'views/edit_reservation.html'
    })
    .otherwise({
        redirectTo: '/'
    });*/
})  