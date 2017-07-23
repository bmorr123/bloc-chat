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
            Room.all.$add(room).then(function(ref) {
                var id = ref.key;
                console.log("Added record with id " + id);
            });
        };

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
