import OnlineUsers from "../OnlineUsers";
import ToolbarCard from "../ToolbarCard";
import ToolbarSwitchers from "../ToolbarSwitchers";
import farmBlue from "../../assets/images/farms/farm-blue.png";
import farmOrange from "../../assets/images/farms/farm-orange.png";
import farmPink from "../../assets/images/farms/farm-pink.png";
import { fakeArray } from "../../utils/fakeArray";

const mainClass = 'toolbar';

const Toolbar = () => {
    return (
        <div className={mainClass}>
            <div className={`${mainClass}__top`}>
                <OnlineUsers />
            </div>
            <ToolbarSwitchers />
            <ul className={`${mainClass}__items`}>
                {fakeArray(11).map((_, index) => (
                    <li key={index}>
                        <ToolbarCard img={index % 3 === 2 ? farmBlue : index % 3 === 1 ? farmOrange : farmPink} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Toolbar;