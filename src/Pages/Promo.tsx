import { Footer, PromoHeader } from "../Components/Layout";
import promoBg from "../assets/images/promo-bg.jpg";
import decorText from "../assets/images/decor-text.svg";
import { Button, PromoBenefits } from "../Components";

const Promo = () => {
    return (
        <div className="promo" style={{ backgroundImage: `url(${promoBg})` }}>
            <div className="promo__container">
                <PromoHeader />
                <div className="promo__body">
                    <div className="promo__content" style={{ backgroundImage: `url(${decorText})` }}>
                        <h1 className="promo__title">
                            DealkGo.com — совершайте безопасную сделку сейчас !
                        </h1>
                        <p className="promo__text">
                            Присоединяйтесь к нам прямо сейчас, и получите 15&nbsp;бонусов на счёт при первом пополении своего баланса.
                        </p>
                        <Button className="promo__btn" href="home" bg="purple" text="Присоединиться" />
                    </div>
                    <section className="promo__aside aside-promo">
                        <PromoBenefits />
                        <div className="aside-promo__title">
                            Почему мы?
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Promo;