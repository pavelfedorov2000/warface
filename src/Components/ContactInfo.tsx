import vkIcon from "../assets/images/icons/vk.svg";
import mailIcon from "../assets/images/icons/mail.svg";
import clockIcon from "../assets/images/icons/clock.svg";

const ContactInfo = () => {
    return (
        <section className="contact-info">
            <ul className="contact-info__list">
                <li className="contact-info-item">
                    <span className="action-button contact-info-item__icon action-button--style_bg-blue">
                        <img src={vkIcon} alt="vk" />
                    </span>
                    <span className="contact-info-item__property">Сообщество:</span>
                    <a href="#" className="contact-info-item__value">ВКонтакте</a>
                </li>
                <li className="contact-info-item">
                    <span className="action-button contact-info-item__icon action-button--style_bg-orange">
                        <img src={mailIcon} alt="vk" />
                    </span>
                    <span className="contact-info-item__property">Почта:</span>
                    <a href="mailto:hello@warface.online" className="contact-info-item__value">hello@warface.online</a>
                </li>
                <li className="contact-info-item">
                    <span className="action-button contact-info-item__icon action-button--style_bg-green">
                        <img src={clockIcon} alt="vk" />
                    </span>
                    <span className="contact-info-item__property">Время работы</span>
                    <span className="contact-info-item__value">с 10:30 до 22:30</span>
                </li>
            </ul>
        </section>
    );
};

export default ContactInfo;