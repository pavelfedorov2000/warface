import { BottomSidebar, SidebarStatus } from './Components';
import AppRouter from './Components/AppRouter';
import { Header, Sidebar } from './Components/Layout';
import Toolbar from './Components/Layout/Toolbar';

const App = () => {
    return (
        <div className='wrapper'>
            <Sidebar />
            <Toolbar />
            <div className="page">
                <Header />
                <SidebarStatus />
                <AppRouter />
                <BottomSidebar />
            </div>
        </div>
    );
}

export default App;
