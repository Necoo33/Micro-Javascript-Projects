// I took the average of that query from Net Ninja and modified it. For an example, if you type a
// district except a city in the searchbar it outputs district name and the administrative area and 
// the country code of the country which that district and city belong. I also translated the most 
// common weather conditions to turkish from english. Because of that i don't change the turkish texts 
// inside of html.

// ı took the datas from https://developer.accuweather.com, as Net Ninja does.


let formItself = document.querySelector(".citysearchingform");
let searchingBar = document.querySelector("input:first-of-type");

let cityInfo = document.querySelector(".cities");

let pictureOfDayNight = document.querySelector(".isdayornight");
let weatherConditionIcon = document.querySelector(".weatherconditionicon");

let cityName = document.querySelector(".cityordistrictname");
let actualWeatherConditions = document.querySelector(".actualweatherconditions");
let metricTemperature = document.querySelector(".metrictemperature");

class WeatherApplication{
    constructor(){
        this.APIKey = "67ydZ26W4AqIADAonjEVjlvL3tXU9kbw";
        this.citySearchAPI = "http://dataservice.accuweather.com/locations/v1/cities/search";
        this.weatherAPI = "http://dataservice.accuweather.com/currentconditions/v1/"
    }

    async searchingCities(city){

        let cityDetails = await this.getCityInfo(city);
        let weatherConditionsDetails = await this.getWeatherInfo(cityDetails.Key);
    
        return {
            CityOrDistrict: cityDetails,
            WeatherConditions: weatherConditionsDetails,
        };
    };

    async getCityInfo(cityFuncInfo){
        let cityInfoDeliver = `?apikey=${this.APIKey}&q=${cityFuncInfo}`;
    
        let cityInfoItself = await fetch(this.citySearchAPI + cityInfoDeliver);
        let showCityInfo = await cityInfoItself.json();
    
        return showCityInfo[0];
    };

    async getWeatherInfo(weatherKey){
        let weatherInfoDeliver = `${weatherKey}?apikey=${this.APIKey}`
    
        let weatherInfoItself = await fetch(this.weatherAPI + weatherInfoDeliver);
        let showWeatherInfo = await weatherInfoItself.json();
    
        return showWeatherInfo[0];
    };
}

let weatherClass = new WeatherApplication();

console.log(weatherClass);

formItself.addEventListener("submit", function(parameter){
    parameter.preventDefault();

    let searchBarData = searchingBar.value.trim();

    weatherClass.searchingCities(searchBarData).then(function(parameter){  
       cityName.textContent = `${parameter.CityOrDistrict.LocalizedName}, ${parameter.CityOrDistrict.AdministrativeArea.LocalizedName} - ${parameter.CityOrDistrict.Country.ID}`;

       if(parameter.CityOrDistrict.LocalizedName === parameter.CityOrDistrict.AdministrativeArea.LocalizedName){
          cityName.textContent = `${parameter.CityOrDistrict.LocalizedName}, ${parameter.CityOrDistrict.Country.ID}`;
       };

       actualWeatherConditions.textContent = parameter.WeatherConditions.WeatherText;
       metricTemperature.textContent = parameter.WeatherConditions.Temperature.Metric.Value;
       weatherConditionIcon.setAttribute("src", `icons/${parameter.WeatherConditions.WeatherIcon}.svg`); 

       if(parameter.WeatherConditions.IsDayTime){
          pictureOfDayNight.setAttribute("src", "daytime.svg");
       } else{
          pictureOfDayNight.setAttribute("src", "night.svg");
       }

       switch(parameter.WeatherConditions.WeatherText){
            case "Mostly clear": actualWeatherConditions.innerText = "Umumiyetle Açık";
                break;
            case "Partly cloudy": actualWeatherConditions.innerText = "Yer Be Yer Bulutlu";
                break;
            case "Mostly cloudy": actualWeatherConditions.innerText = "Umumiyetle Bulutlu";
                break;
            case "Clear": actualWeatherConditions.innerText = "Açık";
                break;
            case "Cloudy": actualWeatherConditions.innerText = "Bulutlu";
                break;
            case "Rain": actualWeatherConditions.innerText = "Yağışlı";
                break;
            case "Some clouds": actualWeatherConditions.innerText = "Seyrek Bulutlu";
                break;
            case "Fog": actualWeatherConditions.innerText = "Sisli";
                break;
            case "Sunny": actualWeatherConditions.innerText = "Güneşli";
                break;
            case "Light rain": actualWeatherConditions.innerText = "Seyrek Yağışlı";
                break;
            case "Mostly sunny": actualWeatherConditions.innerText = "Umumiyetle Güneşli";
                break;
            case "Partly sunny": actualWeatherConditions.innerText = "Yer Be Yer Güneşli";
                break;
            case "Intermittent clouds": actualWeatherConditions.innerText = "Kesik Kesik Bulutlu";
                break;
            case "Hazy sunshine": actualWeatherConditions.innerText = "Sisli Güneşli";
                break;
            case "Dreary": actualWeatherConditions.innerText = "Kara Bulutlu";
                break;
            case "Flurries": actualWeatherConditions.innerText = "Sağanak Yağışlı";
                break;
            case "Snow": actualWeatherConditions.innerText = "Karlı";
                break;
            case "Windy": actualWeatherConditions.innerText = "Rüzgarlı";
                break;
            case "Hazy moonlight": actualWeatherConditions.innerText = "Kara Ayışığı";
                break;
            case "Heavy rain": actualWeatherConditions.innerText = "Sağanak Yağışlı";
                break;
       }

       localStorage.setItem("Last Searched City", searchBarData);

       cityInfo.style.display = "block";

       console.log(parameter);
    }).catch(function(failure){
        console.log(failure);
    });



    formItself.reset();

});

