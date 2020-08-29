import React, { Component } from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {FOG, CLOUD, SUNNY} from './../../constants/weathers';

const location = "Cali, col";
const api_key = "66adace5d1a3d379cd109bfe341837ab";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
const units = "metric";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=${units}`;

const data ={
    temperature: 30,
    weatherState: FOG,
    humidity: 45,
    wind: "8 m/s"
};

class WeatherLocation extends Component{
    
    constructor(){
        super();
        this.state = {
            city: "Cali",
            data: data,
        }
    }
    getTemp = kelvin => {
        return convert(kelvin).from("K").to("C");
    }
    getWeatherState = weather_data =>{
        return SUNNY;
    }
    
    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const temperature = this.getTemp(temp);
        const weatherState = this.getWeatherState(weather_data);

        const data = {
            humidity,
            temperature,
            wind:`${speed} m/s`,
            weatherState,
        }

        return data;
    }

    handleUpdateClick = () =>{

        fetch(api_weather).then( resolve =>{

            return resolve.json();
        }).then(data => {

            const newWeather = this.getData(data);
            
            console.log(newWeather);  
            debugger;

            this.setState({
                data: newWeather,
            });
        });


               
    }

    render(){
        const {city, data} = this.state;
    
        return (
                <div className="WeatherLocationCont">
                    <Location city={city} ></Location>
                    <WeatherData data={data} ></WeatherData>
                    <button onClick={this.handleUpdateClick}>Actualizar</button>
                </div>
                );
        }
    
};

export default WeatherLocation;