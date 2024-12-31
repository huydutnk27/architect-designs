import FooterComponent from '../components/Footer';
import HeaderComponent from '../components/Header';
import { Outlet } from 'react-router-dom';

// Function component using arrow function syntax
const LayoutComponent = () => {
    return (
        <>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </>
    );
};

export default LayoutComponent;
