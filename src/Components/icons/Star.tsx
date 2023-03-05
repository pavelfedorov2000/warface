interface Props {
    className?: string;
}

const Star = ({ className }: Props) => {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.0004 3.46379L8.6693 7.57476C8.52184 8.02061 8.10663 8.32291 7.63704 8.32632H3.31781L6.80398 10.8617C7.18314 11.139 7.34341 11.627 7.2024 12.0751L5.87131 16.1861L9.35748 13.6416C9.74281 13.3692 10.258 13.3692 10.6433 13.6416L14.1295 16.1861L12.7984 12.0751C12.6574 11.627 12.8176 11.139 13.1968 10.8617L16.683 8.32632H12.3637C11.8941 8.32291 11.4789 8.02061 11.3315 7.57476L10.0004 3.46379ZM8.96773 0.747308C9.1143 0.301396 9.53062 0 10 0C10.4694 0 10.8857 0.301396 11.0323 0.747308L12.8976 6.51534H18.9192C19.3886 6.51786 19.8033 6.82156 19.9475 7.26833C20.0916 7.7151 19.9325 8.20391 19.553 8.48027L14.6814 12.0208L16.5468 17.7526C16.693 18.2011 16.5331 18.6926 16.1511 18.9693C15.769 19.2461 15.2521 19.2447 14.8716 18.9659L10 15.4164L5.12842 18.9569C4.74922 19.2321 4.23629 19.2333 3.85584 18.9598C3.47538 18.6863 3.31311 18.1997 3.45324 17.7526L5.31857 12.0298L0.446986 8.48027C0.0675146 8.20391 -0.0915729 7.7151 0.0525465 7.26833C0.196666 6.82156 0.611401 6.51786 1.08083 6.51534H7.1024L8.96773 0.747308Z" />
        </svg>
    );
};

export default Star;