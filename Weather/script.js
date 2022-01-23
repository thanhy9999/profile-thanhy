var inputSearch = document.querySelector('.search')
var address = document.querySelector('.address')
var temperature = document.querySelector('.temperature')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility')
var wind = document.querySelector('.wind')
var sun = document.querySelector('.sun')
var time = document.querySelector('.time')
var weatherContainer = document.querySelector('.weather-container')

async function changeData() {
    let capitalSearch = inputSearch.value.trim()
    console.log(capitalSearch)
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=0be362dd784aebc3bfc94a7455821394`
    let data = await fetch(apiURL).then(res => res.json())
    console.log(data)
    if (data.cod == 200) {
        address.innerHTML = data.name + ', ' + data.sys.country
        visibility.innerHTML = data.visibility + 'm'
        wind.innerHTML = data.wind.speed + ' m/s'
        sun.innerHTML = data.main.humidity + ' (%)'
        temperature.innerHTML = Math.round(data.main.temp - 273.15) + ' <sup>o</sup>C'
        shortDesc.innerHTML = data.weather[0].main
        time.innerHTML = new Date().toLocaleString('vi')
    }
}
inputSearch.addEventListener('keypress', function(e) {
    if (e.code === 'Enter') {
        changeData()
    }
})