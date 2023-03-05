import { SERVERS } from "../constants/servers";
import { OnlineStatus } from "../enums/OnlineStatus";
import Button from "./Button";
import FilterIcon from "./icons/FilterIcon";
import ResetIcon from "./icons/ResetIcon";
import RadioButton from "./RadioButton";
import RangeSlider from "./RangeSlider";

const Filters = () => {
    return (
        <form action="#" className="filters">
            <fieldset className="filters__item filter">
                <legend className="filter__title">Цена</legend>
                <RangeSlider max={20000} start={[895, 15895]} />
            </fieldset>
            <fieldset className="filters__item filter">
                <legend className="filter__title">Сервер</legend>
                <div className="filter__row-radios">
                    {SERVERS.map((server, index) => (
                        <RadioButton key={index} name="server" text={server} />
                    ))}
                </div>
            </fieldset>
            <fieldset className="filters__item filter">
                <legend className="filter__title">Ранг</legend>
                <RangeSlider color="green" max={100} start={[5, 99]} />
            </fieldset>
            <fieldset className="filters__item filter">
                <legend className="filter__title">Тип аккаунта</legend>
            </fieldset>
            <fieldset className="filters__item filter">
                <legend className="filter__title">Количество доната</legend>
                <RangeSlider max={15000} start={[50, 10000]} />
            </fieldset>
            <fieldset className="filters__item filter">
                <legend className="filter__title">Продавец</legend>
                <div className="filter__col-radios">
                    {Object.values(OnlineStatus).map((status, index) => (
                        <RadioButton key={index} style="check" name="seller_status" text={status} />
                    ))}
                </div>
            </fieldset>
            <div className="filters__btns">
                <Button className="filters__btn" bg="purple" icon={<FilterIcon />} text="Применить фильтр" type="submit" />
                <Button className="filters__btn" bg="gray" icon={<ResetIcon />} text="Сбросить фильтр" type="reset" />
            </div>
        </form>
    );
};

export default Filters;