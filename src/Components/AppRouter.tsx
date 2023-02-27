import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const AppRouter = () => {
    return (
        <Switch>
            {ROUTES.map((route) => (
                <Route
                    key={route.id}
                    exact={route.exact === true ? true : false}
                    path={route.path}
                    render={() => <route.component {...route} />}
                />
            ))}
        </Switch>
    );
}

export default AppRouter;

// <Redirect to={ROUTES[ROUTES.length - 1].path} />