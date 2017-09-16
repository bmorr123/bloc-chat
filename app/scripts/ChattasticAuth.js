(function() {
    function ChattasticAuth($rootScope, $firebaseAuth, $location) {
        firebase.auth().onAuthStateChanged(function(user) {
            if(user) {
                $rootScope.$apply(function() {
                    $location.path('/')
                });
            } else {
                $rootScope.$apply(function() {
                    $location.path('/login')
                });
            }
        });
    }

    angular
        .module('chattastic')
        .run(['$rootScope', '$firebaseAuth', '$location', ChattasticAuth]);
})();
