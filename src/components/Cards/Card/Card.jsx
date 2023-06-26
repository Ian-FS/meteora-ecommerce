
export default function Card(props) {
    return (
        <div className="card__container">
            <img src={props.img} alt="" />
            <h3>{props.product}</h3>
            <p>{props.description}</p>
            <p>{props.value}</p>
            <button>Ver mais</button>
        </div>
    )
}
