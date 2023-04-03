import { Link } from 'react-router-dom';
import './footer.scss';

function FooterNav() {
  return (
    <>
      <div className="footer__wrap-link">
        <Link className="wrap-link__link" to="/">
          Главная
        </Link>
        <Link className="wrap-link__link" to="/">
          Каталог
        </Link>
        <Link className="wrap-link__link" to="/">
          Услуги
        </Link>
        <Link className="wrap-link__link" to="/">
          Расчет стоимости
        </Link>
        <Link className="wrap-link__link" to="/">
          Консультация архитектора
        </Link>
      </div>
      <div className="footer__wrap-link">
        <Link className="wrap-link__link" to="/">
          Экскурсия на объект
        </Link>
        <Link className="wrap-link__link" to="/">
          3D-макет дома
        </Link>
        <Link className="wrap-link__link" to="/">
          О нас
        </Link>
        <Link className="wrap-link__link" to="/">
          Блог
        </Link>
        <Link className="wrap-link__link" to="/">
          Контакты
        </Link>
      </div>
    </>
  );
}

export default FooterNav;
