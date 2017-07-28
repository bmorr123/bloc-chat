(function() {
    function LoginAuth($firebaseAuth, $firebaseArray) {
        var LoginAuth = {};
        var auth = firebase.auth();

        /*
        * @function login
        * @desc Logs in the specified user
        * @params {String} email, {String} password
        */
        LoginAuth.login = function(email, password) {
            auth.signInWithEmailAndPassword(email, password).catch(function(error) {
                alert("Authentication failed: " + error.message);
            });
        };

        /*
        * @function logout
        * @desc Logs out the user that is logged in
        */
        LoginAuth.logout = function() {
            auth.signOut();
        };

        /*
        * @function register
        * @desc Registers a specified user to the database
        * @params {String} email, {String} password, {String} username
        */
        LoginAuth.register = function(email, password, username) {

        };

        return LoginAuth;
    }

    angular
        .module('blocChat')
        .factory('LoginAuth', ['$firebaseAuth', '$firebaseArray', LoginAuth]);
})();
