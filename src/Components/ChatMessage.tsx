import classNames from "classnames";
import { ChatMessage as ChatMessageType } from "../interfaces/ChatMessage";
import { formatDateTime } from "../utils/formatDateTime";
import calendarIcon from "../assets/images/icons/calendar.svg";
import Image from "./Image";

enum ChatRole {
    User = 'user',
    Support = 'support',
}

const mainClass = 'chat-message';

const ChatMessage = ({ index, date, text }: ChatMessageType & { index: number; }) => {
    return (
        <div className={classNames(mainClass, {
            [`is-${ChatRole.User}`]: index % 2 !== 0,
            [`is-${ChatRole.Support}`]: index % 2 === 0,
        })}>
            <p className={`${mainClass}__text`}>{text}</p>
            <time dateTime={formatDateTime(date)} className={`${mainClass}__date`}>
                <Image src={calendarIcon} alt="calendar" width={16} height={16} />
                <span>{date}</span>
            </time>
            <button className={`${mainClass}__remove`}>
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.35">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.6717 0.315211C15.4572 0.113306 15.1671 0 14.8647 0C14.5623 0 14.2721 0.113306 14.0577 0.315211L7.97934 6.01732L1.92389 0.282724C1.70491 0.105128 1.42322 0.0122888 1.13513 0.022827C0.847036 0.0333652 0.573778 0.146496 0.369914 0.33956C0.166049 0.532623 0.0466244 0.791437 0.0354966 1.06427C0.0243688 1.3371 0.122332 1.60382 0.309863 1.81121L6.37677 7.56751L0.321321 13.3021C0.110325 13.5091 -0.00518782 13.7871 0.000178986 14.0747C0.00554579 14.3624 0.131345 14.6363 0.349932 14.8361C0.568518 15.0359 0.861969 15.1453 1.16573 15.1402C1.46949 15.1351 1.75869 15.016 1.96969 14.809L15.706 1.80035C15.9011 1.5952 16.0061 1.32734 15.9997 1.05136C15.9933 0.775389 15.876 0.512088 15.6717 0.315211ZM11.6653 9.50793C11.4463 9.33034 11.1646 9.23757 10.8765 9.2481C10.5884 9.25864 10.3151 9.37171 10.1113 9.56477C9.90739 9.75783 9.78797 10.0166 9.77684 10.2895C9.76571 10.5623 9.86371 10.8291 10.0512 11.0365L14.0577 14.8307C14.2767 15.0083 14.5583 15.101 14.8464 15.0905C15.1345 15.0799 15.4078 14.9669 15.6117 14.7738C15.8156 14.5808 15.935 14.3219 15.9461 14.0491C15.9572 13.7763 15.8592 13.5095 15.6717 13.3021L11.6653 9.50793Z" />
                    </g>
                </svg>
            </button>
        </div>
    );
};

export default ChatMessage;