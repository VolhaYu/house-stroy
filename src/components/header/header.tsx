import logo from '../../assets/png/logo.png';
import whatsApp from '../../assets/svg/Group1278.svg';
import telegram from '../../assets/svg/Group1279.svg';
import viber from '../../assets/svg/Group1280.svg';
import './header.scss';
import Navigation from './navigation';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap-info">
          <img className="header__logo-img" src={logo} alt="logo" />
          <div className="header__working-hours">
            <p className="working-hours__text">Пн-Сб: c 10:00 до 20:00</p>
            <p className="working-hours__text">Выходной: воскресенье</p>
          </div>
          <div className="header__order">
            <div className="order__circle"></div>
            <p className="order__text">Заказать 3D-макет дома</p>
          </div>
          <div className="header__contacts">
            <div className="contacts__circle">
              <div className="circle__ellipse1">
                <div className="circle__ellipse2"></div>
              </div>
            </div>
            <div className="wrap-contacts">
              <p className="contacts__phone">+7 (915) 168-55-50</p>
              <div className="contacts__img">
                <img src={whatsApp} alt="whatsApp" />
                <img src={telegram} alt="telegram" />
                <img src={viber} alt="viber" />
              </div>
            </div>
          </div>
          <button className="header__button">Заказать звонок</button>
        </div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
