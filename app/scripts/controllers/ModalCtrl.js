(function() {
    function ModalCtrl($uibModal, Room) {
        this.open = function() {
            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/modals/room_modal.html',
                controller: 'ModalCtrl as modal'
            });

            modalInstance.result;
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
})();
