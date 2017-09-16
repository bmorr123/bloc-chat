(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        /*
        * @function getByRoomId
        * @desc Queries for the messages of the given roomId, and saves them to Message.all
        * @param {String} roomId
        */
        Message.getByRoomId = function(roomId) {
            var roomRef = ref.orderByChild("roomId").equalTo(roomId);
            var roomMessages = $firebaseArray(roomRef);

            Message.all = roomMessages;
        };

        /*
        * @function sendMessage
        * @desc Sends a new message to the current chat room
        * @param (Object) newMessage
        */
        Message.sendMessage = function(newMessage) {
            messages.$add(newMessage).then(function(ref) {
                var id = ref.key;
                console.log("Added message with id " + id);
            });
        };

        return Message;
    }

    angular
        .module('chattastic')
        .factory('Message', ['$firebaseArray', Message]);
})();
