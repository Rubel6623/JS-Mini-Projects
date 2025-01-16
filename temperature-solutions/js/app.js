const API_KEY='797ad98dfb9e92af960e6d269c8556b0'


const loadTemperature=(city)=>{
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  fetch(url)
  .then(response => response.json())
  .then(data => displayTemperature(data))
}
const displayTemperature=(data)=>{
  console.log(data);
  setInnerText('location',data.name)
  setInnerText('weather',data.weather[0].main)
  setInnerText('temp',data.main.temp)
}

const setInnerText=(id,value)=>{
  const element=document.getElementById(id);
  element.innerText=value;
}

document.getElementById('btn-search').addEventListener('click', function(){
  const city = document.getElementById('city').value;
  loadTemperature(city);
})

loadTemperature('chittagong');

