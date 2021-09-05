import React from 'react';
import { ModalProvider } from './components/ModalProvider';
import Header from './components/layout/Header';
import Projects from './components/layout/Projects';
import About from './components/layout/About';
import Resume from './components/layout/Resume';
import Contact from './components/layout/Contact';

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
