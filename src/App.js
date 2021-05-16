import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'c6c352d3c9bd4aeb917de8661fc9c894',
});

const particlesOptions={
  particles: {
    number:{
      value: 70,
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

  onButtonSubmit = () =>{
    console.log('click');
    app.models
    .predict(
    Clarifai.FACE_DETECT_MODEL,
    // THE JPG
    "https://i.insider.com/5d321d4ea209d3146d650b4a?width=1100&format=jpeg&auto=webp"
    )
    .then((response) => {
    console.log(response);
    })
    .catch((err) => {
    console.log(err);
    });
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
          onButtonSubmit ={this.onButtonSubmit}
        />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;

