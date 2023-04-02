
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      

      const apiKey = {api};
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  

      const temperatureElement = document.getElementById('temp');
      const locationElement = document.getElementById('location');
      
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temp = Math.round(data.main.temp);
            temperatureElement.innerHTML = `${temp}&deg;C`;
            locationElement.innerHTML = `${data.name}`;
        });
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }