/* eslint-disable react/prop-types */
import camiseta from '../../assets/card-camiseta.svg'
import bolsa from '../../assets/card-bolsa.svg'
import calcado from '../../assets/card-calcado.svg'
import calca from '../../assets/card-calca.png'
import casaco from '../../assets/card-casaco.png'
import oculos from '../../assets/card-oculos.svg'
import './Category.scss'


export default function Category({ setSearchList }) {
    return (
        <div className='category'>
            <div className='category__header'>
                <p>Busque por categoria:</p>
            </div>
            <div className="category__container__img">
                <a onClick={(ev) => setSearchList(ev.target.name)}><img name="camiseta" src={camiseta} alt="camisetas" /></a>
                <a onClick={(ev) => setSearchList(ev.target.name)}><img name="bolsa" src={bolsa} alt="bolsas" /></a>
                <a onClick={(ev) => setSearchList(ev.target.name)}><img name="calçado" src={calcado} alt="calçados" /></a>
                <a onClick={(ev) => setSearchList(ev.target.name)}><img name="calça" src={calca} alt="calças" /></a>
                <a onClick={(ev) => setSearchList(ev.target.name)}><img name="casaco" src={casaco} alt="casacos" /></a>
                <a onClick={(ev) => setSearchList(ev.target.name)}><img name="oculos" src={oculos} alt="oculos" /></a>

            </div>

        </div>
    )
}
