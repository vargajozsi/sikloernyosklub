//shorthand console.log
// OpenWeather Info
const openWeatherKey = 'c4a4e45630e841072bf9ef16bb89e412';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const helyekMeteohoz = {
    varos1: {
        nev: 'Mosonmagyaróvár',
        latitude: '47.872046',
        longitude: '17.270229'
        },
    varos2: {
        nev: 'Vértesszőlős',
        latitude: '47.872046',
        longitude: '17.270229'
        },
    varos3: {
        nev: 'Diszel',
        latitude: '47.872046',
        longitude: '17.270229'
        },
    varos4: {
            nev: 'Diszel',
            latitude: '47.872046',
            longitude: '17.270229'
        }
};

for (let varos in helyekMeteohoz) {

//async function data request from openweathermap.org


const getForecast = async () => {
    //hőmérséklet városnév alapján
    //const urlToFetch = `${weatherUrl}?q=Mosonmagyarovar&units=metric&lang=hu&APPID=${openWeatherKey}`;
 
    //hőmérséklet koordináták alapján
    const urlToFetch = `${weatherUrl}?lat=47.872046&lon=17.270229&units=metric&lang=hu&APPID=${openWeatherKey}`;

try{
  const response = await fetch(urlToFetch);
if (response.ok) {
  const jsonResponse = await response.json();
 log(jsonResponse);
  return jsonResponse;
} else throw new Error('something went wrong...');
} catch(error) {
  console.log(error.message);
}
}
//call datarequest function
 getForecast().then(forecast => {
    renderForecast(forecast);
});

//render weatherdatas
const renderForecast = (forecast) => {
const articleArray = document.getElementsByClassName('meteo-egyed');
let addP = document.createElement('p');
articleArray[0].append(addP);
articleArray[0].lastChild.textContent = `${helyekMeteohoz.varos1.nev}`;
addP = document.createElement('p');
articleArray[0].append(addP);
articleArray[0].lastChild.textContent = `A hőmérséket: ${forecast.main.temp} Celsius`;
addP = document.createElement('p');
articleArray[0].append(addP);
articleArray[0].lastChild.textContent = `Felhőzet: ${forecast.weather[0].description}`;
addP = document.createElement('img');
articleArray[0].append(addP);
articleArray[0].lastChild.src = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
addP = document.createElement('p');
articleArray[0].append(addP);
articleArray[0].lastChild.textContent = `Szélsebesség: ${forecast.wind.speed} m/s (${forecast.wind.speed* 3.6} km/h)`;
addP = document.createElement('p');
articleArray[0].append(addP);
articleArray[0].lastChild.textContent = `Széllökés: ${forecast.wind.gust} m/s   (${forecast.wind.gust* 3.6} km/h)`;
addP = document.createElement('p');
articleArray[0].append(addP);
articleArray[0].lastChild.textContent = `Szélirány fokban: ${forecast.wind.deg}`;
addP = document.createElement('span');
articleArray[0].lastChild.append(addP);
articleArray[0].children[7].lastChild.style.transform = `rotate(${ forecast.wind.deg + 45}deg)` ;
}
}