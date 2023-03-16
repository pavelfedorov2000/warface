import BackButton from "../BackButton";
import SearchField from "../SearchField";
import Title from "../Title";

interface Props {
    title: string;
    search?: boolean;
    titleLineColor?: string;
    text?: string;
    items?: any[];
    setItems?: any;
}

const PageTop = ({ title, search, titleLineColor, text, items, setItems }: Props) => {
    return (
        <div className="page-top">
            <BackButton />
            <Title text={title} lineColor={titleLineColor} />
            {search && <SearchField items={items} setItems={setItems} />}
            {text && <p>{text}</p>}
        </div>
    );
};

export default PageTop;