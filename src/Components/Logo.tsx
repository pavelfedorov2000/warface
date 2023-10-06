import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { WithClassName } from '../types/types';
import Image from './Image';

interface Props {
    src: string;
    width: number;
    height: number;
}

const mainClass = 'logo';

const Logo = ({ className, src, width, height }: Props & WithClassName) => {
    return (
        <div className={classNames(mainClass, `${className}__logo`)}>
            <Link to="/" className={`${mainClass}__link`}>
                <Image className={classNames(`${mainClass}__img`, className && `${className}__${mainClass}-img`)} src={src} alt="logo" width={width} height={height} />
            </Link>
        </div>
    );
}

export default Logo;