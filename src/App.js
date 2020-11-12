import './App.css';
import React from 'react';
import Display from './display.js'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Container} from '@material-ui/core';
function App() {
  return (
    <div className="App">
    <AppBar position="static" style={{ background: '#333333' }}>
  <Toolbar variant="dense">
    <IconButton edge="start" className="menu-icon" color='inherit' aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" color="inherit">
      Menu
    </Typography>
  </Toolbar>
</AppBar>
   <h1>WEATHER BROADCASTER</h1>
<Container maxWidth = 'sm'>
<Display/>
</Container>
    </div>
  );
}

export default App;
