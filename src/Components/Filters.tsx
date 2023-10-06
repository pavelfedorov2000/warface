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
import { ClassName } from "../enums/ClassName";
import { Id } from "../enums/Id";
import { ButtonType } from "../enums/ButtonType";
import { Color } from "../enums/Color";

const mainClass = 'filters';

const Filters = () => {
    const { isVisible, price, runk, donate, server, sellerStatus } = useTypedSelector((state) => state.filtersReducer);
    const { closeFilters, submitFilters, resetFilters, setFilterPrice, setFilterRunk, setFilterDonate, setFilterServer, setSellerStatus } = useActions();

    const handleClose = () => {
        document.body.classList.remove(ClassName.Lock);
        closeFilters();
    }

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        document.body.classList.remove(ClassName.Lock);
        submitFilters();
    }

    const handleReset = () => {
        document.body.classList.remove(ClassName.Lock);
        resetFilters();
    }

    return (
        <form onSubmit={handleSubmit} id={Id.Filters} className={classNames(mainClass, {
            [ClassName.Active]: isVisible
        })}>
            <CloseButton onClick={handleClose} className={`${mainClass}__close`} ariaLabel="Закрыть фильтры" />
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
                <RangeSlider onChange={setFilterRunk} color={Color.Green} max={100} start={runk} />
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
            <div className={`${mainClass}__btns`}>
                <Button className={`${mainClass}__btn`} bg={Color.Purple} icon={<FilterIcon />} text="Применить фильтр" type={ButtonType.Submit} />
                <Button onClick={handleReset} className={`${mainClass}__btn`} bg="gray" icon={<ResetIcon />} text="Сбросить фильтр" type={ButtonType.Reset} />
            </div>
        </form>
    );
};

export default Filters;