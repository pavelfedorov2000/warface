import { AchievementCard } from '../Components';
import { PageTop } from '../Components/Layout';
import { ACHIEVEMENTS } from '../constants/achievements';
import { Page } from '../interfaces/Route';

const Achievements = ({ title }: Page) => {
    return (
        <main className="page__content page__content--w-1175">
            <PageTop title={title} />

            <ul className="achievements-list">
                {ACHIEVEMENTS.map((item, index) => (
                    <li key={index}>
                        <AchievementCard {...item} />
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Achievements;