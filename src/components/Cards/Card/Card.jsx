/* eslint-disable react/prop-types */
import './Card.scss'


export default function Card(props) {
    return (
        <div className="card__container">
            <img src={props.img} alt="" />
            <div className='info__container'>
                <h3>{props.product}</h3>
                <h4>{props.description}</h4>
                <h3>{props.value}</h3>
                <button>Ver mais</button>
            </div>
        </div>
    )
}
