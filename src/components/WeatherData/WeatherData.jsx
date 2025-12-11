import WeatherIcon from '../WeatherIcon/WeatherIcon ';

const WeatherData = (props) => {
    return (
        <div className="weather">
                    <h2>{props.day}</h2>
                    <WeatherIcon 
                        weather={props}
                    />
                    <p><span>conditions: </span>{props.conditions}</p>
                    <p><span>time: </span>{props.time}</p>
        </div>
    );
}

export default WeatherData;