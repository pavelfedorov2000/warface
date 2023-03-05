import Camera from "./icons/Camera";
import Clip from "./icons/Clip";
import Send from "./icons/Send";

const ChatTextField = () => {
    return (
        <div className="chat-textfield">
            <textarea className="chat-textfield__textarea" placeholder="Введите сообщение..."></textarea>
            <div className="chat-textfield__btns">
                <button className="chat-textfield__btn" type="button">
                    <Camera />
                </button>
                <button className="chat-textfield__btn" type="button">
                    <Clip />
                </button>
                <button className="chat-textfield__btn" type="button">
                    <Send />
                </button>
            </div>
        </div>
    );
};

export default ChatTextField;