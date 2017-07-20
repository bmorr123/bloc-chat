(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        Room.all = rooms;

        /*
        * @function add
        * @desc Adds a new chat room to the array of rooms
        * @param {Object} room
        */
        Room.add = function(room) {
            Room.all.$add(room);
        };

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
