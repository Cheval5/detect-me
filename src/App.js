import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import SignIn from './components/SignIn/SignIn';


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
      input: '',
      imageURL:'',
      box: {}
    }
  }

  calculateFaceDetection = (data) =>{
    const ClarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: width * ClarifaiFace.left_col,
      rightCol: width - (width * ClarifaiFace.right_col),
      topRow: height * ClarifaiFace.top_row,
      bottomRow: height - (height * ClarifaiFace.bottom_row)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box:box})
  }
 
  onInputChange = (event) =>{
    this.setState({input:event.target.value});
  }

  onButtonSubmit = () =>{
    this.setState({imageURL:this.state.input})
    app.models
    .predict(
    Clarifai.FACE_DETECT_MODEL,
    this.state.input
    )
    .then((response) => this.displayFaceBox(this.calculateFaceDetection(response)))
    .catch((err) => console.log(err));
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
        <FaceRecognition 
          imageURL={this.state.imageURL}
          box={this.state.box}
        />
        <SignIn />
      </div>
    );
  }
}

export default App;

