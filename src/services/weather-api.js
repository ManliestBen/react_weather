export async function getCurWeatherByLatLng(lat,lng) {
    const laT = lat;
    const lnG = lng;
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${laT}&lon=${lnG}&units=imperial&appid=`+process.env.REACT_APP_WEATHER_API_KEY);
    const response = await data.json();
    return response;
}