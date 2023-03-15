import logo from "../../assets/images/logo/logo.png";
import ActionButton from "../ActionButton";
import Button from "../Button";
import Vk from "../icons/Vk";
import Logo from "../Logo";
import Menu from "../Menu";

const PromoHeader = () => {
    return (
        <header className="promo-header">
            <div className="promo-header__inner">
                <Logo className="promo-header" src={logo} width={200} height={38} />
                <Menu className="promo-header__menu" />
                <div className="promo-header__actions">
                    <ActionButton className="promo-header__action-btn" bg="blue" icon={<Vk />} />
                    <Button href="home" className="promo-header__btn" text="Войти" />
                </div>
            </div>
        </header>
    );
};

export default PromoHeader;