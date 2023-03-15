import classNames from 'classnames';
import { Link } from 'react-router-dom';


interface Props {
    src: string;
    className?: string;
    width: string | number;
    height: string | number;
}

const Logo = ({ className, src, width, height }: Props) => {
    return (
        <div className={classNames('logo', className && `${className}__logo`)}>
            <Link to="/" className="logo__link">
                <img className={classNames('logo__img', className && `${className}__logo-img`)} src={src} alt="logo" width={width} height={height} />
            </Link>
        </div>
    );
}

export default Logo;