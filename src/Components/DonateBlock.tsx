import classNames from "classnames";
import { useState } from "react";
import selectArrow from "../assets/images/icons/select-arrow.svg";
import { DONATE_ITEMS } from "../constants/donate";
import { DonateCategory, DONATE_CATEGORIES } from "../enums/Donate";
import Button from "./Button";
import DonateCard from "./DonateCard";
import SearchField from "./SearchField";

const DonateBlock = () => {
    const [activeCategory, setActiveCategory] = useState<string>(DonateCategory.All);
    const [activeSelectValue, setActiveSelectVAlue] = useState<string>(DonateCategory.All);
    const [donates, setDonates] = useState(DONATE_ITEMS.slice(0, 10));

    const onSelectCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;

        setActiveSelectVAlue(value);
        setActiveCategory(value);

        if (value === DonateCategory.All) {
            setDonates(DONATE_ITEMS);
        } else {
            setDonates(DONATE_ITEMS.slice().filter((donate) => donate.type === value));
        }
    }

    const onChangeCategory = (category: {}) => {
        const categoryItem = Object.keys(category)[0];

        setActiveCategory(categoryItem);
        setActiveSelectVAlue(categoryItem);

        if (categoryItem === DonateCategory.All) {
            setDonates(DONATE_ITEMS);
        } else {
            setDonates(DONATE_ITEMS.slice().filter((donate) => donate.type === categoryItem));
        }
    }

    const showMoreDonates = () => {
        setDonates([
            ...donates,
            ...DONATE_ITEMS.slice(10)
        ]);
    }

    return (
        <section className="donate-block">
            <header className="donate-block__top">
                <h2 className="title donate-block__title title--line_green title--small">Доната</h2>
                <SearchField />
                <select onChange={onSelectCategory} value={activeSelectValue} className="select donate-block__select" style={{ backgroundImage: `url(${selectArrow})` }}>
                    {DONATE_CATEGORIES.map((category, index) => (
                        <option key={index} value={Object.keys(category)[0]}>{Object.values(category)[0].text}</option>
                    ))}
                </select>
            </header>
            <div className="donate-block__filter-tabs">
                {DONATE_CATEGORIES.map((category, index) => (
                    <button key={index} onClick={() => onChangeCategory(category)} className={classNames('filter-tab', {
                        'active': Object.keys(category)[0] === activeCategory,
                    })} type="button">
                        {index !== 0 ?
                            <img src={Object.values(category)[0].icon} alt="" />
                            :
                            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.73 17.2959L6.33 19.6959C6.69999 19.8534 7.12428 19.8151 7.4601 19.5939C7.79592 19.3727 7.99862 18.998 8 18.5959V1.19588C7.99862 0.79376 7.79592 0.419063 7.4601 0.197866C7.12428 -0.0233305 6.69999 -0.0616211 6.33 0.0958787L0.73 2.49588C0.288712 2.68372 0.00165129 3.11628 0 3.59588V16.1959C0.00165129 16.6755 0.288712 17.108 0.73 17.2959ZM2 4.12588L6 2.41588V17.4159L2 15.6659V4.12588Z" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M11 17.8959C11.5523 17.8959 12 17.4482 12 16.8959V2.89587C12 2.34359 11.5523 1.89587 11 1.89587C10.4477 1.89587 10 2.34359 10 2.89587V16.8959C10 17.4482 10.4477 17.8959 11 17.8959Z" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M15 17.8959C15.5523 17.8959 16 17.4482 16 16.8959V2.89587C16 2.34359 15.5523 1.89587 15 1.89587C14.4477 1.89587 14 2.34359 14 2.89587V16.8959C14 17.4482 14.4477 17.8959 15 17.8959Z" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 17.8959C19.5523 17.8959 20 17.4482 20 16.8959V2.89587C20 2.34359 19.5523 1.89587 19 1.89587C18.4477 1.89587 18 2.34359 18 2.89587V16.8959C18 17.4482 18.4477 17.8959 19 17.8959Z" />
                            </svg>
                        }
                        <span className="filter-tab__text">
                            {Object.values(category)[0].text}
                        </span>
                    </button>
                ))}
            </div>
            <div className="donate-block__cards">
                {donates.map((donate) => (
                    <DonateCard key={donate.id} {...donate} />
                ))}
            </div>
            {donates.length !== DONATE_ITEMS.length && <Button onClick={showMoreDonates} className="donate-block__btn" text="Показать еще 10" />}
        </section>
    );
};

export default DonateBlock;