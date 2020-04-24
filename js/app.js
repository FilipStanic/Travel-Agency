$.ajax ('http://api.openweathermap.org/data/2.5/weather?q=Belgrade&appid=1ed7ccbebc560f91e2b2d999ebecd04e=metric').done(function(response){
  $('#temp').text(response.main.temp);
});

