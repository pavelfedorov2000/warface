import { useState, useEffect } from "react";
import { Button, Card } from "../Components";
import Filters from "../Components/Filters";
import FilterIcon from "../Components/icons/FilterIcon";
import PageTop from "../Components/Layout/PageTop";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Page } from "../interfaces/Route";
import { ClassName } from "../enums/ClassName";

const mainClass = 'accounts';

const Accounts = ({ title }: Page) => {
    const { openFilters } = useActions();
    const { items } = useTypedSelector((state) => state.filtersReducer);

    const [accounts, setAccounts] = useState(items);

    const handleOpenFilters = () => {
        document.body.classList.add(ClassName.Lock);
        openFilters();
    }

    useEffect(() => {
        setAccounts(items);
    }, [items]);

    return (
        <main className={`${mainClass} ${ClassName.Page}__content`}>
            <PageTop items={accounts} setItems={setAccounts} title={title} search />

            <div className={`${mainClass}__grid`}>
                <Button onClick={handleOpenFilters} className="filters-button" bg="purple" icon={<FilterIcon />} text="Фильтры" ariaControls="filters" />
                <Filters />
                {accounts.length > 0 ?
                    <div className={`${mainClass}__cards`}>
                        {accounts.map((account) => (
                            <Card key={account.id} {...account} />
                        ))}
                    </div>
                    :
                    <div className={`${mainClass}__empty`}>Нет аккаунтов, удовлетворяющих параметрам фильтрации!</div>
                }
            </div>
        </main>
    );
};

export default Accounts;