function fetchData() {
  const date = new Date();
  let currentDate = `${date}`;

  const appHeader = document.getElementById('app-header');
  const searchBox = document.getElementById('search-box');
  const weatherDetails = document.getElementById('weather-details');

  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5b9441056bba2ffb0d1da1631c7fc001'
  )
    .then((response) => response.json())
    .then((data) => {
      const result = data;

      const createInputField = document.createElement('input');
      createInputField.setAttribute('type', 'text');
      createInputField.setAttribute('autocomplete', 'on');
      createInputField.setAttribute('class', 'searchbox');
      createInputField.setAttribute('placeholder', result.name);

      const createLocation = document.createElement('div');
      createLocation.setAttribute('class', 'city');
      createLocation.innerText = result.name + ', ' + result.sys.country;

      const createDate = document.createElement('div');
      createDate.setAttribute('class', 'date');
      createDate.innerText = currentDate.slice(0, 15);

      const createTemp = document.createElement('div');
      createTemp.setAttribute('class', 'temp');
      createTemp.innerText = result.main.temp + '°c';

      const createWeather = document.createElement('div');
      createWeather.setAttribute('class', 'weather');
      createWeather.innerText = result.weather[0].main;

      const createMinMaxTemp = document.createElement('div');
      createMinMaxTemp.setAttribute('class', 'hi-low');
      createMinMaxTemp.innerText =
        result.main.temp_max + '°c' + ' / ' + result.main.temp_min + '°c';

      appHeader.append(createInputField);

      searchBox.append(createLocation);
      searchBox.append(createDate);

      weatherDetails.append(createTemp);
      weatherDetails.append(createWeather);
      weatherDetails.append(createMinMaxTemp);
    });
}

fetchData();
