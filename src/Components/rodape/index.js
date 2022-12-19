import './rodape.css'
import fotoRodape from '../rodape/footer1.png'

function Rodape () {
    return(
<div className='rodape'>
    <footer>
        <img src={fotoRodape} alt="rodape" />
    <div className='conteudofooter'>
     </div>

    
 
   
   <div className='textofooter1'><h2>Missão</h2><p className='rodapetexto'>Transformar o meio social das comunidades através de ações</p></div>
   <div className='textofooter2'><h2>Visão</h2><p className='rodapetexto'>Ser uma organização social de referência na co-criação de estratégias</p></div>
   <div className='textofooter3'><h2>Valores</h2><p className='rodapetexto'>Acreditamos e Impulsionamos o individuo a alcançar seus sonhos e objetivos.</p></div>

   </footer>
   
    
</div>
    )
}

export default Rodape