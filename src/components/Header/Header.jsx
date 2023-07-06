import { useState } from 'react'
import './Header.scss'
import logo from '../../assets/logo.svg'
export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <header>
                <div className='container__flex'>
                    <div className='left__header'>
                        <img src={logo} alt="logo Meteora" />
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Nossas lojas</a></li>
                            <li><a href="#">Novidades</a></li>
                            <li><a href="#">Promoções</a></li>
                        </ul>

                    </div>
                    <div className='search__header'>
                        <input type="text" id='input-bar' placeholder='Digite o produto' />
                        <button>Buscar</button>
                    </div>

                    <div className='container__nav'>
                        <button onClick={handleToggle} className='menu__button'></button>
                        <nav className={isOpen ? 'menu__nav open' : 'menu__nav'}>
                            <ul>
                                <div className='container__botao-fechar'>
                                    <button onClick={handleToggle} />
                                </div>
                                <li><a href="#">Home</a><p></p></li>
                                <li><a href="#">Nossas lojas</a><p></p></li>
                                <li><a href="#">Novidades</a><p></p></li>
                                <li><a href="#">Promoções</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header >
        </>
    )
}
