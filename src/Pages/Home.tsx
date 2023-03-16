import { useState } from "react";
import { Cards, Cases } from "../Components";
import { PageTop } from "../Components/Layout";
import { CARDS } from "../constants/cards";
import { CASES } from "../constants/cases";

const Home = () => {
    const [cards, setCards] = useState(CARDS);

    return (
        <main className="page__content">
            <PageTop title="Популярные кейсы" />

            <Cases items={CASES} />

            <PageTop items={CARDS} setItems={setCards} title="Топ аккаунтов" search />

            <Cards items={cards} />
        </main>
    );
}

export default Home;