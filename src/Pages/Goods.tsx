import { DonateBlock } from "../Components";
import { PageTop } from "../Components/Layout";
import { Page } from "../interfaces/Route";

const Goods = ({ title }: Page) => {
    return (
        <main className="page__content">
            <PageTop title={title} />
            <DonateBlock />
        </main>
    );
};

export default Goods;