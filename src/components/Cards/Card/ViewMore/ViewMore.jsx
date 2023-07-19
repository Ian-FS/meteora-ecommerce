import './ViewMore.scss'
import checkCircle from '../../../../assets/View-More/check-circle.svg'
import iconClose from '../../../../assets/View-More/Icon-Close.svg'



// eslint-disable-next-line react/prop-types
export default function ViewMore({ setIsOpenViewMore, image, product, description, value }) {
    return (
        <div className='wrapper__background'>
            <div className='wrapper__view-more'>
                <div className='wrapper__header'>
                    <div className='title__header'>
                        <img className='check-circle' src={checkCircle} alt="check circle" />
                        <h1>Confira detalhes sobre o produto</h1>
                    </div>
                    <img
                        className='icon-close'
                        onClick={() => setIsOpenViewMore(false)}
                        src={iconClose}
                        alt="Icone de fechar o Veja Mais" />
                </div>
                <div className='wrapper__body'>
                    <div className='info__body'>
                        <img src={image} alt="imagem do produto" />
                        <div className='wrapper__product-info'>
                            <div className='main-info__product'>
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
                            </div>
                            <div className='color-select'>
                                <h2>Cores:</h2>
                                <div className='colors'>
                                    <div className='wrapper__color'>
                                        <input type="radio" name='color' id='Azul-Claro' />
                                        <label htmlFor="color">Azul Claro</label>
                                    </div>
                                    <div className='wrapper__color'>
                                        <input type="radio" name='color' id='Offwhite' />
                                        <label htmlFor="color">Offwhite</label>
                                    </div>
                                    <div className='wrapper__color'>
                                        <input type="radio" name='color' id='Preto' />
                                        <label htmlFor="color">Preto</label>
                                    </div>
                                </div>
                            </div>
                            <div className='size-select'>
                                <h2>Tamanho:</h2>
                                <div className='sizes'>
                                    <div className='wrapper__size'>
                                        <input type="radio" name='size' />
                                        <label htmlFor="size">PP</label>
                                    </div>
                                    <div className='wrapper__size'>
                                        <input type="radio" name='size' />
                                        <label htmlFor="size">P</label>
                                    </div>
                                    <div className='wrapper__size'>
                                        <input type="radio" name='size' />
                                        <label htmlFor="size">M</label>
                                    </div>
                                    <div className='wrapper__size'>
                                        <input type="radio" name='size' />
                                        <label htmlFor="size">G</label>
                                    </div>
                                    <div className='wrapper__size'>
                                        <input type="radio" name='size' />
                                        <label htmlFor="size">GG</label>
                                    </div>
                                </div>
                            </div>
                            <button className='add-to-bag'>
                                Adicionar à sacola
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
