const Login = () => {
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
                                        <input className="form-control" type="email" placeholder="Username" />
                                    </div>
                                    <div className="form-group">
                                        <span className="input-icon"><i className="fa fa-lock"></i></span>
                                        <input className="form-control" type="password" placeholder="Password" />
                                    </div>
                                    <button className="btn signin">Log in</button>
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