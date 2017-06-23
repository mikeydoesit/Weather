weatherApp.controller('weatherCtrl', function($scope, $http){

	var vm = $scope;

	vm.channelInfo = {

		heading: "Open weather API",
		subheading: "Observations from your local station",
		subheading2: {
			name: "Check out my portfolio",
			link: "https://mikeydoesit.github.io/portfolio/"
		}
	};

	$http.get("http://ip-api.com/json").then(function(data){
		vm.lat= data.lat;
		vm.lon= data.lon;

		var apiKey = "6cc5f23754bd24d08077d62e1e8147af";
		var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?lat="+ vm.lat +"&lon="+ vm.lon +"&APPID="+ apiKey;
		$http.get('openWeatherURL').then(function(data){
			vm.description = data.wweather[0].description;
			vm.speed = (2.237*data.wind.speed).toFixed(1);
		});
	});

});