import './ModalRegistered.scss'
import checkCircle from '../../assets/View-More/check-circle.svg'
import iconClose from '../../assets/View-More/Icon-Close.svg'

export default function ModalRegistered({ setIsOpen }) {
    return (
        <div>
            <header className='wrapper__header-modal'>
                <div className='title__header'>
                    <img src={checkCircle} alt="" />
                    <h2>E-mail cadastrado com sucesso!</h2>
                </div>
                <div className='close__header'>
                    <img onClick={() => setIsOpen(false)} src={iconClose} alt="" />
                </div>
            </header>
            <main></main>
        </div>
    )
}
