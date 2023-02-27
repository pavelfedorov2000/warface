import AppRouter from './Components/AppRouter';
import { Footer, Header, Sidebar } from './Components/Layout';

const App = () => {
    return (
        <div className='wrapper'>
            <Sidebar />
            <div className="page">
                <Header />
                <AppRouter />
            </div>
        </div>
    );
}

export default App;
