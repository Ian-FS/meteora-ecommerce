import Card from './Card/Card'
import './Cards.scss'
import camiseta from '../../assets/items/item-camiseta.svg'
import calca from '../../assets/items/item-calca.svg'
import tenis from '../../assets/items/item-tenis.svg'
import jaqueta from '../../assets/items/item-jaqueta-jeans.svg'
import oculos from '../../assets/items/item-oculos.svg'
import bolsa from '../../assets/items/item-bolsa.svg'




export default function Cards() {



    return (
        <div className='cards__container'>
            <p>Produtos que estão bombando!</p>
            <div className='grid__container'>
                <Card
                    img={camiseta}
                    product={'Camiseta Conforto'}
                    description={'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.'}
                    value={'R$ 70,00'}
                />
                <Card
                    img={calca}
                    product={'Calça Alfaiataria'}
                    description={'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!'}
                    value={'R$ 180,00'}
                />
                <Card
                    img={tenis}
                    product={'Tênis Chunky'}
                    description={'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.'}
                    value={'R$ 250,00'}
                />
                <Card
                    img={jaqueta}
                    product={'Jaqueta Jeans'}
                    description={'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!'}
                    value={'R$ 150,00'}
                />
                <Card
                    img={oculos}
                    product={'Óculos Redondo'}
                    description={'Armação metálica em grafite com lentes arredondadas. Sem erro!'}
                    value={'R$ 120,00'}
                />
                <Card
                    img={bolsa}
                    product={'Bolsa coringa'}
                    description={'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!'}
                    value={'R$ 120,00'}
                />
            </div>
        </div>
    )
}
