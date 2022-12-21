import './Topo.css'
import logo from '../Topo/icone.jpg'
import BotaoDoe from './../BotaoDoe/index';





function BotoesTopo() {


  return (
    <header className='pagina'>

      <div className="Botoes1">


        <div > <img className='logo' src={logo} alt="" /></div>

        

        <ul >
          <li><a href="asas">HOME  |</a></li>
          <li><a href="ASAS">QUEM SOMOS             |</a></li>
          <li><a href="asdff">PROJETOS  |</a></li>
          <li><a href="sdf">GALERIA  |</a></li>
          <li><a href="sddwef">CONTATO  |</a></li>
          <li className="botaodoe"> {<BotaoDoe />} </li>
        </ul>



      </div>

    </header>
  )

}


export default BotoesTopo