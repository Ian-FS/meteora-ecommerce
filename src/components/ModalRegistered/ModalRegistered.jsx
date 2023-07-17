/* eslint-disable react/prop-types */
import './ModalRegistered.scss'
import checkCircle from '../../assets/View-More/check-circle.svg'
import iconClose from '../../assets/View-More/Icon-Close.svg'

export default function ModalRegistered({ setIsOpen }) {
    return (
        <div className='background__modal'>
            <div className='wrapper__modal'>
                <header className='wrapper__header-modal'>
                    <div className='title__header'>
                        <img src={checkCircle} alt="" />
                        <h2>E-mail cadastrado com sucesso!</h2>
                    </div>
                    <div className='close__header'>
                        <img onClick={() => setIsOpen(false)} src={iconClose} alt="" />
                    </div>
                </header>
                <main className='modal__content'>
                    Em breve você receberá novidades exclusivas da Meteora.
                </main>
            </div>
        </div>

    )
}
