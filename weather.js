$(document).ready(function() {



	let channelInfo = {

		heading: "EveryWeather",
		subheading: "Forecasts from your local weather station",
		subheading2: {
			name: "Check out my portfolio",
			link: "https://mikeydoesit.github.io/portfolio/"
		}
	};

	

	$.getJSON("https://ipapi.co/json").then(function(response) {
			let lat = response.latitude;
			let lon = response.longitude;
			let location = response.city;

			$('#location').html("Forecast for " + location);

			let openWeatherURL = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&APPID=6cc5f23754bd24d08077d62e1e8147af";
			$.getJSON(openWeatherURL).then(function(response2) {
					
					console.log(response2);
				let codeToday = (response2.list[0].weather[0].id).toString();
				let	weatherTypeToday = codeToday.split("");
				let codeTomo = (response2.list[8].weather[0].id).toString();
				let	weatherTypeTomo = codeTomo.split("");
				let code = (response2.list[16].weather[0].id).toString();
				let	weatherType = code.split("");

				console.log(weatherTypeTomo);
				let d = new Date();
				let d2 = new Date();
				d2.setDate(d2.getDate() + 1);
				let d3 = new Date();
				d3.setDate(d3.getDate() + 2);
				console.log(d)

				let hoursD = d.getHours();
				let hoursD2 = d2.getHours();
				let hoursD3 = d3.getHours();

				let minsD = d.getMinutes();
				let minsD2 = d2.getMinutes();
				let minsD3 = d3.getMinutes();

				let descriptionToday = response2.list[0].weather[0].description;
				let descriptionTomo = response2.list[8].weather[0].description;
				let description = response2.list[16].weather[0].description;

				let kTempToday = response2.list[0].main.temp;
				let kTempTomo = response2.list[8].main.temp;
				let kTemp = response2.list[16].main.temp;

				let fTempToday = (kTempToday*(9/5)-459.67).toFixed(0);
				let fTempTomo = (kTempTomo*(9/5)-459.67).toFixed(0);
				let fTemp = (kTemp*(9/5)-459.67).toFixed(0);

				let cTempToday = (kTempToday-273).toFixed(0);
				let cTempTomo = (kTempTomo-273).toFixed(0);
				let cTemp = (kTemp-273).toFixed(0);

				let iconCodeToday = response2.list[0].weather[0].id;
				let iconCodeTomo = response2.list[8].weather[0].id;
				let iconCode = response2.list[16].weather[0].id;

				let humidityToday = response2.list[0].main.humidity;
				let humidityTomo = response2.list[8].main.humidity;
				let humidity = response2.list[16].main.humidity;

				let windSpeedToday = response2.list[0].wind.speed;
				let windSpeedTomo = response2.list[8].wind.speed;
				let windSpeed = response2.list[16].wind.speed;

				let tempSwap = false;

				switch(weatherTypeToday[0]){

					case '1':
						$('.topPicture').css({'background-image':'url(css/images/pic1.jpg)','background-size':'cover'});
						$('.topWeather').html(descriptionToday);
						$('.topInfo h2').html(cTempToday + "<sup>&#8451;</sup>");
						$('.topInfo p').html(d.toDateString());
						$('.topIcon .owf').addClass("owf-" + iconCodeToday);
						$('.topPicture .topHumidity').html(humidityToday + " %");
						$('.topPicture .topWindSpeed').html(windSpeedToday + " mph");
						$(".topInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".topInfo h2").html(fTempToday + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".topInfo h2").html(cTempToday + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					case '2':
						$('.topPicture').css({'background-image':'url(css/images/pic2.jpg)','background-size':'cover'});
						$('.topWeather').html(descriptionToday);
						$('.topInfo h2').html(cTempToday + "<sup>&#8451;</sup>");
						$('.topInfo p').html(d.toDateString());
						$( ".topIcon .owf" ).addClass("owf-" + codeToday);
						$('.topPicture .topHumidity').html(humidityToday + " %");
						$('.topPicture .topWindSpeed').html(windSpeedToday + " mph");
						$(".topInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".topInfo h2").html(fTempToday + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".topInfo h2").html(cTempToday + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					case '3':
						$('.topPicture').css({'background-image':'url(css/images/pic3.jpg)','background-size':'cover'});
						$('.topWeather').html(descriptionToday);
						$('.topInfo h2').html(cTempToday + "<sup>&#8451;</sup>");
						$('.topInfo p').html(d.toDateString());
						$( ".topIcon .owf" ).addClass("owf-" + codeToday);
						$('.topPicture .topHumidity').html(humidityToday + " %");
						$('.topPicture .topWindSpeed').html(windSpeedToday + " mph");
						$(".topInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".topInfo h2").html(fTempToday + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".topInfo h2").html(cTempToday + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					case '4':
						$('.topPicture').css({'background-image':'url(css/images/pic4.jpg)','background-size':'cover'});
						$('.topWeather').html(descriptionToday);
						$('.topInfo h2').html(cTempToday + "<sup>&#8451;</sup>");
						$('.topInfo p').html(d.toDateString());
						$( ".topIcon .owf" ).addClass("owf-" + codeToday);
						$('.topPicture .topHumidity').html(humidityToday + " %");
						$('.topPicture .topWindSpeed').html(windSpeedToday + " mph");
						$(".topInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".topInfo h2").html(fTempToday + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".topInfo h2").html(cTempToday + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					case '5':
						$('.topPicture').css({'background-image':'url(css/images/pic5.jpg)','background-size':'cover'});
						$('.topWeather').html(descriptionToday);
						$('.topInfo h2').html(cTempToday + "<sup>&#8451;</sup>");
						$('.topInfo p').html(d.toDateString());
						$( ".topIcon .owf" ).addClass("owf-" + codeToday);
						$('.topPicture .topHumidity').html(humidityToday + " %");
						$('.topPicture .topWindSpeed').html(windSpeedToday + " mph");
						$(".topInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".topInfo h2").html(fTempToday + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".topInfo h2").html(cTempToday + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					case '6':
						$('.topPicture').css({'background-image':'url(css/images/pic6.jpg)','background-size':'cover'});
						$('.topWeather').html(descriptionToday);
						$('.topInfo h2').html(cTempToday + "<sup>&#8451;</sup>");
						$('.topInfo p').html(d.toDateString());
						$( ".topIcon .owf" ).addClass("owf-" + codeToday);
						$('.topPicture .topHumidity').html(humidityToday + " %");
						$('.topPicture .topWindSpeed').html(windSpeedToday + " mph");
						$(".topInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".topInfo h2").html(fTempToday + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".topInfo h2").html(cTempToday + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					case '7':
						$('.topPicture').css({'background-image':'url(css/images/pic7.jpg)','background-size':'cover'});
						$('.topWeather').html(descriptionToday);
						$('.topInfo h2').html(cTempToday + "<sup>&#8451;</sup>");
						$('.topInfo p').html(d.toDateString());
						$( ".topIcon .owf" ).addClass("owf-" + codeToday);
						$('.topPicture .topHumidity').html(humidityToday + " %");
						$('.topPicture .topWindSpeed').html(windSpeedToday + " mph");
						$(".topInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".topInfo h2").html(fTempToday + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".topInfo h2").html(cTempToday + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					case '8':
						$('.topPicture').css({'background-image':'url(css/images/pic1.jpg)','background-size':'cover'});
						$('.topWeather').html(descriptionToday);
						$('.topInfo h2').html(cTempToday + "<sup>&#8451;</sup>");
						$('.topInfo p').html(d.toDateString());
						$( ".topIcon .owf" ).addClass("owf-" + codeToday);
						$('.topPicture .topHumidity').html(humidityToday + " %");
						$('.topPicture .topWindSpeed').html(windSpeedToday + " mph");
						$(".topInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".topInfo h2").html(fTempToday + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".topInfo h2").html(cTempToday + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					case '9':
						$('.topPicture').css({'background-image':'url(css/images/pic9.jpg)','background-size':'cover'});
						$('.topWeather').html(descriptionToday);
						$('.topInfo h2').html(cTempToday + "<sup>&#8451;</sup>");
						$('.topInfo p').html(d.toDateString());
						$( ".topIcon .owf" ).addClass("owf-" + codeToday);
						$('.topPicture .topHumidity').html(humidityToday + " %");
						$('.topPicture .topWindSpeed').html(windSpeedToday + " mph");
						$(".topInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".topInfo h2").html(fTempToday + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".topInfo h2").html(cTempToday + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					default:
						$('.topPicture').css({'background-image':'url(css/images/topIconBgd.jpg','background-size':'cover'});
						$('.topWeather').html(descriptionToday);
						$('.topInfo h2').html(cTempToday + "<sup>&#8451;</sup>");
						$('.topInfo p').html(d.toDateString());
						$( ".topIcon .owf" ).addClass("owf-" + codeToday);
						$('.topPicture .topHumidity').html(humidityToday + " %");
						$('.topPicture .topWindSpeed').html(windSpeedToday + " mph");
						$(".topInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".topInfo h2").html(fTempToday + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".topInfo h2").html(cTempToday + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
				}

				switch(weatherTypeTomo[0]){

					case '1':
						$('.middlePicture').css({'background-image':'url(css/images/pic1.jpg)','background-size':'cover'});
						$('.middleWeather').html(descriptionTomo);
						$('.middleInfo h2').html(cTempTomo + "<sup>&#8451;</sup>");
						$('.middleInfo p').html(d2.toDateString());
						$( ".middleIcon .owf" ).addClass("owf-" + iconCodeTomo);
						$('.middlePicture .middleHumidity').html(humidityTomo + " %");
						$('.middlePicture .middleWindSpeed').html(windSpeedTomo + " mph");
						$(".middleInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".middleInfo h2").html(fTempTomo + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".middleInfo h2").html(cTempTomo + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					case '2':
						$('.middlePicture').css({'background-image':'url(css/images/pic2.jpg)','background-size':'cover'});
						$('.middleWeather').html(descriptionTomo);
						$('.middleInfo h2').html(cTempTomo + "<sup>&#8451;</sup>");
						$('.middleInfo p').html(d2.toDateString());
						$( ".middleIcon .owf" ).addClass("owf-" + iconCodeTomo);
						$('.middlePicture .middleHumidity').html(humidityTomo + " %");
						$('.middlePicture .middleWindSpeed').html(windSpeedTomo + " mph");
						$(".middleInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".middleInfo h2").html(fTempTomo + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".middleInfo h2").html(cTempTomo + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					case '3':
						$('.middlePicture').css({'background-image':'url(css/images/pic3.jpg)','background-size':'cover'});
						$('.middleWeather').html(descriptionTomo);
						$('.middleInfo h2').html(cTempTomo + "<sup>&#8451;</sup>");
						$('.middleInfo p').html(d2.toDateString());
						$( ".middleIcon .owf" ).addClass("owf-" + iconCodeTomo);
						$('.middlePicture .middleHumidity').html(humidityTomo + " %");
						$('.middlePicture .middleWindSpeed').html(windSpeedTomo + " mph");
						$(".middleInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".middleInfo h2").html(fTempTomo + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".middleInfo h2").html(cTempTomo + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					case '4':
						$('.middlePicture').css({'background-image':'url(css/images/pic4.jpg)','background-size':'cover'});
						$('.middleWeather').html(descriptionTomo);
						$('.middleInfo h2').html(cTempTomo + "<sup>&#8451;</sup>");
						$('.middleInfo p').html(d2.toDateString());
						$( ".middleIcon .owf" ).addClass("owf-" + iconCodeTomo);
						$('.middlePicture .middleHumidity').html(humidityTomo + " %");
						$('.middlePicture .middleWindSpeed').html(windSpeedTomo + " mph");
						$(".middleInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".middleInfo h2").html(fTempTomo + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".middleInfo h2").html(cTempTomo + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					case '5':
						$('.middlePicture').css({'background-image':'url(css/images/pic5.jpg)','background-size':'cover'});
						$('.middleWeather').html(descriptionTomo);
						$('.middleInfo h2').html(cTempTomo + "<sup>&#8451;</sup>");
						$('.middleInfo p').html(d2.toDateString());
						$( ".middleIcon .owf" ).addClass("owf-" + iconCodeTomo);
						$('.middlePicture .middleHumidity').html(humidityTomo + " %");
						$('.middlePicture .middleWindSpeed').html(windSpeedTomo + " mph");
						$(".middleInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".middleInfo h2").html(fTempTomo + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".middleInfo h2").html(cTempTomo + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					case '6':
						$('.middlePicture').css({'background-image':'url(css/images/pic6.jpg)','background-size':'cover'});
						$('.middleWeather').html(descriptionTomo);
						$('.middleInfo h2').html(cTempTomo + "<sup>&#8451;</sup>");
						$('.middleInfo p').html(d2.toDateString());
						$( ".middleIcon .owf" ).addClass("owf-" + iconCodeTomo);
						$('.middlePicture .middleHumidity').html(humidityTomo + " %");
						$('.middlePicture .middleWindSpeed').html(windSpeedTomo + " mph");
						$(".middleInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".middleInfo h2").html(fTempTomo + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".middleInfo h2").html(cTempTomo + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					case '7':
						$('.middlePicture').css({'background-image':'url(css/images/pic7.jpg)','background-size':'cover'});
						$('.middleWeather').html(descriptionTomo);
						$('.middleInfo h2').html(cTempTomo + "<sup>&#8451;</sup>");
						$('.middleInfo p').html(d2.toDateString());
						$( ".middleIcon .owf" ).addClass("owf-" + iconCodeTomo);
						$('.middlePicture .middleHumidity').html(humidityTomo + " %");
						$('.middlePicture .middleWindSpeed').html(windSpeedTomo + " mph");
						$(".middleInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".middleInfo h2").html(fTempTomo + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".middleInfo h2").html(cTempTomo + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					case '8':
						$('.middlePicture').css({'background-image':'url(css/images/pic1.jpg)','background-size':'cover'});
						$('.middleWeather').html(descriptionTomo);
						$('.middleInfo h2').html(cTempTomo + "<sup>&#8451;</sup>");
						$('.middleInfo p').html(d2.toDateString());
						$( ".middleIcon .owf" ).addClass("owf-" + iconCodeTomo);
						$('.middlePicture .middleHumidity').html(humidityTomo + " %");
						$('.middlePicture .middleWindSpeed').html(windSpeedTomo + " mph");
						$(".middleInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".middleInfo h2").html(fTempTomo + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".middleInfo h2").html(cTempTomo + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					case '9':
						$('.middlePicture').css({'background-image':'url(css/images/pic9.jpg)','background-size':'cover'});
						$('.middleWeather').html(descriptionTomo);
						$('.middleInfo h2').html(cTempTomo + "<sup>&#8451;</sup>");
						$('.middleInfo p').html(d2.toDateString());
						$( ".middleIcon .owf" ).addClass("owf-" + iconCodeTomo);
						$('.middlePicture .middleHumidity').html(humidityTomo + " %");
						$('.middlePicture .middleWindSpeed').html(windSpeedTomo + " mph");
						$(".middleInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".middleInfo h2").html(fTempTomo + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".middleInfo h2").html(cTempTomo + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					default:
						$('.middlePicture').css({'background-image':'url(css/images/topIconBgd.jpg)','background-size':'cover'});
						$('.middleWeather').html(descriptionTomo);
						$('.middleInfo h2').html(cTempTomo + "<sup>&#8451;</sup>");
						$('.middleInfo p').html(d2.toDateString());
						$( ".middleIcon .owf" ).addClass("owf-" + iconCodeTomo);
						$('.middlePicture .middleHumidity').html(humidityTomo + " %");
						$('.middlePicture .middleWindSpeed').html(windSpeedTomo + " mph");
						$(".middleInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".middleInfo h2").html(fTempTomo + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".middleInfo h2").html(cTempTomo + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
				}

				switch(weatherType[0]){

					case '1':
						$('.bottomPicture').css({'background-image':'url(css/images/pic1.jpg)','background-size':'cover','margin':'0'});
						$('.bottomWeather').html(description);
						$('.bottomInfo h2').html(cTemp + "<sup>&#8451;</sup>");
						$('.bottomInfo p').html(d3.toDateString());
						$('.bottomIcon .owf').addClass("owf-" + iconCode);
						$('.bottomPicture .bottomHumidity').html(humidity + " %");
						$('.bottomPicture .bottomWindSpeed').html(windSpeed + " mph");
						$(".bottomInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".bottomInfo h2").html(fTemp + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".bottomInfo h2").html(cTemp + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					case '2':
						$('.bottomPicture').css({'background-image':'url(css/images/pic2.jpg)','background-size':'cover','margin':'0'});
						$('.bottomWeather').html(description);
						$('.bottomInfo h2').html(cTemp + "<sup>&#8451;</sup>");
						$('.bottomInfo p').html(d3.toDateString());
						$( ".bottomIcon .owf" ).addClass("owf-" + iconCode);
						$('.bottomPicture .bottomHumidity').html(humidity + " %");
						$('.bottomPicture .bottomWindSpeed').html(windSpeed + " mph");
						$(".bottomInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".bottomInfo h2").html(fTemp + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".bottomInfo h2").html(cTemp + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					case '3':
						$('.bottomPicture').css({'background-image':'url(css/images/pic3.jpg)','background-size':'cover','margin':'0'});
						$('.bottomWeather').html(description);
						$('.bottomInfo h2').html(cTemp + "<sup>&#8451;</sup>");
						$('.bottomInfo p').html(d3.toDateString());
						$( ".bottomIcon .owf" ).addClass("owf-" + iconCode);
						$('.bottomPicture .bottomHumidity').html(humidity + " %");
						$('.bottomPicture .bottomWindSpeed').html(windSpeed + " mph");
						$(".bottomInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".bottomInfo h2").html(fTemp + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".bottomInfo h2").html(cTemp + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					case '4':
						$('.bottomPicture').css({'background-image':'url(css/images/pic4.jpg)','background-size':'cover','margin':'0'});
						$('.bottomWeather').html(description);
						$('.bottomInfo h2').html(cTemp + "<sup>&#8451;</sup>");
						$('.bottomInfo p').html(d3.toDateString());
						$( ".bottomIcon .owf" ).addClass("owf-" + iconCode);
						$('.bottomPicture .bottomHumidity').html(humidity + " %");
						$('.bottomPicture .bottomWindSpeed').html(windSpeed + " mph");
						$(".bottomInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".bottomInfo h2").html(fTemp + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".bottomInfo h2").html(cTemp + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					case '5':
						$('.bottomPicture').css({'background-image':'url(css/images/pic5.jpg)','background-size':'cover','margin':'0'});
						$('.bottomWeather').html(description);
						$('.bottomInfo h2').html(cTemp + "<sup>&#8451;</sup>");
						$('.bottomInfo p').html(d3.toDateString());
						$( ".bottomIcon .owf" ).addClass("owf-" + iconCode);
						$('.bottomPicture .bottomHumidity').html(humidity + " %");
						$('.bottomPicture .bottomWindSpeed').html(windSpeed + " mph");
						$(".bottomInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".bottomInfo h2").html(fTemp + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".bottomInfo h2").html(cTemp + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					case '6':
						$('.bottomPicture').css({'background-image':'url(css/images/pic6.jpg)','background-size':'cover','margin':'0'});
						$('.bottomWeather').html(description);
						$('.bottomInfo h2').html(cTemp + "<sup>&#8451;</sup>");
						$('.bottomInfo p').html(d3.toDateString());
						$( ".bottomIcon .owf" ).addClass("owf-" + iconCode);
						$('.bottomPicture .bottomHumidity').html(humidity + " %");
						$('.bottomPicture .bottomWindSpeed').html(windSpeed + " mph");
						$(".bottomInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".bottomInfo h2").html(fTemp + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".bottomInfo h2").html(cTemp + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });

					break;

					case '7':
						$('.bottomPicture').css({'background-image':'url(css/images/pic7.jpg)','background-size':'cover','margin':'0'});
						$('.bottomWeather').html(description);
						$('.bottomInfo h2').html(cTemp + "<sup>&#8451;</sup>");
						$('.bottomInfo p').html(d3.toDateString());
						$( ".bottomIcon .owf" ).addClass("owf-" + iconCode);
						$('.bottomPicture .bottomHumidity').html(humidity + " %");
						$('.bottomPicture .bottomWindSpeed').html(windSpeed + " mph");
						$(".bottomInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".bottomInfo h2").html(fTemp + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".bottomInfo h2").html(cTemp + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					case '8':
						$('.bottomPicture').css({'background-image':'url(css/images/pic1.jpg)','background-size':'cover','margin':'0'});
						$('.bottomWeather').html(description);
						$('.bottomInfo h2').html(cTemp + "<sup>&#8451;</sup>");
						$('.bottomInfo p').html(d3.toDateString());
						$( ".bottomIcon .owf" ).addClass("owf-" + iconCode);
						$('.bottomPicture .bottomHumidity').html(humidity + " %");
						$('.bottomPicture .bottomWindSpeed').html(windSpeed + " mph");
						$(".bottomInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".bottomInfo h2").html(fTemp + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".bottomInfo h2").html(cTemp + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					case '9':
						$('.bottomPicture').css({'background-image':'url(css/images/pic9.jpg)','background-size':'cover','margin':'0'});
						$('.bottomWeather').html(description);
						$('.bottomInfo h2').html(cTemp + "<sup>&#8451;</sup>");
						$('.bottomInfo p').html(d3.toDateString());
						$( ".bottomIcon .owf" ).addClass("owf-" + iconCode);
						$('.bottomPicture .bottomHumidity').html(humidity + " %");
						$('.bottomPicture .bottomWindSpeed').html(windSpeed + " mph");
						$(".bottomInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".bottomInfo h2").html(fTemp + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".bottomInfo h2").html(cTemp + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });
					break;

					default:
						$('.bottomPicture').css({'background-image':'url(css/images/topIconBgd.jpg)','background-size':'cover','margin':'0'});
						$('.bottomWeather').html(description);
						$('.bottomInfo h2').html(cTemp + "<sup>&#8451;</sup>");
						$('.bottomInfo p').html(d3.toDateString());
						$( ".bottomIcon .owf" ).addClass("owf-" + iconCode);
						$('.bottomPicture .bottomHumidity').html(humidity + " %");
						$('.bottomPicture .bottomWindSpeed').html(windSpeed + " mph");
						$(".bottomInfo h2").click(function(){
         
					           if(tempSwap===false){
					           $(".bottomInfo h2").html(fTemp + "<sup>&#8457;</sup>");
					           tempSwap=true; 
					             }
					           else{
					             $(".bottomInfo h2").html(cTemp + "<sup>&#8451;</sup>");
					           tempSwap=false;
					           }
					         });

				}
			});
		});
});