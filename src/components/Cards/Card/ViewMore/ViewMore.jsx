import './ViewMore.scss'
import checkCircle from '../../../../assets/View-More/check-circle.svg'
import iconClose from '../../../../assets/View-More/Icon-Close.svg'



// eslint-disable-next-line react/prop-types
export default function ViewMore({ setIsOpenViewMore, img, product, description, value }) {
    return (
        <div className='wrapper__background'>
            <div className='wrapper__view-more'>
                <div className='wrapper__header'>
                    <img className='check-circle' src={checkCircle} alt="check circle" />
                    <h1>Confira detalhes sobre o produto</h1>
                    <img
                        className='icon-close'
                        onClick={() => setIsOpenViewMore(false)}
                        src={iconClose}
                        alt="Icone de fechar o Veja Mais" />
                </div>
                <div className='wrapper__body'>
                    <div className='info__body'>
                        <img src={img} alt="imagem do produto" />
                        <div className='wrapper__product-info'>
                            <h1 className='title__product-name'>
                                {product}
                            </h1>
                            <p className='description__product'>
                                {description}
                            </p>
                            <div className='line__body' />
                            <span className='value__product'>
                                {value}
                            </span>
                            <span className='sold-by__product'>
                                Vendido e entregue por Riachuelo
                            </span>
                            <label htmlFor="select-color">Cores:</label>
                            <p>azul</p>
                            <input type="radio" name='select-color' id='select-color' />
                            <p>Offwhite</p>
                            <input type="radio" name='select-color' id='select-color' />
                            <p>Preto</p>
                            <input type="radio" name='select-color' id='select-color' />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
