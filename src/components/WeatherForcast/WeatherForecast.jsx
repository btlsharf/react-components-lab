import WeatherData from '../WeatherData/WeatherData';
import './WeatherForecast.css';

const WeatherForecast = (props) => {
    return (
        <>
            {
                    props.weatherForcast.map((weather, idx) => {
                        return (
                            <WeatherData
                            key={idx}
                            day={weather.day}
                            img={weather.img}
                            imgAlt={weather.imgAlt}
                            conditions={weather.conditions}
                            time={weather.time}
                        />
                        );
                    }

                    )
                }
        </>
    );
};

export default WeatherForecast;