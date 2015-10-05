var app = angular.module('flapperNews',[]);

app.controller('MainCtrl', [
	'$scope',
	'posts',
	function($scope, posts){
		$scope.posts = posts.post;

		$scope.addPost = function  () {
			if(!$scope.title || $scope.title === '') {return;}
			$scope.posts.push({
				title: $scope.title,
				link: $scope.link,
				upvotes: 0
			});
			$scope.title = '';
			$scope.link= '';
		};

		$scope.incrementUpvotes = function(post) {
			post.upvotes += 1;
		};
	}]);

	app.factory('posts', [function(){
		var postFactory = {
			post: []
		};
		return postFactory;
	}]);
