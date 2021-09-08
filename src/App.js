import React from 'react';
import { ModalProvider } from './Helper/ModalProvider';
import Header from './routes/Header/HeaderUI';
import Projects from './routes/Projects/ProjectsUI';
import About from './routes/About/AboutUI';
import Resume from './routes/Resume/ResumeUI';
import Contact from './routes/Contact/ContactUI';

const App = () => {
  return (
    <ModalProvider>
      <Header></Header>
      <Projects></Projects>
      <About></About>
      <Resume></Resume>
      <Contact></Contact>
    </ModalProvider>
  );
};

export default App;
