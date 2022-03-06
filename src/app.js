import React from 'react';
import {
  Footer,
  Header,
  Blog,
  Features,
  Gpt3,
  Possibility,
} from './containers';
import { Cta, Brand, Navbar } from './components';
import { GradientBG } from './app.styled';

const App = () => {
  return (
    <div>
      <GradientBG>
        <Navbar />
        <Header />
      </GradientBG>
      <div>
        <Brand />
        <Gpt3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
