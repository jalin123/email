

		var app = angular.module('myApp', ['ui.router']);

		//状态路由home.about
		app.config(function($stateProvider,$urlRouterProvider){
			$stateProvider.state('home',{
				url:'/home',
				templateUrl:'pages/page_4.html'
			}).state('xx',{
				url:'/xx',
				templateUrl:'pages/page_1.html'
			}).state('sx',{
				url:'/sx',
				templateUrl:'pages/page_2.html'
			}).state('txl',{
				url:'/txl',
				templateUrl:'pages/page_3.html'
			});

			$stateProvider.state('xx.putong',{
				url:'/putong',
				templateUrl:'pages/page_5.html'
			}).state('xx.qun',{
				url:'/qun',
				templateUrl:'pages/qunmail.html'
			}).state('xx.heka',{
				url:'/heka',
				templateUrl:'pages/heka.html'
			}).state('xx.ming',{
				url:'/ming',
				templateUrl:'pages/mingxin.html'
			}).state('xx.yinshi',{
				url:'/yinshi',
				templateUrl:'pages/yinshi.html'
			});
			// $urlRouterProvider.otherwise('/putong');


			
			$urlRouterProvider.otherwise('/home');
			
		});