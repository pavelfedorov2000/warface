import OnlineUsers from "../OnlineUsers";
import ToolbarCard from "../ToolbarCard";
import ToolbarSwitchers from "../ToolbarSwitchers";
import farmBlue from "../../assets/images/farms/farm-blue.png";
import farmOrange from "../../assets/images/farms/farm-orange.png";
import farmPink from "../../assets/images/farms/farm-pink.png";

const Toolbar = () => {
    return (
        <div className="toolbar">
            <div className="toolbar__top">
                <OnlineUsers />
            </div>
            <ToolbarSwitchers />
            <ul className="toolbar__items">
                {Array(11).fill(1).map((_, index) => (
                    <li key={index}>
                        <ToolbarCard img={index % 3 === 2 ? farmBlue : index % 3 === 1 ? farmOrange : farmPink} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Toolbar;