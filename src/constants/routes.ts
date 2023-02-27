import { Route } from '../interfaces/Route';
import { Pages } from '../enums/Page';

export const ROUTES: Route[] = [
    ...Pages.main.map((route) => route[Object.keys(route)[0]]),
    ...Pages.profile.map((route) => route[Object.keys(route)[0]])
];