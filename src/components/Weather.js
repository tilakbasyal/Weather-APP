import React, { Component } from 'react'

class Weather extends Component {
  render() {
    return(
      <div>

        {<p>Location: {this.props.city} {this.props.country}</p>}
        {<p>Temprature: {this.props.temperature} </p>}
        {<p>Humidity: {this.props.humidity}</p>}
        {<p>Description: {this.props.description}</p>}
        {<p>{this.props.error}</p>}

    </div>
    )
  }
}


export default Weather
