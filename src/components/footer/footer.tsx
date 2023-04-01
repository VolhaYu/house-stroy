import logo from '../../assets/png/logo.png';
import logoWhite from '../../assets/png/logoWhite.png';
import vk from '../../assets/svg/vk.svg';
import insta from '../../assets/svg/insta.svg';
import fb from '../../assets/svg/fb.svg';
import youtube from '../../assets/svg/youtube.svg';
import './footer.scss';
import FooterNav from './footerNav';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="wrap-footer">
            <div className="footer__wrap-logo">
              <img className="logo footer__logo" src={logo} alt="logo" />
              <button className="footer__button ">Заказать звонок</button>
            </div>
            <FooterNav />
            <div className="footer__wrap-contacts">
              <p className="footer__text">Делимся крутыми проектами в соц.сетях. Подписывайтесь!</p>
              <div className="social-network">
                <img className="soc-img" src={vk} alt="vk" />
                <img className="soc-img" src={insta} alt="insta" />
                <img className="soc-img" src={fb} alt="fb" />
                <img className="soc-img" src={youtube} alt="youtube" />
              </div>
              <p className="footer__text">Разработка и продвижение сайта:</p>
              <img className="logo-white" src={logoWhite} alt="logo-white" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
