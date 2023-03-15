import BackButton from "../BackButton";
import SearchField from "../SearchField";
import Title from "../Title";

interface Props {
    title: string;
    search?: boolean;
    titleLineColor?: string;
    text?: string;
}

const PageTop = ({ title, search, titleLineColor, text }: Props) => {
    return (
        <div className="page-top">
            <BackButton />
            <Title text={title} lineColor={titleLineColor} />
            {search && <SearchField />}
            {text && <p>{text}</p>}
        </div>
    );
};

export default PageTop;