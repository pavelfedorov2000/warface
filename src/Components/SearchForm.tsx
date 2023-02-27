import classNames from 'classnames';

const SearchForm = () => {
    return (
        <form action="#" className="search-form">
            <input className={classNames('search-form__input')} placeholder="Введите фразу для поиска, например, платье" />
        </form>
    );
}

export default SearchForm;

// style={{ backgroundImage: `url(${search})` }}