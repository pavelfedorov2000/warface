import { Link } from "react-router-dom";

interface Props {
    title: string;
    link: string;
    items: any[];
    Card: any;
}

const ProfileCardSection = ({ title, link, items, Card }: Props) => {
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
                    <li key={index}>
                        <Card style="row" {...item} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ProfileCardSection;