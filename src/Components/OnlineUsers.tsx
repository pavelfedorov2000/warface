import onlineIcon from "../assets/images/icons/online.svg";

const mainClass = 'online-users';

const OnlineUsers = () => {
    return (
        <div className={mainClass} style={{ backgroundImage: `url(${onlineIcon})` }}>
            <span className={`${mainClass}__value`}>2 381</span>
            <span className={`${mainClass}__descr`}>Online</span>
        </div>
    );
};

export default OnlineUsers;