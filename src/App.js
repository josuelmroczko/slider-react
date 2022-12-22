
import './App.css';

// import FundoBotoes from './Componentes/FundoBotoes';
// import BotaoDoe from './Componentes/BotaoDoe';
// import BotoesTopo from './Componentes/BotoesTopo/BotoesTopo';
// import Logo from './Componentes/Logo';

import Menu from './Components/01-header';

// import Banner from './Componentes/02-banner';

import Hero from './Components/03-hero';

import Footer from './Components/04-footer';


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
