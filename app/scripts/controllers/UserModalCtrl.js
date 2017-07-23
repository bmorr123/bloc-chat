(function() {
    function UserModalCtrl($uibModalInstance, $cookies) {
        /*
        * @desc Holds the value of the current user's username
        * @type {String}
        */
        this.userName;

        /*
        * @function saveUsername
        * @desc Sets the cookie for username to what the user has typed in
        */
        this.saveUsername = function() {
            var customUserName = this.userName || '';
            if(!customUserName.match(/^[a-zA-Z0-9]{5,}$/i)) {
                alert("Please enter a valid username (min. length of 5, only letters and/or numbers)");
                return null;
            }

            $cookies.put('blocChatCurrentUser', customUserName);
            console.log('Username is equal to: ' + this.userName);

            $uibModalInstance.close('set username');
        };
    }

    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['$uibModalInstance', '$cookies', UserModalCtrl]);
})();
