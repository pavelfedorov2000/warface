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
}

const Button = ({ href, onClick, className, border, text, type, isDisabled, transparent, icon }: Props) => {
    const content = <>
        {icon ? icon : null}
        <span className="button__text">{text}</span>
    </>;

    return (
        <>
            {href ?
                <Link
                    to={href}
                    className={classNames('button', className, {
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
                    className={classNames('button', className, {
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

//style={cart && { backgroundColor: `${isBasketProduct ? '#479458' : '#ee3333'}` }}