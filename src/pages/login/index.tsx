import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import axios from 'axios';

// Async function to fetch category data by id
const initData = async () => {
    return await axios.post('/api/initialData', {
        params: {}
    });
};

const Login = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement login logic (e.g., call login method from AuthContext)
        // login(username, password);
        initData().then((response) => {
            console.log(response);
        });
    };

    return (
        <>
            <div id="login-form">
                <div className="form-bg">
                    <div className="row">
                        <div className="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6">
                            <div className="form-container">
                                <form className="form-horizontal">
                                    <h3 className="title">Login Form</h3>
                                    <div className="form-group">
                                        <span className="input-icon"><i className="fa fa-user"></i></span>
                                        <input className="form-control" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <span className="input-icon"><i className="fa fa-lock"></i></span>
                                        <input className="form-control" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                    <button type="button" className="btn signin" onClick={handleLogin}>Log in</button>
                                    <span className="forgot-pass"><a href="#">Lost password?</a></span>
                                    <span className="register"><a href="#">Register / Signup</a></span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;