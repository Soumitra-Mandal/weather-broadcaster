
/*
function weatherfunc(){
    var city= document.getElementById("C").value;
    $.getJSON("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&APPID=70207a5efd2148a93db198be86385483",function(data){
    console.log(data);
    var temp = data.main.temp;
    var weather = data.weather[0].main;
    document.getElementById("weather").innerHTML=weather;
    document.getElementById("cityn").innerHTML=city;
    document.getElementById("temp").innerHTML=temp + "°C";
    });
    }
*/    
import { Container } from '@material-ui/core';
import React from 'react';
import './display.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export default class Display extends React.Component {
    state={
        city:'NA',
        temp:'NA',
        weather:'NA',
        inp:''
    }
    
handleSubmit=(e)=>{
    e.target.value='';
        fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=`+ this.state.city + `&units=metric&APPID=70207a5efd2148a93db198be86385483`)
          .then(response => response.json())
          .then(data =>
            {this.setState({
             temp:data.main.temp,
             weather: data.weather[0].main,
             inp:''
             
            }
              );}
          )
          .catch(error => this.setState({ error}));
      


}

handleChange=(e)=>{
this.setState({city:e.target.value,inp:e.target.value});
}

render(){
    return(
        <Container className="display">
        <TextField id="outlined-basic" className="inputb" label="Enter City" variant="outlined" autoComplete='off' onChange={this.handleChange} value={this.state.inp}/>
        <Button variant='contained' color="secondary" id="btn" onClick={this.handleSubmit}>Enter</Button>
        <p id="cityn">City: {this.state.city}</p>
        <p id="weather">Weather: {this.state.weather}</p>
        <p id="temp">Temperature: {this.state.temp} &deg;C</p>
        </Container>
    );
}
}
