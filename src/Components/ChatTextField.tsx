import Camera from "./icons/Camera";
import Clip from "./icons/Clip";
import Send from "./icons/Send";

const ChatTextField = () => {
    return (
        <div className="textfield">
            <textarea className="textfield__textarea" placeholder="Введите сообщение..."></textarea>
            <div className="textfield__btns">
                <button className="textfield__btn" type="button">
                    <Camera />
                </button>
                <button className="textfield__btn" type="button">
                    <Clip />
                </button>
                <button className="textfield__btn" type="button">
                    <Send />
                </button>
            </div>
        </div>
    );
};

export default ChatTextField;