import { Link } from 'react-router-dom';
import './burgerMenu.scss';
import { useState } from 'react';

function Navigation() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  function toggleHamburger() {
    setHamburgerOpen(!hamburgerOpen);
  }

  return (
    <>
      <div
        className={
          hamburgerOpen ? 'header__wrap-nav nav_burger-active' : 'header__wrap-nav nav_burger'
        }
      >
        <nav className="nav nav-list__burger">
          <Link className="nav__link nav-item_burger" to="/">
            Каталог домов
          </Link>
          <Link className="nav__link nav-item_burger" to="/">
            Услуги
          </Link>
          <Link className="nav__link nav-item_burger" to="/">
            О нас
          </Link>
          <Link className="nav__link nav-item_burger" to="/">
            Контакты
          </Link>
          <Link className="nav__link nav-item_burger" to="/">
            Блог
          </Link>
        </nav>
        <div className={hamburgerOpen ? 'window-open' : 'window-close'} onClick={toggleHamburger}>
          <span className="close-line line1"></span>
          <span className="close-line line2"></span>
        </div>
      </div>
      <div className="header-burger" onClick={toggleHamburger}>
        <span className="burger-line line-first"></span>
        <span className="burger-line line-second"></span>
        <span className="burger-line line-third"></span>
      </div>
    </>
  );
}

export default Navigation;
