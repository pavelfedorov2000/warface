import { OnlineStatus } from "../enums/OnlineStatus";
import Button from "./Button";
import CloseButton from "./CloseButton";
import FilterIcon from "./icons/FilterIcon";
import ResetIcon from "./icons/ResetIcon";
import RadioButton from "./RadioButton";
import RangeSlider from "./RangeSlider";
import { useTypedSelector } from '../hooks/useTypedSelector';
import classNames from "classnames";
import { useActions } from "../hooks/useActions";
import { Server } from "../enums/Server";

const Filters = () => {
    const { isVisible, price, runk, donate, server, sellerStatus } = useTypedSelector((state) => state.filtersReducer);
    const { closeFilters, submitFilters, resetFilters, setFilterPrice, setFilterRunk, setFilterDonate, setFilterServer, setSellerStatus } = useActions();

    const handleClose = () => {
        document.body.classList.remove('_lock');
        closeFilters();
    }

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        document.body.classList.remove('_lock');
        submitFilters();
    }

    const handleReset = () => {
        document.body.classList.remove('_lock');
        resetFilters();
    }

    return (
        <form onSubmit={handleSubmit} id="filters" className={classNames('filters', {
            'active': isVisible
        })}>
            <CloseButton onClick={handleClose} className="filters__close" ariaLabel="Закрыть фильтры" />
            <fieldset className="filters__item filter">
                <legend className="filter__title">Цена</legend>
                <RangeSlider onChange={setFilterPrice} max={20000} start={price} />
            </fieldset>
            <fieldset className="filters__item filter">
                <legend className="filter__title">Сервер</legend>
                <div className="filter__row-radios">
                    {Object.entries(Server).map((item, index) => (
                        <RadioButton key={index} onChange={setFilterServer} name="server" value={item[1]} text={item[1]} isChecked={item[1] === server} />
                    ))}
                </div>
            </fieldset>
            <fieldset className="filters__item filter">
                <legend className="filter__title">Ранг</legend>
                <RangeSlider onChange={setFilterRunk} color="green" max={100} start={runk} />
            </fieldset>
            <fieldset className="filters__item filter">
                <legend className="filter__title">Количество доната</legend>
                <RangeSlider onChange={setFilterDonate} max={15000} start={donate} />
            </fieldset>
            <fieldset className="filters__item filter">
                <legend className="filter__title">Продавец</legend>
                <div className="filter__col-radios">
                    {Object.values(OnlineStatus).map((status, index) => (
                        <RadioButton key={index} onChange={setSellerStatus} style="check" name="seller_status" value={status} text={status} isChecked={status === sellerStatus} />
                    ))}
                </div>
            </fieldset>
            <div className="filters__btns">
                <Button className="filters__btn" bg="purple" icon={<FilterIcon />} text="Применить фильтр" type="submit" />
                <Button onClick={handleReset} className="filters__btn" bg="gray" icon={<ResetIcon />} text="Сбросить фильтр" type="reset" />
            </div>
        </form>
    );
};

export default Filters;