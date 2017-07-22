(function() {
    function HomeCtrl($uibModal, Room, Message) {
        this.rooms = Room.all;
        this.messages = Message;
        this.activeRoom;

        /*
        * @function open
        * @desc Opens the modal to create a new room
        */
        this.open = function() {
            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/modals/room_modal.html',
                controller: 'ModalCtrl as modal'
            });
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', 'Message', HomeCtrl]);
})();
