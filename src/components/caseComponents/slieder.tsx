import './slider.scss';
import InputSelect from './inputSelect';

function Slider() {
  return (
    <section className="slider">
      <div className="wrap-slider">
        <h1 className="h1">
          Кейс: дом из оцилиндрованного бруса
          <br />в Балашихе под ключ
        </h1>
        <p className="slider__text">Двухэтажный дом, площадью 128 м² в европейском стиле</p>
        <div className="slider__wrap-form">
          <h3 className="wrap-form__h3">Хотите сотрудничать с профессионалами?</h3>
          <p className="wrap-form__p">Оставьте заявку и получите бесплатную консультацию</p>
          <form className="slider__form" action="#">
            <input className="slider__input" type="text" placeholder="Ваше имя" />
            <InputSelect />
            <input className="slider__input" type="tel" placeholder="Номер телефона" />
            <input className="slider__input slider__submit" type="submit" />
          </form>
          <p className="wrap-form__text">Ваши данные не будут переданы третьим лицам</p>
        </div>
      </div>
      <div className="wrap-buttons">
        <div className="play-button">
          <div className="play-button__img"></div>
          <button className="play-button__button">ВИДЕООТЗЫВ</button>
        </div>
        <div className="group-buttons">
          <div className="calculator"></div>
          <div className="binoculars"></div>
          <div className="compass"></div>
          <div className="builder"></div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
