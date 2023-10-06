import classNames from 'classnames';
import { WithClassName } from '../types/types';

const Prices = ({ price, className }: { price: number; } & WithClassName) => {
    return (
        <div className={classNames('prices', className)}>

        </div>
    );
}

export default Prices;