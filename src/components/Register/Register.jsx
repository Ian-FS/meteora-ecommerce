import './Register.scss'

export default function Register() {
    return (
        <div className='register__container'>
            <div className='register__box'>
                <p>
                    Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!
                </p>
                <div className='input__box'>
                    <input type="text" placeholder='Digite seu email' />
                    <button>Enviar</button>
                </div>
            </div>
        </div>
    )
}
