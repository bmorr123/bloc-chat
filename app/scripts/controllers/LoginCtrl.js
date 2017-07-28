(function() {
    function LoginCtrl(LoginAuth) {
        this.loginHandle = LoginAuth;

        /*
        * @desc Dictates when to show the login form or registration form
        * @type {Boolean}
        */
        this.loginForm = true;

        /*
        * @desc Hold the email that is inputted to the login or registration form
        * @type {String}
        */
        this.loginEmail = "";
        this.registerEmail = "";

        /*
        * @desc Hold the password that is inputted to the login or registration form
        * @type {String}
        */
        this.loginPassword = "";
        this.registerPassword = "";

        /*
        * @desc Holds the username that is inputted to the registration form
        * @type {String}
        */
        this.registerUser = "";
    }

    angular
        .module('blocChat')
        .controller('LoginCtrl', ['LoginAuth', LoginCtrl]);
})();
