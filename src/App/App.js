
import './App.css';

// import FundoBotoes from './Componentes/FundoBotoes';
// import BotaoDoe from './Componentes/BotaoDoe';
// import BotoesTopo from './Componentes/BotoesTopo/BotoesTopo';
// import Logo from './Componentes/Logo';

import Menu from './Componentes/01-header';

// import Banner from './Componentes/02-banner';

import Hero from './Componentes/03-hero';

import Footer from './Componentes/04-footer';


function App() {
  return (
    <div className="App">
      <Menu />

      {/* <Banner /> */}

      <Hero />

      <Footer />

    </div>
  );
}

export default App;
