
import { useEffect } from 'react';
import { Routes } from './routes';

// Create the function
async function AddLibrary(urlOfTheLibrary: string) {
    const script = document.createElement("script");
    script.src = urlOfTheLibrary;
    script.type = 'text/javascript';
    script.async = false;
    script.defer = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
}

function App() {
    useEffect(() => {
        const loadScript = async() => {
            await AddLibrary('./assets/js/jquery.min.js');
            await AddLibrary('./assets/js/plugins.js');
            await AddLibrary('./assets/js/core.js');
            await AddLibrary('./assets/js/scripts.js');
        }
        loadScript();
        return () => {};
      }, []);
    
    return (
        <>
            <Routes isAuthorized={true} />
            {/* <HelmetProvider context={helmetContext}>
                <Helmet>
                    <script defer src="/src/assets/js/jquery.min.js" type="text/javascript"/>
                    <script defer src="/src/assets/js/plugins.js" type="text/javascript"></script>
                    <script defer src="/src/assets/js/core.js" type="text/javascript"></script>
                    <script defer src="/src/assets/js/scripts.js" type="text/javascript"></script>
                </Helmet>
            </HelmetProvider> */}
        </>
        
    ) 
}

export default App;
