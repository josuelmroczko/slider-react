import './App.css';

import ConteudoBanner from './Components/ConteudoBanner';
import QuemSomos from './Components/QuemSomos';
import Rodape from './Components/rodape';
import Slider from './Components/Slider/Slider'
import BotoesTopo from './Components/Topo';

 



function App() {
  return (
    <>
      <Slider />
      <BotoesTopo/>
     
      <QuemSomos/>
      <Rodape/>
      <ConteudoBanner/>
   
    </>
  );
}

export default App;
