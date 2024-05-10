/* eslint-disable react/prop-types */
import camiseta from '../../assets/card-camiseta.svg';
import bolsa from '../../assets/card-bolsa.svg';
import calcado from '../../assets/card-calcado.svg';
import calca from '../../assets/card-calca.png';
import casaco from '../../assets/card-casaco.png';
import oculos from '../../assets/card-oculos.svg';
import './Category.scss';

export default function Category({ setSearchList, searchList }) {
  function handleClick(ev) {
    let categoryTarget = ev.target;
    if (searchList === categoryTarget.name) {
      categoryTarget.classList.remove('border-active');
      setSearchList('');
    } else {
      let categoryCard = document.querySelector('.border-active');
      categoryCard?.classList.remove('border-active');
      categoryTarget.classList.toggle('border-active');
      setSearchList(categoryTarget.name);
    }
  }

  return (
    <div className="category">
      <div className="category__header">
        <p>Busque por categoria:</p>
      </div>
      <div className="category__container__img">
        <a onClick={handleClick}>
          <img name="camiseta" src={camiseta} alt="camisetas" />
        </a>
        <a onClick={handleClick}>
          <img name="bolsa" src={bolsa} alt="bolsas" />
        </a>
        <a onClick={handleClick}>
          <img name="calçado" src={calcado} alt="calçados" />
        </a>
        <a onClick={handleClick}>
          <img name="calça" src={calca} alt="calças" />
        </a>
        <a onClick={handleClick}>
          <img name="casaco" src={casaco} alt="casacos" />
        </a>
        <a onClick={handleClick}>
          <img name="oculos" src={oculos} alt="oculos" />
        </a>
      </div>
    </div>
  );
}
