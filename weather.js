//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.

function getData() {
  const date = new Date();
  let currentDate = `${date}`;

  const getHeader = document.getElementById('header');
  const getLocation = document.getElementById('location');
  const getCurrent = document.getElementById('current');

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

      getHeader.append(createInputField);

      getLocation.append(createLocation);
      getLocation.append(createDate);

      getCurrent.append(createTemp);
      getCurrent.append(createWeather);
      getCurrent.append(createMinMaxTemp);
    });
}

getData();
