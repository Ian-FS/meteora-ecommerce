import './Facilities.scss'
import flower from '../../assets/flower.svg'
import arrow from '../../assets/arrow-repeat.svg'
import union from '../../assets/Union.svg'

export default function Facilities() {
    return (
        <div className='facilities__container'>
            <h2>
                Conheça todas as nossas facilidades
            </h2>
            <div className='facilities__infos'>

                <div className='info__section'>
                    <div className='info__img'>
                        <img src={union} alt="union" />
                    </div>
                    <div className='info__text'>
                        <h2 >
                            PAGUE PELO PIX
                        </h2>
                        <p>
                            Ganhe 5% OFF em pagamentos via PIX
                        </p>
                    </div>
                </div>

                <div className='info__section'>
                    <div className='info__img'>
                        <img src={arrow} alt="arrow repeat" />
                    </div>
                    <div className='info__text'>
                        <h2>
                            TROCA GRÁTIS
                        </h2>
                        <p>
                            Fique livre para trocar em até 30 dias.
                        </p>
                    </div>
                </div>
                <div className='info__section'>
                    <div className='info__img'>
                        <img src={flower} alt="flower" />
                    </div>
                    <div className='info__text'>
                        <h2>
                            SUSTENTABILIDADE
                        </h2>
                        <p>
                            Moda responsável, que respeita o meio ambiente.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
