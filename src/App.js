import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';

const particlesOptions={
  particles: {
    number:{
      value: 60,
      density: {
        enable: true,
        value_area: 600
      }
    }
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles 
              params={particlesOptions}
              className="fixed z-10 top-0 bottom-0 left-0 right-0"
            />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;

