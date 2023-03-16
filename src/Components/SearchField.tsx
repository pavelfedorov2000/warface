import searchIcon from "../assets/images/icons/search.svg";

interface Props {
    setItems?: any;
    items?: any[];
}

const SearchField = ({ items, setItems }: Props) => {
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setItems(items?.filter((item) =>
            item.title.toLowerCase().includes(value.toLowerCase())
            || (item.info && item.info.toLowerCase().includes(value.toLowerCase()))
            || item.price.toLowerCase().includes(value.toLowerCase())
        ));
    }

    return (
        <input onInput={handleSearch} className="search-field" placeholder="Поиск" style={{ backgroundImage: `url(${searchIcon})` }} />
    );
};

export default SearchField;