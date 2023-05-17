import { Outlet } from 'react-router-dom';
import Navbar from '../Pagess/Shared/Navbar/Navbar';
import Footer from '../Pagess/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;