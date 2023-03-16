import { useState, useEffect } from "react";
import { Button, Card } from "../Components";
import Filters from "../Components/Filters";
import FilterIcon from "../Components/icons/FilterIcon";
import PageTop from "../Components/Layout/PageTop";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Page } from "../interfaces/Route";

const Accounts = ({ title }: Page) => {
    const { openFilters } = useActions();
    const { items } = useTypedSelector((state) => state.filtersReducer);

    const [accounts, setAccounts] = useState(items);

    const handleOpenFilters = () => {
        document.body.classList.add('_lock');
        openFilters();
    }

    useEffect(() => {
        setAccounts(items);
    }, [items]);

    return (
        <main className="page__content accounts">
            <PageTop items={accounts} setItems={setAccounts} title={title} search />

            <div className="accounts__grid">
                <Button onClick={handleOpenFilters} className="filters-button" bg="purple" icon={<FilterIcon />} text="Фильтры" ariaControls="filters" />
                <Filters />
                {accounts.length > 0 ?
                    <div className="accounts__cards">
                        {accounts.map((account) => (
                            <Card key={account.id} {...account} />
                        ))}
                    </div>
                    :
                    <div className="accounts__empty">Нет аккаунтов, удовлетворяющих параметрам фильтрации!</div>
                }
            </div>
        </main>
    );
};

export default Accounts;