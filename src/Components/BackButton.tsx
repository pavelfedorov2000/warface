import { useHistory } from "react-router-dom";
import { ButtonType } from "../enums/ButtonType";

const mainClass = 'back-button';

const BackButton = () => {
    const history = useHistory();

    return (
        <button onClick={() => history.goBack()} className={mainClass} type={ButtonType.Button} aria-label="Back to previous page">
            <svg className={`${mainClass}__arrow`} viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.292892 7.2929C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928934C7.68054 0.538409 7.04738 0.538409 6.65685 0.928934L0.292892 7.2929ZM26 7L1 7L1 9L26 9L26 7Z" />
            </svg>
        </button>
    );
};

export default BackButton;