import ModalRegistered from '../ModalRegistered/ModalRegistered'
/* eslint-disable react/prop-types */
import './Register.scss'

export default function Register({ setIsOpen, isOpen }) {

    function handleClick() {
        setIsOpen(!isOpen)
    }
    return (
        <>
            {isOpen && <ModalRegistered />}
            <div className='register__container'>
                <div className='register__box'>
                    <p>
                        Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!
                    </p>
                    <div className='input__box'>
                        <input type="email" placeholder='Digite seu email' />
                        <button onClick={handleClick}>Enviar</button>
                    </div>
                </div>
            </div>
        </>

    )
}
