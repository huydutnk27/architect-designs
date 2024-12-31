import { lazy } from 'react';

const HomeComponent = lazy(() => import('../../components/Home'));

const Home = () => {
    return (
        <>
            <HomeComponent />
        </>
    )
}
  
export default Home;