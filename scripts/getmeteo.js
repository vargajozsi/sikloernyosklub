//shorthand console.log
// OpenWeather Info
const openWeatherKey = 'c4a4e45630e841072bf9ef16bb89e412';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const helyekMeteohoz = {
    varos0: [
        0,
        'Szársomlyó', //nev
        '45.855330', //long
        '18.410290', //lat
        101 //stationId holfuy
    ],
    varos1: [1,
        'Csákberény', //nev
        '47.872046', //long
        '17.270229', //lat
        101 //stationId holfuy
    ],
    varos2:
        [2,
            'Billegpuszta', //nev
            '47.706532', //long
            '18.223585', //lat
            101 //stationId holfuy
        ],
    varos3:
        [3,
            'Csobánc', //nev
            '46.871450', //long
            '17.503620', //lat
            101 //stationId holfuy
        ]
};
let lat, long, indexVaros, varosPeldany;





//async function data request from openweathermap.org
const getForecastOpenW = async (latitude, longitude) => {
    //hőmérséklet koordináták alapján
    const urlToFetch = `${weatherUrl}?lat=${latitude}&lon=${longitude}&units=metric&lang=hu&APPID=${openWeatherKey}`;

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
const renderForecast = (forecast, indexVaros, varosPeldanynev) => {
    const articleArray = document.getElementsByClassName('meteo-egyed');
    let addP = document.createElement('p');
    articleArray[indexVaros].append(addP);
    articleArray[indexVaros].lastChild.textContent = `${varosPeldanynev}`;
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
    articleArray[indexVaros].lastChild.textContent = `Széllökés: ${forecast.wind.gust} m/s   (${Math.round(forecast.wind.gust) * 3.6} km/h)`;
    addP = document.createElement('p');
    articleArray[indexVaros].append(addP);
    articleArray[indexVaros].lastChild.textContent = `Szélirány fokban: ${forecast.wind.deg}`;
    addP = document.createElement('span');
    articleArray[indexVaros].lastChild.append(addP);
    articleArray[indexVaros].children[7].lastChild.style.transform = `rotate(${forecast.wind.deg + 45}deg)`;
}


//call datarequest function

//SZÁRSOMLYÓ
lat = helyekMeteohoz.varos0[2];
long = helyekMeteohoz.varos0[3];
getForecastOpenW(lat, long).then(forecast => {
    indexVaros = 0;
    varosPeldany = helyekMeteohoz.varos0[1];
    renderForecast(forecast, indexVaros, varosPeldany);
});

//CSÁKBERÉNY
lat = helyekMeteohoz.varos1[2];
long = helyekMeteohoz.varos1[3];
getForecastOpenW(lat, long).then(forecast => {
    varosPeldany = helyekMeteohoz.varos1[1];
    indexVaros = 1;
    renderForecast(forecast, indexVaros, varosPeldany);
});

//BILLEGPUSZTA
lat = helyekMeteohoz.varos2[2];
long = helyekMeteohoz.varos2[3];
getForecastOpenW(lat, long).then(forecast => {
    varosPeldany = helyekMeteohoz.varos2[1];
    indexVaros = 2;
    renderForecast(forecast, indexVaros, varosPeldany);
});

//CSOBÁNC
lat = helyekMeteohoz.varos3[2];
long = helyekMeteohoz.varos3[3];
getForecastOpenW(lat, long).then(forecast => {
    varosPeldany = helyekMeteohoz.varos3[1];
    indexVaros = 3;
    renderForecast(forecast, indexVaros, varosPeldany);
});
