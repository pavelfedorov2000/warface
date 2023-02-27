import { formatDateTime } from "../utils/formatDateTime";

interface Props {
    date?: string;
    className?: string;
}

const DateTime = ({ date, className }: Props) => {
    return (
        <time className="date" dateTime={formatDateTime(date)}>{date}</time>
    );
}

export default DateTime;