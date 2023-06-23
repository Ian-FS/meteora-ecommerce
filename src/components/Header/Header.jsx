import './Header.scss'
export default function Header() {
    return (
        <>
            <header>
                <div className='container__flex'>
                    <img src="/src/assets/logo.svg" alt="logo Meteora" />
                    <div className='container__nav'>
                        <button onClick={(event) => event.target.nextSibling.classList.toggle("open")} className='menu__button'></button>
                        <nav className='menu__nav'>
                            <ul>
                                <div className='container__botao-fechar'>
                                    <button onClick={(event) => event.target.parentNode.parentNode.parentNode.classList.toggle('open')} />
                                </div>
                                <li><a href="#">Home</a><p></p></li>
                                <li><a href="#">Nossas lojas</a><p></p></li>
                                <li><a href="#">Novidades</a><p></p></li>
                                <li><a href="#">Promoções</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}
