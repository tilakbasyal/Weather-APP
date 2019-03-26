import React from 'react'
import Tiles from './components/Tiles';
import Form from './components/Form';
import Weather from './components/Weather';

const Api_Key = 'c7910a3f13b2a102322929da4f00d2ab';

class App extends React.Component {
  state = {
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }


  dataLoader = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=metric`)
    .then(response => response.json());
    // const received = await api_call.json();
    console.log(api_call);
    if (city && country) {
      this.setState({
        temperature: api_call.main.temp,
        city: api_call.name,
        country: api_call.sys.country,
        humidity: api_call.main.humidity,
        description: api_call.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        error: "Please input all search values..."
      })
    }
  }


  // componentDidMount(e) {
  //   const city = e.target.elements.city.value;
  //   const country = e.target.elements.country.value;
  //   e.preventDefault();
  //   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${Api_Key}`)
  //   .then(api_call => api_call.json);
  //   console.log(e);  
  // }



render() {
  return (
    <div>
      {/* <h1>this</h1> */}
      <Tiles />
      <Form loadWeather={this.dataLoader} />
      <Weather
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error = {this.state.error}
      />
    </div>
  )
}
}



export default App;