import classNames from 'classnames';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    onClick?: () => void;
    href?: string;
    className?: string;
    border?: boolean;
    text?: string;
    type?: 'button' | 'submit' | 'reset';
    isDisabled?: boolean;
    icon?: ReactNode;
    transparent?: boolean;
    style?: string;
    bg?: string;
}

const Button = ({ href, onClick, className, border, text, type, isDisabled, transparent, icon, style, bg }: Props) => {
    const content = <>
        {icon ? icon : null}
        <span className="button__text">{text}</span>
    </>;

    return (
        <>
            {href ?
                <Link
                    to={href}
                    className={classNames('button', className, style && `button--style_${style}`, bg && `button--style_bg-${bg}`, {
                        'button--border': border,
                        'button--transparent': transparent,
                    })}>
                    {content}
                </Link>
                :
                <button
                    onClick={onClick}
                    disabled={isDisabled}
                    type={type || 'button'}
                    className={classNames('button', className, style && `button--style_${style}`, bg && `button--style_bg-${bg}`, {
                        'button--border': border,
                        'button--transparent': transparent,
                    })}>
                    {content}
                </button>
            }
        </>
    );
}

export default Button;