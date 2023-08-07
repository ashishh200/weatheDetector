const button=document.querySelector('button')
const input=document.querySelector('input')
const apiKey="a1adbc42b70caf9ac0f95057f3676ddc"
const url="https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}"
const weatherImg=document.querySelector('.weatherImg')

async function checkWeather(city){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const response=await fetch(url)
    if(response.status==404){
        document.querySelector('.error').style.display="block"
        document.querySelector('.weather').style.display="none"
        document.querySelector('.details').style.display="none"
    }
    else{
    const data=await response.json()
 
     document.querySelector('.city').innerHTML=data.name   
     document.querySelector('.temp').innerHTML=Math.round(data.main.temp - 273.15)+" "+"°C"   
     document.querySelector('.humidity').innerHTML=data.main.humidity  +" "+"%"  
     document.querySelector('.wind').innerHTML=data.wind.speed+" "+"Km/H" 

     if(data.weather[0].main=='Clouds'){
        weatherImg.src='./images/clouds.png'
     }
     else  if(data.weather[0].main=='Clear'){
        weatherImg.src='./images/clear.png'
     }
     else  if(data.weather[0].main=='Drizzle'){
        weatherImg.src='./images/drizzle.png'
     }
     
     else  if(data.weather[0].main=='Mist'){
        weatherImg.src='./images/mist.png'
     }
     else  if(data.weather[0].main=='Rain'){
        weatherImg.src='./images/rain.png'
     }
     else  if(data.weather[0].main=='Snow'){
        weatherImg.src='./images/snow.png'
     }
     document.querySelector('.weather').style.display="block"
     document.querySelector('.details').style.display="block"
    }
     
}

button.addEventListener('click',()=>{
       checkWeather(input.value)
})