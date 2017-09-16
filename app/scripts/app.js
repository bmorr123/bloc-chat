(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })
            .state('login', {
                url: '/login',
                controller: 'LoginCtrl as login',
                templateUrl: '/templates/login.html'
            });
    }

    angular
        .module('chattastic', ['ui.router', 'ui.bootstrap', 'firebase'])
        .config(config);
})();
