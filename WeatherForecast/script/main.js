// const btn = document.getElementById('button') - безопасный метод
// // const btn = document.getElementsByClassName('Click') - будет перебирать все из html и принесет в виде массива
// const btn = document.querySelector('#button') // по id безопасный метод
// const btn = document.querySelector('.click') - по классу
// const btn = document.querySelector('button') - по тегу
// const btn = getElementsByTagName('button')

// способы повесить события:
// btn.onclick = show = () =>{
//     alert ('Hello')
// }

// ===========
// btn.addEventListener('click',() =>{
// alert('Hello')
// })
// =============

// const show = () => {
//     alert('Hello')
// }
// const div = document.querySelector('div')
// const image = document.createElement('img')
// image.src = "https://www.film.ru/sites/default/files/people/1570199-1444805.jpg"
// image.setAttribute('alt','photographer')
// div.append(image)
// const h6 = document.createElement('h6')
// h6.innerHTML = "Picture"
// //h6.textContent = 'Picture'
//div.prepend(h6)
// div.innerHTML ='
// <div>
// <input type = 'range'
// </div>'



const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const output = document.querySelector('#output')

const API='http://api.openweathermap.org/data/2.5/weather?q='

const key ='&appid=b067377a72c98ae6963cdae2e35408d9'


const getWeather = async(e) => {
    e.preventDefault()
    const value = input.value
    const url = API + value + key
    const req = await fetch (url)
    const res = await req.json()
    const loading = document.createElement('h5')
    loading.classList.add('loading')
    
loading.innerHTML = `
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
`
       output.append(loading)
    
    setTimeout(() => {
        output.innerHTML = ''
        renderWeather(res)
    }, 3000);
  
}

const renderWeather = (data) =>{
    console.log(data);
    let card = document.createElement('div')
    let h3 = document.createElement('h3')
    let clouds = document.createElement('p')
    let main = document.createElement('p')
    let feelslike = document.createElement('p')
    let weather = document.createElement('p') 
    let description = document.createElement('p')
    let wind = document.createElement('p') 
    let deg = document.createElement('p')
    let gust = document.createElement('p')

    h3.innerHTML = 'CITY: ' + data.name
    clouds.innerHTML ='CLOUDS: ' + data.clouds.all
    main.innerHTML = 'TEMPERATURE: '+ Math.round(data.main.temp - 273) + 'degrees Celsius'
    feelslike.innerText = 'FEELS LIKE: '+ Math.round(data.main.feels_like - 273) + 'degrees Celsius'
    weather.innerHTML = 'WEATHER: ' + data.weather[0].description
    wind.innerHTML = 'WIND: ' + data.wind.speed + 'm/s'
    deg.innerHTML = 'WIND DEG.: '+ data.wind.deg + 'degrees'
    gust.innerHTML = 'WIND GUST: ' + data.wind.gust
    
    output.append(card)
    card.append(h3, clouds, main, weather, wind)
    main.append(feelslike)
    weather.append(description)
    wind.append(deg, gust)

    card.classList.add('card')

}

btn.onclick=(e)=>{
    getWeather(e)
    input.value =''
    output.innerHTML = ''
}








