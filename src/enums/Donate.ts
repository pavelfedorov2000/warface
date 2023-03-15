
import attacker from "../assets/images/icons/attacker.png";
import medic from "../assets/images/icons/medic.png";
import engineer from "../assets/images/icons/engineer.png";
import sniper from "../assets/images/icons/sniper.png";

export enum DonateCategory {
    All = 'all',
    Attacker = 'attacker',
    Medic = 'medic',
    Engineer = 'engineer',
    Sniper = 'sniper',
}

export const DONATE_CATEGORIES = [{
    [DonateCategory.All]: {
        text: 'Все'
    }
}, {
    [DonateCategory.Attacker]: {
        text: 'Штурмовик',
        icon: attacker
    }
}, {
    [DonateCategory.Engineer]: {
        text: 'Инженер',
        icon: engineer
    }
}, {
    [DonateCategory.Medic]: {
        text: 'Медик',
        icon: medic
    }
}, {
    [DonateCategory.Sniper]: {
        text: 'Снайпер',
        icon: sniper
    }
}];