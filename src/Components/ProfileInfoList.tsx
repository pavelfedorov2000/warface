import { DefinitionListItem } from "../interfaces/DefinitionList";

const mainClass = 'profile-info-list';

const ProfileInfoList = ({ items }: { items: DefinitionListItem[]; }) => {
    return (
        <dl className={mainClass}>
            {items.map((item, index) => (
                <div key={index} className={`${mainClass}__item`}>
                    <dt>{item.property}</dt>
                    <dd>{item.value}</dd>
                </div>
            ))}
        </dl>
    );
};

export default ProfileInfoList;