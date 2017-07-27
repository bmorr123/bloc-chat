(function() {
    function LoginCtrl(LoginAuth) {
        this.loginHandle = LoginAuth;

        /*
        * @desc Dictates when to show the login form or registration form
        * @type {Boolean}
        */
        this.loginForm = true;
    }

    angular
        .module('blocChat')
        .controller('LoginCtrl', ['LoginAuth', LoginCtrl]);
})();
