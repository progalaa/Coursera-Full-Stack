var app = angular.module("confusionApp");
 .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
    $scope.dishes= menuFactory.getDishes();
    $scope.tab = 1;
    $scope.select = function(setTab) {
      $scope.tab = setTab;

      if (setTab === 2)
        $scope.filtText = "appetizer";
      else if (setTab === 3)
        $scope.filtText = "mains";
      else if (setTab === 4)
        $scope.filtText = "dessert";
      else
        $scope.filtText = "";
    };

    $scope.isSelected = function(checkTab) {
      return ($scope.tab === checkTab);
    };


    $scope.filtText = '';
    $scope.showDetails = false;

    $scope.toggleButton = function() {
      $scope.showDetails = !$scope.showDetails;
    };

  }])
  .controller('ContactController', ['$scope', function($scope) {

    $scope.feedback = {
      mychannel: "",
      firstName: "",
      lastName: "",
      agree: false,
      email: ""
    };
    $scope.channels = [{
      value: "tel",
      label: "Tel."
    }, {
      value: "Email",
      label: "Email"
    }];
    $scope.invalidChannelSelection = false;
  }])

.controller('FeedbackController', ['$scope', function($scope) {
  $scope.submitFeedback = function() {
    console.log($scope.feedback);
    if ($scope.feedback.agree && ($scope.feedback.mychannel === "") && !$scope.feedback.mychannel) {
      $scope.invalidChannelSelection = true;
      console.log('Incorrect');
    }
      else {
        $scope.invalidChannelSelection = false;
        $scope.feedback = {
          mychannel: "",
          firstName: "",
          lastName: "",
          agree: false,
          email: ""
        };
        $scope.feedback.mychannel = "";

        $scope.feedbackForm.$setPristine();
        console.log($scope.feedback);
      }
    };
}])

 .controller('DishDetailController', ['$scope', 'menuFactory', function($scope, menuFactory) {

  $scope.dish= menuFactory.getDish(3);
  $scope.sortBy = '';
})
.controller('DishCommentController', function($scope){
  $scope.newComment = {
      rating: "",
      comment: "",
      author: "",
      date: ""
  };
  $scope.newComment.rating = 5;
  $scope.submitComment = function(){
    $scope.newComment.date = Date.now();
    $scope.dish.comments.push($scope.newComment);
    $scope.commentForm.$setPristine();
    $scope.newComment = {
        rating: "",
        comment: "",
        author: "",
        date: ""
    };
  };

})


;