if(localStorage.getItem("Last Searched City")){

    weatherClass.searchingCities(localStorage.getItem("Last Searched City")).then(function(parameter){  
        cityName.textContent = `${parameter.CityOrDistrict.LocalizedName}, ${parameter.CityOrDistrict.AdministrativeArea.LocalizedName} - ${parameter.CityOrDistrict.Country.ID}`;
 
        if(parameter.CityOrDistrict.LocalizedName === parameter.CityOrDistrict.AdministrativeArea.LocalizedName){
           cityName.textContent = `${parameter.CityOrDistrict.LocalizedName}, ${parameter.CityOrDistrict.Country.ID}`;
        };
 
        actualWeatherConditions.textContent = parameter.WeatherConditions.WeatherText;
        metricTemperature.textContent = parameter.WeatherConditions.Temperature.Metric.Value;
        weatherConditionIcon.setAttribute("src", `icons/${parameter.WeatherConditions.WeatherIcon}.svg`); 
 
        if(parameter.WeatherConditions.IsDayTime){
           pictureOfDayNight.setAttribute("src", "daytime.svg");
        } else{
           pictureOfDayNight.setAttribute("src", "night.svg");
        }
 
        switch(parameter.WeatherConditions.WeatherText){
             case "Mostly clear": actualWeatherConditions.innerText = "Umumiyetle Açık";
                 break;
             case "Partly cloudy": actualWeatherConditions.innerText = "Yer Be Yer Bulutlu";
                 break;
             case "Mostly cloudy": actualWeatherConditions.innerText = "Umumiyetle Bulutlu";
                 break;
             case "Clear": actualWeatherConditions.innerText = "Açık";
                 break;
             case "Cloudy": actualWeatherConditions.innerText = "Bulutlu";
                 break;
             case "Rain": actualWeatherConditions.innerText = "Yağışlı";
                 break;
             case "Some clouds": actualWeatherConditions.innerText = "Seyrek Bulutlu";
                 break;
             case "Fog": actualWeatherConditions.innerText = "Sisli";
                 break;
             case "Sunny": actualWeatherConditions.innerText = "Güneşli";
                 break;
             case "Light rain": actualWeatherConditions.innerText = "Seyrek Yağışlı";
                 break;
             case "Mostly sunny": actualWeatherConditions.innerText = "Umumiyetle Güneşli";
                 break;
             case "Partly sunny": actualWeatherConditions.innerText = "Yer Be Yer Güneşli";
                 break;
             case "Intermittent clouds": actualWeatherConditions.innerText = "Kesik Kesik Bulutlu";
                 break;
             case "Hazy sunshine": actualWeatherConditions.innerText = "Sisli Güneşli";
                 break;
             case "Dreary": actualWeatherConditions.innerText = "Kara Bulutlu";
                 break;
             case "Flurries": actualWeatherConditions.innerText = "Sağanak Yağışlı";
                 break;
             case "Snow": actualWeatherConditions.innerText = "Karlı";
                 break;
             case "Windy": actualWeatherConditions.innerText = "Rüzgarlı";
                 break;
             case "Hazy moonlight": actualWeatherConditions.innerText = "Kara Ayışığı";
                 break;
             case "Heavy rain": actualWeatherConditions.innerText = "Sağanak Yağışlı";
                 break;
        }
 
        cityInfo.style.display = "block";
 
        console.log(parameter);
     }).catch(function(failure){
         console.log(failure);
     });
}







