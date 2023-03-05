import { ChatMessage as ChatMessageType } from "../interfaces/ChatMessage";
import ChatMessage from "./ChatMessage";
import ChatTextField from "./ChatTextField";
import User from "./User";
import userAvatar from "../assets/images/user.png";
import Support from "./icons/Support";
import classNames from "classnames";

const MESSAGES: ChatMessageType[] = [{
    date: '12.09.2019',
    text: 'Привет, как дела ?'
}, {
    date: '12.09.2019',
    text: 'Привет, Отлично !!!'
}, {
    date: '12.09.2019',
    text: 'Привет, как дела ?'
}, {
    date: '12.09.2019',
    text: 'Привет, Отлично !!!'
}];

const Chat = () => {
    return (
        <div className="chat">
            <header className="chat__head">
                <User />
                <div className="chat__supported">
                    Supported
                    <Support count={3} />
                </div>
            </header>
            <div className="chat__body">
                <div className="chat__messages">
                    {MESSAGES.map((message, index) => (
                        <div className={classNames('chat__message', {
                            'chat__message--reverse': (index + 1) % 2 === 0,
                        })}>
                            {(index + 1) % 2 !== 0 ?
                                <img className="chat__avatar" src={userAvatar} alt="avatar" />
                                :
                                <Support size="xs" />
                            }
                            <ChatMessage index={index + 1} {...message} />
                        </div>
                    ))}
                </div>
                <ChatTextField />
            </div>
        </div>
    );
};

export default Chat;