import volumeIcon from "../assets/images/icons/volume.svg";
import secureIcon from "../assets/images/icons/secure.svg";
import controllerIcon from "../assets/images/icons/controller.svg";
import attachIcon from "../assets/images/icons/attach.svg";
import Field from "./Field";
import { InputType } from "../enums/InputType";

const Fields = [{
    label: 'Никнейм',
    value: 'Shenderro',
    editButton: true,
}, {
    label: 'ВКонтакте',
    activeValue: 'Отвязать страницу',
    inActiveValue: 'Привязать страницу',
    icon: controllerIcon,
    toggle: true,
}, {
    label: 'Уведомления ВК',
    activeValue: 'Включить',
    inActiveValue: 'Выключить',
    icon: volumeIcon,
    toggle: true,
}, {
    type: InputType.Email,
    label: 'E-mail',
    value: 'shenderro@gmail.com',
    editButton: true,
}, {
    type: InputType.Password,
    label: 'Пароль',
    value: 'FcMinsk25',
    editButton: true,
}, {
    label: 'Рассылка',
    activeValue: 'Отписаться от рассылки',
    inActiveValue: 'Подписаться на рассылку',
    icon: attachIcon,
    toggle: true,
}, {
    label: 'Секретное слово',
    value: 'Skyqwertyubt',
    icon: secureIcon,
    secure: true,
}];

const SettingsForm = () => {
    return (
        <div className="settings-form">
            {Fields.map((field, index) => (
                <Field key={index} {...field} />
            ))}
        </div>
    );
};

export default SettingsForm;