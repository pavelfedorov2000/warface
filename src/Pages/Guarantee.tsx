import { Benefits, GuaranteeBlock } from "../Components";
import { PageTop } from "../Components/Layout";
import { Page } from "../interfaces/Route";

const Guarantee = ({ title }: Page) => {
    return (
        <main className="page__content page__content page__content--w-1070">
            <section>
                <PageTop title={title} />
                <GuaranteeBlock />
            </section>
            <Benefits />
        </main>
    );
};

export default Guarantee;