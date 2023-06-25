import { useState } from 'react'
import './Header.scss'
export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <header>
                <div className='container__flex'>
                    <img src="/src/assets/logo.svg" alt="logo Meteora" />
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
