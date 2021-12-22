//shorthand console.log
const log = console.log.bind(document);
// OpenWeather Info
const openWeatherKey = 'c4a4e45630e841072bf9ef16bb89e412';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';


// Page Elements
const weekDays = ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat', 'Vasárnap'];



const getForecast = async () => {
    const urlToFetch = `${weatherUrl}?q=Mosonmagyarovar&APPID=${openWeatherKey}`;

try{
  const response = await fetch(urlToFetch);
if (response.ok) {
  const jsonResponse = await response.json();
  return jsonResponse;
} else throw new Error('something went wrong...');
} catch(error) {
  console.log(error.message);
}
}

log(getForecast().then(forecast => console.log(forecast)));
const articleArray = document.getElementsByClassName('meteo-egyed');
log(articleArray[0].childNodes);
