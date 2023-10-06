import Camera from "./icons/Camera";
import Clip from "./icons/Clip";
import Send from "./icons/Send";

const mainClass = 'textfield';

const ChatTextField = () => {
    return (
        <div className={mainClass}>
            <textarea className={`${mainClass}__textarea`} placeholder="Введите сообщение..."></textarea>
            <div className={`${mainClass}__btns`}>
                <button className={`${mainClass}__btn`} type="button">
                    <Camera />
                </button>
                <button className={`${mainClass}__btn`} type="button">
                    <Clip />
                </button>
                <button className={`${mainClass}__btn`} type="button">
                    <Send />
                </button>
            </div>
        </div>
    );
};

export default ChatTextField;