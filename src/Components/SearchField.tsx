import searchIcon from "../assets/images/icons/search.svg";

const SearchField = () => {
    return (
        <input className="search-field" placeholder="Поиск" style={{ backgroundImage: `url(${searchIcon})` }} />
    );
};

export default SearchField;