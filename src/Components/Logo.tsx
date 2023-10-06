import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { WithClassName } from '../types/types';

interface Props {
    src: string;
    width: number;
    height: number;
}

const Logo = ({ className, src, width, height }: Props & WithClassName) => {
    return (
        <div className={classNames('logo', className && `${className}__logo`)}>
            <Link to="/" className="logo__link">
                <img className={classNames('logo__img', className && `${className}__logo-img`)} src={src} alt="logo" width={width} height={height} />
            </Link>
        </div>
    );
}

export default Logo;