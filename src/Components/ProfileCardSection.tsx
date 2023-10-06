import { Link } from "react-router-dom";

interface Props {
    title: string;
    link: string;
    items: any[];
    Card: any;
}

const mainClass = 'profile-card-section';

const ProfileCardSection = ({ title, link, items, Card }: Props) => {
    return (
        <section className={mainClass}>
            <div className={`${mainClass}__top`}>
                <h2 className={`${mainClass}__title`}>{title}</h2>
                <Link to={`/${link}`} className="button button--style_link-2">
                    <span className="button__text">Показать все</span>
                </Link>
            </div>
            <ul className={`${mainClass}__items`}>
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