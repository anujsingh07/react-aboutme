import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Skill from './components/skill'
import Experience from './components/experience'
import Education from './components/education'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
          <Skill></Skill>
          <Experience></Experience>
          <Education></Education>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
