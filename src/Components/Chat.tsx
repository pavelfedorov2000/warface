import { ChatMessage as ChatMessageType } from "../interfaces/ChatMessage";
import ChatMessage from "./ChatMessage";
import ChatTextField from "./ChatTextField";
import User from "./User";
import userAvatar from "../assets/images/user.png";
import Support from "./icons/Support";
import classNames from "classnames";
import Image from "./Image";

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

const mainClass = 'chat';

const Chat = () => {
    return (
        <div className={mainClass}>
            <header className={`${mainClass}__head`}>
                <User />
                <div className={`${mainClass}__supported`}>
                    Supported
                    <Support count={3} />
                </div>
            </header>
            <div className={`${mainClass}__body`}>
                <div className={`${mainClass}__messages`}>
                    {MESSAGES.map((message, index) => (
                        <div className={classNames(`${mainClass}__message`, {
                            [`${mainClass}__message--reverse`]: (index + 1) % 2 === 0,
                        })}>
                            {(index + 1) % 2 !== 0 ?
                                <Image className={`${mainClass}__avatar`} src={userAvatar} alt="avatar" width={50} height={50} />
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