import React from 'react';
import { Portfolio, Hero, FAQsection } from './components/pages/Home';
import Footer from './components/global/Footer';
import Header from './components/global/Header'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FAQsection />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
