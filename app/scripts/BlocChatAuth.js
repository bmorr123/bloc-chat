(function() {
    function BlocChatAuth($rootScope, $firebaseAuth, $location) {
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
        .module('blocChat')
        .run(['$rootScope', '$firebaseAuth', '$location', BlocChatAuth]);
})();
