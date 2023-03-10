import onlineIcon from "../assets/images/icons/online.svg";

const OnlineUsers = () => {
    return (
        <div className="online-users" style={{ backgroundImage: `url(${onlineIcon})` }}>
            <span className="online-users__value">2 381</span>
            <span className="online-users__descr">Online</span>
        </div>
    );
};

export default OnlineUsers;