import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Main.css
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import "react-toastify/dist/ReactToastify.css";
// import './assets/css/reset.css';
import './assets/css/admin.css';
import './assets/css/theme-118407.css';
import './pages/login/login.css';

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('main')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
