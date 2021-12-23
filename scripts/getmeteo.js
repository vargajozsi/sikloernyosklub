//shorthand console.log
// OpenWeather Info
const openWeatherKey = 'c4a4e45630e841072bf9ef16bb89e412';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const helyekMeteohoz = {
    varos0: [
        0,
        'Mosonmagyaróvár', //nev
        '47.872046', //long
        '17.270229', //lat
        101 //stationId holfuy
    ],
    varos1: [1,
        'Mosonmagyaróvár', //nev
        '47.872046', //long
        '17.270229', //lat
        101 //stationId holfuy
    ],
    varos2:
        [2,
            'Mosonmagyaróvár', //nev
            '47.872046', //long
            '17.270229', //lat
            101 //stationId holfuy
        ],
    varos3:
        [3,
            'Mosonmagyaróvár', //nev
            '47.872046', //long
            '17.270229', //lat
            101 //stationId holfuy
        ]
};
let indexVaros;



//async function data request from openweathermap.org
const getForecastOpenW = async () => {
    //hőmérséklet koordináták alapján
    const urlToFetch = `${weatherUrl}?lat=47.872046&lon=17.270229&units=metric&lang=hu&APPID=${openWeatherKey}`;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            log(jsonResponse);
            return jsonResponse;
        } else throw new Error('something went wrong...');
    } catch (error) {
        console.log(error.message);
    }
}




//render weatherdatas
const renderForecast = (forecast, indexVaros) => {
    const articleArray = document.getElementsByClassName('meteo-egyed');
    let addP = document.createElement('p');
    articleArray[indexVaros].append(addP);
    articleArray[indexVaros].lastChild.textContent = `${helyekMeteohoz.varos0[1]}`;
    addP = document.createElement('p');
    articleArray[indexVaros].append(addP);
    articleArray[indexVaros].lastChild.textContent = `A hőmérséket: ${forecast.main.temp.toFixed(1)} Celsius`;
    addP = document.createElement('p');
    articleArray[indexVaros].append(addP);
    articleArray[indexVaros].lastChild.textContent = `Felhőzet: ${forecast.weather[0].description}`;
    addP = document.createElement('img');
    articleArray[indexVaros].append(addP);
    articleArray[indexVaros].lastChild.src = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
    addP = document.createElement('p');
    articleArray[indexVaros].append(addP);
    articleArray[indexVaros].lastChild.textContent = `Szélsebesség: ${forecast.wind.speed.toFixed(1)} m/s (${Math.round(forecast.wind.speed) * 3.6} km/h)`;
    addP = document.createElement('p');
    articleArray[indexVaros].append(addP);
    articleArray[indexVaros].lastChild.textContent = `Széllökés: ${forecast.wind.gust.toFixed(1)} m/s   (${Math.round(forecast.wind.gust) * 3.6} km/h)`;
    addP = document.createElement('p');
    articleArray[indexVaros].append(addP);
    articleArray[indexVaros].lastChild.textContent = `Szélirány fokban: ${forecast.wind.deg}`;
    addP = document.createElement('span');
    articleArray[indexVaros].lastChild.append(addP);
    articleArray[indexVaros].children[7].lastChild.style.transform = `rotate(${forecast.wind.deg + 45}deg)`;
}


//call datarequest function
getForecastOpenW().then(forecast => {
    indexVaros = 0;
    renderForecast(forecast, indexVaros);
});

getForecastOpenW().then(forecast => {
    indexVaros = 1;
    renderForecast(forecast, indexVaros);
});

