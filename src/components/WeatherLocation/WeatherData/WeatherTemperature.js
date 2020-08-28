import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {CLOUD, CLOUDY, RAIN, SNOW, WINDY, SUNNY, FOG,} from './../../../constants/weathers';
import './styles.css';

const icons = {
    [CLOUD]:"cloud",
    [CLOUDY]:"day-cloudy",
    [RAIN]:"day-rain",
    [SNOW]:"day-snow",
    [WINDY]:"day-windy",
    [SUNNY]:"day-sunny",
    [FOG]:"day-fog"
};

const getWeatherIcon = weatherState =>{
    const icon     = icons[weatherState];
    const sizeIcon = "4x";
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size= {sizeIcon}/>
};

const WeatherTemperature = ({temperature, weatherState}) =>(
    <div className="WeatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }       
        <span className="temperature">{`${temperature}°`}</span>
        <span className="temperatureType">{`C`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
   
   };

export default WeatherTemperature;