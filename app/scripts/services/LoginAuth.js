(function() {
    function LoginAuth($firebaseAuth, $firebaseArray) {
        var LoginAuth = {};

        return LoginAuth;
    }

    angular
        .module('blocChat')
        .factory('LoginAuth', ['$firebaseAuth', '$firebaseArray', LoginAuth]);
})();
