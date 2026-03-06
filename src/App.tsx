// App.tsx ou pages/Home.tsx
import React from 'react';
import { Header, Footer } from './components/layout';
import { Hero, Services, About, Stats, Contact } from './components/sections';
import Portfolio from './components/sections/Portfolio'; // Ajout

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio /> 
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;