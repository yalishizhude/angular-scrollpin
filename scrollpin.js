/*global angular*/
(function(angular){		
	'use strict';
	angular.module('scrollpinapp',[])
	.controller('mainCtrl', function ($scope) {
		//测试数据
		$scope.subjects = [];
		for (var i = 0; i < 20; i++) {
			$scope.subjects.push({
				id: i,
				name: i+'.',
				content: Math.random()
			});
		}
	})
	.directive('scrollpin', function($window){
		return {
			link: function(scope, element, attrs){
				angular.element($window).on('scroll', onScroll);
				function onScroll(){
					var offset = $window.pageYOffset;
					var offsetTop = element[0].offsetTop;
					var before = element[0].previousElementSibling;
					if(offsetTop<offset) {
						var move = parseInt(attrs.scrollpin||0)+offsetTop-offset;
						before.style.position = 'fixed';
						if(move<0&&-move<parseInt(attrs.scrollpin)){
							before.style.top = move+'px';
						} else {
							before.style.top = '0';
						}
					} else {
						before.style.position = 'absolute';
						before.style.top = '';
					}
				}
			}
		};
	})
	;
})(angular);