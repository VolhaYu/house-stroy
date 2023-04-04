import './cooperation.scss';
import home from '../../../assets/png/img-home.png';

function Cooperation() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section className="cooperation">
      <img className="cooperation__img" src={home} alt="home" />
      <div className="cooperation__blok">
        <h3 className="cooperation__h3">Хотите с нами сотрудничать?</h3>
        <p className="cooperation__text">Заполните форму и мы перезвоним вам в течение 30 минут!</p>
        <form className="cooperation__form" onSubmit={handleSubmit}>
          <input className="cooperation__input" type="text" placeholder="Ваше имя" />
          <input className="cooperation__input" type="tel" placeholder="Номер телефона" />
          <textarea
            className="cooperation__input textarea"
            name="message"
            placeholder="Ваше сообщение (необязательно)"
          ></textarea>
          <input className="cooperation__input cooperation__submit" type="submit" />
        </form>
      </div>
    </section>
  );
}

export default Cooperation;
