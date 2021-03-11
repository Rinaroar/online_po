import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Style';
import { theme } from './Theme';

import Navbar from './components/Navbar';
import Burger from './components/Burger';
import Menu from './components/Menu';
import Home from './contents/Home';
import About from './contents/About';
import Experience from './contents/Experience';
import SkillsView from './contents/SkillsView';
import Contact from './contents/Contact';
import Hobby from './contents/Hobby';
import Projects from './contents/Projects';


function App() {

  const [open, setOpen] = useState(false);

  return (

      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyles></GlobalStyles>

          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/experiences" component={Experience} />
              <Route exact path="/skills" component={SkillsView} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/hobby" component={Hobby} />
              <Route exact path="/projects" component={Projects} />
            </Switch>
          </div>

          <div>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>

        </Router>
      </ThemeProvider>

    );
  }

export default App;



{/* <Route> is the subtag of <Router> or <BrowserRouter>,
with <Route> we decide what content has to be rendered based on the path/URL.
--> “exact” attribute is used when we have multiple identical paths.*/}