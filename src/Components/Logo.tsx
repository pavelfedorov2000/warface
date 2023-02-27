import classNames from 'classnames';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.svg';

interface Props {
    className?: string;
    width: string | number;
    height: string | number;
}

const Logo = ({ className, width, height }: Props) => {
    return (
        <div className={classNames('logo', className && `${className}__logo`)}>
            <Link to="/" className="logo__link">
                <img className={classNames('logo__img', className && `${className}__logo-img`)} src={logo} alt="logo" width={width} height={height} />
            </Link>
        </div>
    );
}

export default Logo;