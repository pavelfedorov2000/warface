import classNames from "classnames";
import { Good as IGood } from "../interfaces/Card";
import gun from "../assets/images/gun-2.png";
import rank from "../assets/images/icons/rank.png";
import rankStar from "../assets/images/icons/rank-star.png";
import vip from "../assets/images/icons/vip.png";
import gunSmall from "../assets/images/gun-small.png";
import { GoodType } from "../enums/GoodType";

interface Props extends IGood {
    className?: string;
}

const Good = ({ className, type }: Props) => {
    return (
        <div className={classNames('good', className)}>
            <img className="good__status" src={vip} alt="vip" />
            <img className={classNames('good__img', {
                'good__img--type_gun': type === GoodType.Gun || !type,
                'good__img--type_rank': type === GoodType.Rank
            })} src={type === GoodType.Gun || !type ? gun : rank} alt="" />
            <img className={classNames('good__small-img', {
                'good__small-img--type_gun': type === GoodType.Gun || !type,
                'good__small-img--type_rank': type === GoodType.Rank
            })} src={type === GoodType.Gun || !type ? gunSmall : rankStar} alt="" />
            <svg viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.2605 29.3502C17.208 28.7426 15.8549 29.1004 15.3198 30.1916C11.8704 37.2256 11.0676 45.2966 13.1081 52.9116C15.339 61.2374 20.7859 68.336 28.2507 72.6458C35.7154 76.9556 44.5864 78.1235 52.9123 75.8926C60.5272 73.8522 67.1156 69.1214 71.4826 62.6171C72.16 61.6082 71.7933 60.2574 70.7409 59.6498C69.6884 59.0421 68.3496 59.4086 67.6615 60.4103C63.886 65.9069 58.2605 69.9034 51.7733 71.6417C44.5748 73.5705 36.905 72.5607 30.4511 68.8346C23.9972 65.1084 19.2878 58.971 17.359 51.7726C15.6207 45.2853 16.2691 38.4152 19.1414 32.3972C19.6649 31.3005 19.3129 29.9578 18.2605 29.3502Z" fill="#E2E3F3" fillOpacity="0.65" />
                <path d="M74.7996 44.5C76.0148 44.5 77.0078 43.5135 76.9256 42.301C76.3958 34.4847 73.0555 27.0936 67.481 21.519C61.386 15.4241 53.1195 12 44.5 12C35.8805 12 27.614 15.4241 21.519 21.519C15.9445 27.0936 12.6042 34.4847 12.0744 42.301C11.9922 43.5135 12.9852 44.5 14.2004 44.5C15.4157 44.5 16.3919 43.5132 16.4869 42.3017C17.0083 35.6538 19.8819 29.3799 24.6309 24.6309C29.9005 19.3613 37.0476 16.4008 44.5 16.4008C51.9524 16.4008 59.0995 19.3613 64.3691 24.6309C69.1181 29.3799 71.9917 35.6538 72.5131 42.3017C72.6081 43.5132 73.5843 44.5 74.7996 44.5Z" fill="url(#paint0_linear_5045_3)" />
                <path d="M44.5 74.7996C44.5 76.0148 45.4865 77.0078 46.699 76.9256C54.5153 76.3958 61.9064 73.0555 67.481 67.481C73.5759 61.386 77 53.1195 77 44.5C77 35.8805 73.5759 27.614 67.481 21.519C61.9064 15.9445 54.5153 12.6042 46.699 12.0744C45.4865 11.9922 44.5 12.9852 44.5 14.2004C44.5 15.4157 45.4868 16.3919 46.6983 16.4869C53.3463 17.0083 59.6201 19.8819 64.3691 24.6309C69.6387 29.9005 72.5992 37.0476 72.5992 44.5C72.5992 51.9524 69.6387 59.0995 64.3691 64.3691C59.6201 69.1181 53.3462 71.9917 46.6983 72.5131C45.4868 72.6081 44.5 73.5843 44.5 74.7996Z" fill="url(#paint1_linear_5045_3)" />
                <defs>
                    <linearGradient id="paint0_linear_5045_3" x1="26.7727" y1="66.9545" x2="60.4545" y2="22.0455" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#B139FE" />
                        <stop offset="1" stopColor="#1E61EB" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_5045_3" x1="62.2273" y1="22.0455" x2="28.5455" y2="66.9545" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#B139FE" />
                        <stop offset="1" stopColor="#1E61EB" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default Good;