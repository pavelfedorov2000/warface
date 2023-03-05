import BackButton from "../BackButton";
import SearchField from "../SearchField";
import Title from "../Title";

interface Props {
    title: string;
    search?: boolean;
}

const PageTop = ({ title, search }: Props) => {
    return (
        <div className="page-top">
            <BackButton />
            <Title text={title} />
            {search && <SearchField />}
        </div>
    );
};

export default PageTop;