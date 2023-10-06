import { ButtonType } from '../enums/ButtonType';
import { Id } from '../enums/Id';
import FilterIcon from './icons/FilterIcon';

const FiltersButton = () => {
    return (
        <button className="filters-button" aria-controls={Id.Filters} type={ButtonType.Button}>
            <FilterIcon />
            <span>Фильтры</span>
        </button>
    );
}

export default FiltersButton;