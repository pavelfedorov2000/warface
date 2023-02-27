import classNames from 'classnames';
import { SOCIALS } from '../constants/socials';

interface Props {
    className?: string;
}

const Social = ({ className }: Props) => {
    return (
        <ul className={classNames('social', className)}>
            {SOCIALS.map((social) => (
                <li key={social.name} className={classNames('social__item')}>
                    <a className="social__link" href={social.link.href} target="_blank" rel="nofollow">
                        <social.svg />
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Social;