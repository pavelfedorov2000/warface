import { DefinitionList } from "./DefinitionList";
import { ProfileRating } from "./ProfileRating";
import { Tab } from "./Tab";

export interface ProfileInfo {
    list: DefinitionList;
    rating: ProfileRating;
    tabs: {
        items: Tab[]
    }
}