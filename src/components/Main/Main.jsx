import carrosselMobile from '../../assets/carrossel.svg'
import carrosselTablet from '../../assets/carousel _ 768.svg'
import carrosselWeb from '../../assets/carousel _ 1440.svg'
import './Main.scss'

export default function Main() {
    return (
        <>
            <div className="carrossel__container">
                <img className='img__mobile' src={carrosselMobile} alt="imagem de moda" />
                <img className='img__tablet' src={carrosselTablet} alt="imagem de moda" />
                <img className='img__web' src={carrosselWeb} alt="imagem de moda" />
            </div>
        </>
    )
}
