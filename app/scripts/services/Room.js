(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        /*
        * @desc Stores the array of rooms from Firebase database
        * @type {Array}
        */
        Room.all = rooms;

        /*
        * @function add
        * @desc Adds a new chat room to the array of rooms
        * @param {Object} room
        */
        Room.add = function(room) {
            if(ref.orderByChild("name").equalTo(room.name)) {
                alert("That room name already exists. Please enter a different name.");
                return;
            }

            Room.all.$add(room).then(function(ref) {
                var id = ref.key;
                console.log("Added room with id " + id);
            });
        };

        return Room;
    }

    angular
        .module('chattastic')
        .factory('Room', ['$firebaseArray', Room]);
})();
