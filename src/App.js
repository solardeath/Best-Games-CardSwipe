import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import Cover from './Components/Cover/Cover'
import Signin from './Components/Signin/Signin'
import Register from './Components/Register/Register'
import Cards from './Components/CardComponent/Cards'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      route:'signin',
      isSignedIn:false
    }
  }

  onRouteChange = (route) =>{
    if(route === 'signout'){
      this.setState({isSignedIn:false})
    } else if(route === 'home'){
      this.setState({isSignedIn:true})
    }
    this.setState({route:route})
  }

  render(){
    return (
      <div className="App">
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        {this.state.route === 'home'
          ? <div>
            <Logo />
            <Cover />
            <Cards />
          </div>
          
          :(
            this.state.route === 'signin'?<Signin onRouteChange={this.onRouteChange} />
            :<Register onRouteChange={this.onRouteChange}/>
          )
          }
      </div>
    );
  }
}

export default App;
