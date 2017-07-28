(function() {
    function HomeCtrl($uibModal, $firebaseAuth, Room, Message, LoginAuth) {
        this.rooms = Room.all;
        this.messages = Message;
        this.loginHandle = LoginAuth;

        /*
        * @desc Holds the current active chat room object
        * @type {Object}
        */
        this.activeRoom;

        /*
        * @desc Holds the message that the user has typed to be sent
        * @type {String}
        */
        this.typedMessage = "";

        /*
        * @function openRoomModal
        * @desc Opens the new room modal to create a new room
        */
        this.openRoomModal = function() {
            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/modals/room_modal.html',
                controller: 'RoomModalCtrl as roomModal'
            });
        };

        /*
        * @function newMessage
        * @desc Prepares a new chat message to be sent to current room
        */
        this.newMessage = function() {
            //Check to see if there is an active chat room
            if(!this.activeRoom) {
                alert("Please select a chat room in order to send a message");
                return null;
            }

            //Obtain message to send
            var message = this.typedMessage;
            if(!message || message === "") {
                alert("Please type a message to send");
                return null;
            }

            var currentUser = $cookies.get('blocChatCurrentUser');
            var currentTime = Date.now();

            //Create & send new message object
            var messageObj = { content: message,
                                roomId: this.activeRoom.$id,
                                sentAt: currentTime,
                                username: currentUser};

            Message.sendMessage(messageObj);
            this.typedMessage = "";
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', '$firebaseAuth', 'Room', 'Message', 'LoginAuth', HomeCtrl]);
})();
