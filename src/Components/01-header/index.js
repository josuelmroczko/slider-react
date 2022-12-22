import './main.css'

function Menu() {
    return (
        <header className="header">
            <img className="logo" src="./imagens/icone.jpg" alt="" />
            <div className="menu__conteiner">
                <img className="menu__icon" src="./imagens/menuIcon.svg" alt="" />
                <div className="menu__responsivo">
                    <nav>
                        <ul className="menu__links">
                            <li><a href="" className="menu__link">Home</a></li>
                            <li><a href="" className="menu__link">Quem Somos</a></li>
                            <li><a href="" className="menu__link"> Projetos</a></li>
                            <li><a href="" className="menu__link">Galeria</a></li>
                            <li><a href="" className="menu__link">Contato</a></li>
                        </ul>
                    </nav>

                    <button className="botao">Doe Agora</button>
                </div>
            </div>

        </header>
    )
}

export default Menu