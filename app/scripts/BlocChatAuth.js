(function() {
    function BlocChatAuth($rootScope, $firebaseAuth, $location) {
        // var currentUser = $cookies.get('blocChatCurrentUser');
        // if(!currentUser || currentUser === '') {
        //     $uibModal.open({
        //         ariaLabelledBy: 'modal-title',
        //         ariaDescribedBy: 'modal-body',
        //         templateUrl: '/templates/modals/username_modal.html',
        //         controller: 'UserModalCtrl as userModal',
        //         backdrop: 'static',
        //         keyboard: false
        //     });
        // }

        firebase.auth().onAuthStateChanged(function(user) {
            if(user) {
                $rootScope.$apply(function() {
                    $location.path('/')
                });
            } else {
                $rootScope.$apply(function() {
                    $location.path('/login')
                });
            }
        });
    }

    angular
        .module('blocChat')
        .run(['$rootScope', '$firebaseAuth', '$location', BlocChatAuth]);
})();
