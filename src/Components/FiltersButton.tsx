import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const FiltersButton = () => {
    const { isVisible } = useTypedSelector((state) => state.filtersReducer);
    const { openFilters } = useActions();

    return (
        <button onClick={openFilters} className="filters-button" aria-expanded={isVisible ? true : false} aria-controls="filters" type="button">
            <span>Фильтры</span>
        </button>
    );
}

export default FiltersButton;