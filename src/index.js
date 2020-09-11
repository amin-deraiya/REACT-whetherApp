import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Weather from "./components/weather.component.jsx";
import Form from "./components/form.component.jsx";

const apiKey = "5f67508f34290d6a31fb3c6dd4e535be";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false,
    };

    this.weatherIcon = {
      Thunderstorm: "fa-cloud-showers-heavy",
      Drizzle: "fa-cloud-showers-heavy",
      Rain: "fa-cloud-showers-heavy",
      Snow: "fa-cloud-showers-heavy",
      Atmostphere: "fa-cloud-showers-heavy",
      Clear: "fa-cloud-showers-heavy",
      Clouds: "fa-cloud-showers-heavy",
    };
  }

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  get_WeatherIcon(rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({ icon: this.weatherIcon.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: this.weatherIcon.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({ icon: this.weatherIcon.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: this.weatherIcon.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: this.weatherIcon.Atmostphere });
        break;
      case rangeId === 800:
        this.setState({ icon: this.weatherIcon.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: this.weatherIcon.Clouds });
        break;
      default:
        this.setState({ icon: this.weatherIcon.Clouds });
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (city && country) {
      try {
        const api_call = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
        );
        const response = await api_call.json();
        if (response.cod == 200) {
          // console.log(response);
          this.setState({
            city: `${response.name}, ${response.sys.country}`,
            country: response.sys.country,
            celsius: this.calCelsius(response.main.temp),
            temp_max: this.calCelsius(response.main.temp_max),
            temp_min: this.calCelsius(response.main.temp_min),
            description: response.weather[0].description,
          });
          this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
        } else {
          alert(response.message);
        }
      } catch (error) {
        alert(error);
      }
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <div className="m-5 text-center">
        <Form loadweather={this.getWeather} error={this.state.error} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          weatherIcon={this.state.icon}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
