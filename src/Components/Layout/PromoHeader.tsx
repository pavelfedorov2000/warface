import logo from "../../assets/images/logo/logo.png";
import { Color } from "../../enums/Color";
import ActionButton from "../ActionButton";
import Button from "../Button";
import Vk from "../icons/Vk";
import Logo from "../Logo";
import Menu from "../Menu";

const mainClass = 'promo-header';

const PromoHeader = () => {
    return (
        <header className={mainClass}>
            <div className={`${mainClass}__inner`}>
                <Logo className={mainClass} src={logo} width={200} height={38} />
                <Menu className={`${mainClass}__menu`} />
                <div className={`${mainClass}__actions`}>
                    <ActionButton className={`${mainClass}__action-btn`} bg={Color.Blue} icon={<Vk />} />
                    <Button href="home" className={`${mainClass}__btn`} text="Войти" />
                </div>
            </div>
        </header>
    );
};

export default PromoHeader;