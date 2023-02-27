import { Link } from 'react-router-dom';
import { Pages } from '../../enums/Page';

interface Props {
    title?: string;
}

const Crumbs = ({ title }: Props) => {
    return (
        <nav className="breadcrumbs" aria-label="breadcrumbs">
            <ol className="breadcrumbs__list">
                <li className="breadcrumbs__item"><Link to="/">Главная</Link></li>

                <li className="breadcrumbs__item"><span>{title}</span></li>
            </ol>
        </nav>
    );
}

export default Crumbs;