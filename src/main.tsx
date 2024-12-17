import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Main.css
import './assets/css/reset.css';
import './assets/css/plugins.css';
import './assets/css/style.css';
import './assets/css/yourstyle.css';
import './pages/Login/login.css';

import App from './App.tsx'
// import ContextProvider from './context/context-provider.tsx';

ReactDOM.createRoot(document.getElementById('main')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
