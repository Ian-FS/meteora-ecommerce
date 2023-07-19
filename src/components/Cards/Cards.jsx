/* eslint-disable react/prop-types */
import Card from './Card/Card'
import './Cards.scss'

// eslint-disable-next-line react/prop-types
export default function Cards({ setIsViewMore, productFilter }) {
    return (
        <div className='cards__container'>
            <p>Produtos que estão bombando!</p>
            <div className='grid__container'>
                {
                    productFilter.map((product) =>
                        <Card
                            key={product.name}
                            image={product.image}
                            product={product.name}
                            description={product.description}
                            value={product.value}
                            setIsViewMore={setIsViewMore}
                        />
                    )
                }
            </div>
        </div>
    )
}
