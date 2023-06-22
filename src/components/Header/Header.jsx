import './Header.scss'
export default function Header() {
    return (
        <>
            <header>
                <div className='container__flex'>
                    <img src="/src/assets/logo.svg" alt="logo Meteora" />
                    <div>
                        <button className='menu__button'></button>
                        <nav className='menu__nav'>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Nossas lojas</a></li>
                                <li><a href="#">Novidades</a></li>
                                <li><a href="#">Promoções</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}
