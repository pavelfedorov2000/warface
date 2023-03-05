import { Link } from "react-router-dom";

interface Props {
    title: string;
    link: string;
    items: any[];
}

const ProfileCardSection = ({ title, link, items }: Props) => {
    return (
        <section className="profile-card-section">
            <div className="profile-card-section__top">
                <h2 className="profile-card-section__title">{title}</h2>
                <Link to={`/${link}`} className="button button--style_link-2">
                    <span className="button__text">Показать все</span>
                </Link>
            </div>
            <ul className="profile-card-section__items">
                {items.map((item, index) => (
                    <li key={index} className="profile-card-section__item">
                        <div className="profile-card-section__item-img"></div>
                        <div className="profile-card-section__item-content">
                            <div className="profile-card-section__item-title">
                                {item.title}
                            </div>
                            <p className="profile-card-section__item-descr">
                                {item.text}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ProfileCardSection;