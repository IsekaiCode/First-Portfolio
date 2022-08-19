import React from 'react';
import { HideScroll } from "react-hide-on-scroll";

import { About, Footer, Header, Projects, Research, Skills } from './container'
import { Navbar } from './components';
import './App.scss'

const App = () => {
  return (
    <div className="app">
      <HideScroll variant="down"><Navbar /></HideScroll>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Footer />
    </div>
  );
}

export default App;