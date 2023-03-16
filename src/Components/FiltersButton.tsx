import FilterIcon from './icons/FilterIcon';

const FiltersButton = () => {


    return (
        <button className="filters-button" aria-controls="filters" type="button">
            <FilterIcon />
            <span>Фильтры</span>
        </button>
    );
}

export default FiltersButton;