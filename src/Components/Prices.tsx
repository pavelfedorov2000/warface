import classNames from 'classnames';

interface Props {
    price: number;
    className?: string;
}

const Prices = ({ price, className }: Props) => {
    return (
        <div className={classNames('prices', className)}>
           
        </div>
    );
}

export default Prices;