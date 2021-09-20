import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './routes/Header/HeaderUI';
import Projects from './routes/Projects/ProjectsUI';
import About from './routes/About/AboutUI';
import Resume from './routes/Resume/ResumeUI';
import Contact from './routes/Contact/ContactUI';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './background/background.css';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Header} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
          <Route path='/resume' component={Resume} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
