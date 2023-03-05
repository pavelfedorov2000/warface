import { phone } from '../constants/phone';
import { formatPhone } from '../utils/formatPhone';

interface Props {
    className?: string;
}

const Phone = ({ className }: Props) => {
    return (
        <a href={`tel:${formatPhone(phone)}`} className={className}>
            <span>{phone}</span>
        </a>
    );
}

export default Phone;