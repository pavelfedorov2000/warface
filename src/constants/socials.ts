import { instagram, vk, facebook, youtube, tiktok, google } from '../Components/Socials';
import { SocialList } from '../enums/Social';
import { Social as SocialType } from '../interfaces/Social';

export const SOCIALS: SocialType[] = [{
    name: SocialList.Google,
    svg: google,
    link: {
        href: 'https://www.google.com/'
    },
}, {
    name: SocialList.Instagram,
    svg: instagram,
    link: {
        href: 'https://www.instagram.com/'
    },
}, {
    name: SocialList.Vk,
    svg: vk,
    link: {
        href: 'https://vk.com/'
    },
}, {
    name: SocialList.Facebook,
    svg: facebook,
    link: {
        href: 'https://www.facebook.com/'
    },
}, {
    name: SocialList.Youtube,
    svg: youtube,
    link: {
        href: 'https://www.youtube.com/'
    },
}, {
    name: SocialList.Tiktok,
    svg: tiktok,
    link: {
        href: 'https://www.tiktok.com/'
    },
}];