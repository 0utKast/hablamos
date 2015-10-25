angular
  .module('hablamos')
  .controller('ChatDetailCtrl', ChatDetailCtrl);
 
function ChatDetailCtrl ($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
}