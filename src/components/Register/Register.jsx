import ModalRegistered from '../ModalRegistered/ModalRegistered'
/* eslint-disable react/prop-types */
import './Register.scss'

export default function Register({ setIsOpen, isOpen }) {

    return (
        <>
            {isOpen && <ModalRegistered setIsOpen={setIsOpen} />}
            <div className='register__container'>
                <div className='register__box'>
                    <p>
                        Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!
                    </p>
                    <div className='input__box'>
                        <input type="email" placeholder='Digite seu email' />
                        <button onClick={() => setIsOpen(true)}>Enviar</button>
                    </div>
                </div>
            </div>
        </>

    )
}
