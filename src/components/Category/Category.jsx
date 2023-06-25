import camiseta from '../../assets/card-camiseta.svg'
import bolsa from '../../assets/card-bolsa.svg'
import calcado from '../../assets/card-calcado.svg'
import calca from '../../assets/card-calca.png'
import casaco from '../../assets/card-casaco.png'
import oculos from '../../assets/card-oculos.svg'
import './Category.scss'


export default function Category() {
    return (
        <div className='category'>
            <div className='category__header'>
                <p>Busque por categoria:</p>
            </div>
            <div className="category__container__img">
                <a href=""><img src={camiseta} alt="camiseta" /></a>
                <a href=""><img src={bolsa} alt="bolsa" /></a>
                <a href=""><img src={calcado} alt="" /></a>
                <a href=""><img src={calca} alt="" /></a>
                <a href=""><img src={casaco} alt="" /></a>
                <a href=""><img src={oculos} alt="" /></a>

            </div>

        </div>
    )
}
