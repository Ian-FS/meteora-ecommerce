/* eslint-disable react/prop-types */
import './Card.scss'
import ViewMore from './ViewMore/ViewMore'
import { useState } from 'react'


export default function Card({ image, product, description, value }) {
    const [isOpenViewMore, setIsOpenViewMore] = useState(false)


    return (
        <div className="card__container">
            <img className='img__card' src={image} alt="" />
            <div className='info__container'>
                <h3>{product}</h3>
                <h4>{description}</h4>
                <h3>{value}</h3>
                <button onClick={() => setIsOpenViewMore(true)}>Ver mais</button>
                {
                    isOpenViewMore &&
                    <ViewMore
                        setIsOpenViewMore={setIsOpenViewMore}
                        image={image}
                        product={product}
                        description={description}
                        value={value}
                    />
                }
            </div>
        </div>
    )
}
