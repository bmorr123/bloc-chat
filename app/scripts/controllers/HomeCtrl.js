(function() {
    function HomeCtrl($uibModal, Room, Message) {
        this.rooms = Room.all;
        this.messages = Message;
        this.activeRoom;

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
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', 'Message', HomeCtrl]);
})();
