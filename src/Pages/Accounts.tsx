import { Card } from "../Components";
import Filters from "../Components/Filters";
import PageTop from "../Components/Layout/PageTop";
import { ACCOUNTS } from "../constants/accounts";
import { Page } from "../interfaces/Route";

const Accounts = ({ title }: Page) => {
    return (
        <main className="page__content accounts">
            <PageTop title={title} search />

            <div className="accounts__grid">
                <Filters />
                <div className="accounts__cards">
                    {ACCOUNTS.map((account) => (
                        <Card key={account.id} {...account} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Accounts;