import './Topo.css'
import logo from '../Topo/icone.jpg'



 
function BotoesTopo (){
 

    return(
      <header className='pagina'> 
 
        <div className="Botoes1">
    
        
         <div > <img className='logo' src={logo} alt="" /></div>

          <ul>
          

          <li><a href="asas">HOME  |</a></li>
          

          <li><a href="ASAS">QUEM SOMOS             |</a></li>
          


          <li><a href="asdff">PROJETOS  |</a></li>
        

          <li><a href="sdf">GALERIA  |</a></li>
          

          <li><a href="sddwef">CONTATO  |</a></li>
         
         
         


          <li>  </li>
          </ul>


        </div>

      </header>
    )

}


export default BotoesTopo