import { DefinitionListItem } from "../interfaces/DefinitionList";

interface Props {
    items: DefinitionListItem[];
}

const ProfileInfoList = ({ items }: Props) => {
    return (
        <dl className="profile-info-list">
            {items.map((item, index) => (
                <div key={index} className="profile-info-list__item">
                    <dt>{item.property}</dt>
                    <dd>{item.value}</dd>
                </div>
            ))}
        </dl>
    );
};

export default ProfileInfoList;