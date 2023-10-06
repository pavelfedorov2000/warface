import { ButtonType } from "../enums/ButtonType";
import Camera from "./icons/Camera";
import Clip from "./icons/Clip";
import Send from "./icons/Send";

const mainClass = 'textfield';

const ChatTextField = () => {
    return (
        <div className={mainClass}>
            <textarea className={`${mainClass}__textarea`} placeholder="Введите сообщение..."></textarea>
            <div className={`${mainClass}__btns`}>
                <button className={`${mainClass}__btn`} type={ButtonType.Button}>
                    <Camera />
                </button>
                <button className={`${mainClass}__btn`} type={ButtonType.Button}>
                    <Clip />
                </button>
                <button className={`${mainClass}__btn`} type={ButtonType.Button}>
                    <Send />
                </button>
            </div>
        </div>
    );
};

export default ChatTextField;