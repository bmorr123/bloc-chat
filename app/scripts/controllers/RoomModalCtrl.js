(function() {
    function RoomModalCtrl($uibModalInstance, Room) {
        /*
        * @desc Holds the value of the text entered in new room modal text box
        * @type {String}
        */
        this.roomName = "";

        /*
        * @function cancel
        * @desc Closes the new room modal when the user clicks the cancel button
        */
        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };

        /*
        * @function createRoom
        * @desc Creates a new chat room to display on the home page
        */
        this.createRoom = function() {
            //Obtain name of room to create object
            var customRoomName = this.roomName;
            if(!customRoomName.match(/^[a-zA-Z\s]{5,}$/i)) {
                alert("Please enter a valid room name (min. length of 5, only letters and spaces)");
                return null;
            }

            //Add a new room object
            var newRoom = { name: customRoomName };
            Room.add(newRoom);

            $uibModalInstance.close('added room');
        };
    }

    angular
        .module('chattastic')
        .controller('RoomModalCtrl', ['$uibModalInstance', 'Room', RoomModalCtrl]);
})();
