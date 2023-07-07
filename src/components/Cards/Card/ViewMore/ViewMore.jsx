import './ViewMore.scss'
import checkCircle from '../../../../assets/View-More/check-circle.svg'
import iconClose from '../../../../assets/View-More/Icon-Close.svg'



export default function ViewMore({ setIsOpenViewMore }) {
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
            </div>
        </div>
    )
}
