(function() {
    function LoginAuth($firebaseAuth) {
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
            if(!username.match(/^[a-zA-Z0-9]{5,}$/i)) {
                alert("Please enter a valid username (min. length of 5, only letters and/or numbers)");
                return null;
            }

            var user = null;

            auth.createUserWithEmailAndPassword(email, password)
                .then(function() {
                    user = auth.currentUser;

                    user.updateProfile({
                        displayName: username
                    });
                })
                .catch(function(error) {
                    alert("Registration failed: " + error.message);
                });
        };

        return LoginAuth;
    }

    angular
        .module('chattastic')
        .factory('LoginAuth', ['$firebaseAuth', LoginAuth]);
})();
