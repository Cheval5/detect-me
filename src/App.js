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
  constructor(){
    super();
    this.state = {
      input: ''
    }
  }

  onInputChange = (event) =>{
    console.log(event.target.value);
  }

  onSubmit = () =>{
    console.log('click');
  }

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
        <ImageLinkForm 
          onInputChange ={this.onInputChange}
          onSubmit ={this.onSubmit}
        />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;

