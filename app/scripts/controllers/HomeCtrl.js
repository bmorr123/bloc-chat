(function() {
    function HomeCtrl($scope, Room) {
        $scope.rooms = Room[Object.keys(Room)[0]];
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', HomeCtrl]);
})();
