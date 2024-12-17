// import FooterComponent from './Footer';
import HeaderComponent from '../components/Header';
import { Outlet } from 'react-router-dom';

// Function component using arrow function syntax
const LayoutComponent = () => {
    return (
        <>
            <HeaderComponent />
            <Outlet />
        </>
    );
};

export default LayoutComponent;
