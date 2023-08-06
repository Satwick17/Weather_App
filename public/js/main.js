const submitbtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city = document.getElementById('city');
const temp = document.getElementById('temp_real');
const tempStatus = document.getElementById('tempStatus');

const dataHide = document.querySelector('.middleLayer');
const getInfo = async (event) =>{
    event.preventDefault();
    
    let cityval = cityName.value;
    if(cityval === ""){
        city.innerText = "Please enter any city name before searching!"
        dataHide.classList.add('dataHide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=2fd13a03c9a8da1162c6a99ec775325e`;
            const res = await fetch(url);
            const data = await res.json();
            const arrData = [data];
            city.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            const tempmood= arrData[0].weather[0].main;
            
           

            if(tempmood === "Clear"){
                tempStatus.innerHTML = "<i class='fas fa-sun' style ='color: #eccc68;'></i>"
            }
            else if(tempmood === "Clouds"){
                tempStatus.innerHTML = "<i class='fas fa-cloud' style ='color: #f1f2f6;'></i>"
            }
            else if(tempmood === "Rain"){
                tempStatus.innerHTML = "<i class='fas fa-cloud-rain' style ='color: #a4b0be;'></i>"
            }
            else{
                tempStatus.innerHTML = "<i class='fas fa-sun' style ='color: #eccc68;'></i>"
            }
            dataHide.classList.remove('dataHide');

        }
        catch(error){
            city.innerText = "Please enter valid city name before searching!";
            console.log(error);
            dataHide.classList.add('dataHide');
        }
    }
}
submitbtn.addEventListener('click', getInfo);