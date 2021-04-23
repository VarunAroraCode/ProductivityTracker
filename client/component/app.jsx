import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import MyChart from './MyChart.jsx';
import whatInput from 'what-input'
import './inputDetect.js'

// instantiate

var curArray = []
var timeArray = []
var keyArray = []
var KtimeArray = []
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
      isLogging: false,
      hoursLogged: 4,
      totalKeysPressed: 0,
      totalMouseMovement: 0,
    };
    this.handleLogging = this.handleLogging.bind(this)
    this.handleClick = this.handleClick.bind(this)
// CODE WITHIN THIS BLOCK WAS TAKEN FROM NPM WHAT-INPUT LIBRARY AND THEIR GITHUB
    var links = document.querySelectorAll('.well a, .well button')
      for (var i = 0, len = links.length; i < len; i++) {
        links[i].addEventListener('click', function(event) {
          console.log(
            '[script test] ' + whatInput.ask() + ' ' + whatInput.element()
          )

          event.preventDefault()
        })
      }

      var formControls = document.querySelectorAll('input, textarea, select')
      for (var i = 0, len = formControls.length; i < len; i++) {
        formControls[i].addEventListener('click', function(event) {
          console.log(
            '[script test] ' + whatInput.ask() + ' ' + whatInput.element()
          )
        })
      }

      // use `whatInput.registerOnChange()`
      var myInputFunction = function(type) {
        console.log('input: ' + type)
        if(type == "mouse"){
            curArray.push(1)
            var time = new Date
            timeArray.push(time.getMinutes())
        }
        if(type == "keyboard"){
            keyArray.push(1)
            var time = new Date
            KtimeArray.push(time.getMinutes())
        }
      }

      var myIntentFunction = function(type) {
        console.log('intent: ' + type)
        console.log('input: ' + type)
        if(type == "mouse"){
            curArray.push(1)
            var time = new Date
            timeArray.push(time.getMinutes())
        }
        if(type == "keyboard"){
            keyArray.push(1)
            var time = new Date
            KtimeArray.push(time.getMinutes())
        }
      }

      whatInput.registerOnChange(myInputFunction)
      whatInput.registerOnChange(myIntentFunction, 'intent')

      // don't let the form submit because it's not real
      var form = document.querySelector('form')
      if(form){
          form.addEventListener('submit', function(event) {
            event.preventDefault()
          })
      }

      // alert functionality
      var alerts = document.querySelectorAll('[data-module="alert"]')
      for (var i = 0, len = alerts.length; i < len; i++) {
        alerts[i].addEventListener('click', function(event) {
          alert(this.dataset.message)
          event.preventDefault()
        })
      }
      // CODE WITHIN THIS BLOCK WAS TAKEN FROM NPM WHAT-INPUT LIBRARY AND THEIR GITHUB
}


  handleHome(){
      this.setState({isHome: true})
      
  }

  handleLogging(){
    this.setState({isHome: false})

  }
  handleClick(){
    
    console.log("mouse: "+ curArray)
    console.log("mouseTime: "+ timeArray)

    console.log("Keyboard: "+ keyArray)
    console.log("KeyboardTime: "+ KtimeArray)
    var curlen = curArray.length
    var keylen = keyArray.length
    this.setState({totalKeysPressed: keylen, totalMouseMovement: curlen})
  }

  render() {
    const mystyle = {
        color: "white",
        backgroundColor: "teal",
        padding: "30px",
        fontFamily: "Arial",
        textAlign: 'center',
        fontWeight: 'bold'
      };
    const buttonStyle = {
        color: "black",
        backgroundColor: "NavyBlue",
        padding: "10px",
        textAlign: "center"
    };
    const textStyle = {
        color: "black",
        backgroundColor: "NavyBlue",
        padding: "10px",
        textAlign: "center"
    };

      if(this.state.isHome == true){
          return (
            <div>
                <header style={mystyle}>Activity Monitor</header>
                <div style = {textStyle}>
                    <h1>Your Logging Information:</h1>
                    <h1>Your last logging session lasted {this.state.hoursLogged} hours</h1>
                    <h1>Total Keys Pressed: {this.state.totalKeysPressed}</h1>
                    <h1>Total Mouse Movement: {this.state.totalMouseMovement}</h1>
                    <Button style = {textStyle} onClick = {this.handleLogging}>View logging chart</Button>
                    <Button style = {textStyle} onClick = {this.handleClick}>get data</Button>
                    <p>Be sure to check out the console to see your actions live!</p>
                    <br/>
                    <p>right click on the screen, click inspect, then navigate to 'console'</p>
                    <p>Refresh page to start over</p>
                </div>

            </div>
          );
      }
      else{
        return (
            <div>
                <header style={mystyle}>Your Logging History</header>
                    <MyChart/>
                    <Button style = {textStyle} onClick = {this.handleHome}>Home Page</Button>
                    <p>
                        X axis: time<br/>
                        Y axis: activity
                    </p><br/>
                    <p>Red: mouse <br/>
                        Blue: keyboard
                    </p>

            </div>
          );
      }
  }
}

export default App;
