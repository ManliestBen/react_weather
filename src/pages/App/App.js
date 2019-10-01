import React, { Component } from 'react';
import './App.css';
import Map from '../../components/Map/Map';
import { getCurrentLatLng } from '../../services/geolocation';

class App extends Component {

  async componentDidMount() {
    const {lat, lng} = await getCurrentLatLng();
    console.log(lat, lng);
  }
  
  render() {
    return (
      <div className='App'>
        <Map />
        <header className='App-header'>REACT WEATHER</header>
      </div>
    );
  }

}

export default App;
