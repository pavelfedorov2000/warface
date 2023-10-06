import { Link } from 'react-router-dom';
import { Pages } from '../../enums/Page';
import { ClassName } from '../../enums/ClassName';

const mainClass = ClassName.Crumbs;

const Crumbs = ({ title }: { title?: string; }) => {
    return (
        <nav className={mainClass} aria-label="breadcrumbs">
            <ol className={`${mainClass}__list`}>
                <li className={`${mainClass}__item`}><Link to="/">Главная</Link></li>

                <li className={`${mainClass}__item`}><span>{title}</span></li>
            </ol>
        </nav>
    );
}

export default Crumbs;