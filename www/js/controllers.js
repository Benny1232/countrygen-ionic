angular.module('starter.controllers', [])

.controller('InputCtrl', function($scope) {

  console.log("testing 123");

})
.controller('OutputCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('HelpCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
