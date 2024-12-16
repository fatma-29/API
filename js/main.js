document.getElementById("findBtn").addEventListener("click", () => {
  const location = document.getElementById("locationInput").value;

  if (!location) {
      alert("Please enter a location.");
      return;
  }

  fetch('http://api.weatherapi.com/v1/forecast.json?key=b7f99bb155784604849172403241612&q=cairo&days=3')
      .then(response => response.json())
      .then(data => {
          const forecast = data.forecast.forecastday;

          document.getElementById("temp1").innerText =' ${forecast[0].day.avgtemp_c}°C';
          document.getElementById("temp2").innerText = '${forecast[1].day.avgtemp_c}°C';
          document.getElementById("temp3").innerText = '${forecast[2].day.avgtemp_c}°C';
      })
      .catch(error => {
          console.error("Error fetching weather data:", error);
          alert("Error fetching data. Please try again.");
      });
});




