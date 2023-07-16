import './ModalRegistered.scss'

export default function ModalRegistered() {
    return (
        <div>
            <header className='wrapper__header-modal'>
                <div className='title__header'>
                    <img src="../../assets/View-More/check-circle.svg" alt="" />
                    <p>E-mail cadastrado com sucesso!</p>
                </div>
                <div className='close__header'>
                    <img src="../../assets/View-More/Icon-Close.svg" alt="" />
                </div>
            </header>
            <main></main>
        </div>
    )
}
