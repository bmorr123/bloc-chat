(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        /*
        * @function getByRoomId
        * @desc Queries for the messages of the given roomId
        * @param {String} roomId
        */
        Message.getByRoomId = function(roomId) {
            var roomRef = firebase.database().ref().child("messages").orderByChild("roomId").equalTo(roomId);
            var roomMessages = $firebaseArray(roomRef);

            console.log(roomId);
            console.log(roomRef);
            console.log(roomMessages);
            console.log(messages);
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
