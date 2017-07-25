(function() {
    function LoginCtrl(LoginAuth) {
        this.loginHandle = LoginAuth;
        //Code here...
    }

    angular
        .module('blocChat')
        .controller('LoginCtrl', ['LoginAuth', LoginCtrl]);
})();
