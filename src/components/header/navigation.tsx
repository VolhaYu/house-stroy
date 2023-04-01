import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="header__wrap-nav">
      <nav className="nav">
        <Link className="nav__link" to="/">
          Каталог домов
        </Link>
        <Link className="nav__link" to="/">
          Услуги
        </Link>
        <Link className="nav__link" to="/">
          О нас
        </Link>
        <Link className="nav__link" to="/">
          Контакты
        </Link>
        <Link className="nav__link" to="/">
          Блог
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
