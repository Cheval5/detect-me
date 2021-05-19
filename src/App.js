import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';


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
      box: {},
      route:'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: '',
      }
    }
  }

  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState({isSignedIn: false})
    } else if(route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route:route})
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

  onPictureSubmit = () =>{
    this.setState({imageURL:this.state.input})
    app.models
    .predict(
    Clarifai.FACE_DETECT_MODEL,
    this.state.input
    )
    .then(response => {
      if (response){
        fetch('http://localhost:3000/image',{
          method: 'put',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user,{ entries: count }))
        })
      }
      this.displayFaceBox(this.calculateFaceDetection(response))
    })
    .catch((err) => console.log(err));
  }

  loadUser = (data) => {
    this.setState({user:{
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
    }})
  }

  render() {
    const {isSignedIn, imageURL, box, route} = this.state
    return (
      <div className="App">
        <Particles 
          params={particlesOptions}
          className="fixed z-10 top-0 bottom-0 left-0 right-0"
        />
        <Navigation 
          onRouteChange={this.onRouteChange}
          isSignedIn={isSignedIn}
        />
        {this.state.route === 'home'
          ? 
          <div> 
            <Logo />
            <Rank 
              name = {this.state.user.name}
              entries = {this.state.user.entries}
            />
            <ImageLinkForm 
              onInputChange ={this.onInputChange}
              onPictureSubmit ={this.onPictureSubmit}
            />
            <FaceRecognition 
              imageURL={imageURL}
              box={box}
            />
          </div>
          : (
            route === 'signin' ||  route === 'signout'
            ?
            <SignIn 
              onRouteChange={this.onRouteChange}
              loadUser = {this.loadUser}
            />
            :
            <Register 
            onRouteChange={this.onRouteChange}
            loadUser = {this.loadUser}
            />
          )
        }
      </div>
    );
  }
}

export default App;

