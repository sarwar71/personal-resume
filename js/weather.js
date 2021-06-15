$(document).ready(function () {

    const weatherApi = 'https://api.openweathermap.org/data/2.5/weather?q=chandpur&appid=b36b8ce9402d15f38344a6e0bbb94260'

    getWeatherValues(weatherApi)

    async function getWeatherValues(weatherApi) {

        const response = await fetch(weatherApi);
        var data = await response.json();

        let { temp, feels_like, pressure, humidity } = data.main;

        $('#temperature').text((temp - 273).toFixed(2) + ' ℃')
        $('#feels_temperature').text((feels_like - 273).toFixed(2))
        $('#pressure').text(pressure + ' hPa')
        $('#humidity').text(humidity + ' %')
    }

    $('.location').on('click', (e) => {
        e.preventDefault();
        $('.weather').fadeIn(350).delay(5000).fadeOut(350);
    })
});