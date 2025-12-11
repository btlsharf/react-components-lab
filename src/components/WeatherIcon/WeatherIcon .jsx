const WeatherIcon = (props) => {
    return (
        <img src={props.weather.img} alt={props.weather.imgAlt} />
    );
}

export default WeatherIcon;