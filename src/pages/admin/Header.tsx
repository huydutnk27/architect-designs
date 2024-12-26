// import { useNavigate } from 'react-router-dom';
import imgLogo from '../../assets/images/logo_1.png';
import { ToastContainer } from "react-toastify";
// import loader from '../assets/images/loader.png';
// Function component using arrow function syntax
const AdminHeaderComponent = () => {
    // const navigate = useNavigate();
    // const navigateToHref = (e: React.MouseEvent<Element, MouseEvent>, link: string) => {
    //     e.preventDefault();
    //     navigate(link);
    // };
    return (
        <>
            <ToastContainer hideProgressBar/>
            {/* <!--=============== header ===============--> */}
            <header className="main-header">
                <div className="scroll-holder">
                    {/* <!-- logo--> */}
                    <div className="logo-holder">
                        <a href="index.html" className="ajax"><img src={imgLogo} alt="" /></a>
                        <p>MAKE YOUR HOME BETTER</p>
                    </div>
                    {/* <!-- logo end --> */}
                    {/* <!-- navigation--> */}
                    <div className="nav-holder">
                        <nav>
                            <ul>
                                <li><a href="index.html" className="ajax act-link">Category</a></li>
                                <li><a href="portfolio.html" className="ajax">SẢN PHẨM</a></li>
                                <li><a href="contact.html" className="ajax">LIÊN HỆ</a></li>
                                <li><a href="blog.html" className="ajax">Blog</a></li>
                                {/* <li> */}
                                    {/* <a href="#nolink">Pages</a> */}
                                    {/* <!-- subnav--> */}
                                    {/* <ul>
                                        <li><a href="about2.html" className="ajax">About minimal</a></li>
                                        <li><a href="category.html" className="ajax">Category</a></li>
                                        <li><a href="team-single.html" className="ajax">Team single</a></li>
                                        <li><a href="blog2.html" className="ajax">Blog classik</a></li>
                                        <li><a href="blog-single.html" className="ajax">Blog single</a></li>
                                        <li><a href="contact2.html" className="ajax">Contact 2</a></li>
                                        <li><a href="404.html" className="ajax">404</a></li>
                                    </ul> */}
                                    {/* <!-- subnav end--> */}
                                {/* </li> */}
                            </ul>
                        </nav>
                    </div>
                    {/* <!-- navigation  end --> */}
                    <span className="close-menu"><i className="fa fa-times" aria-hidden="true"></i></span>
                </div>
                {/* <!--footer--> */}
                <div className="header-footer">
                    &#169; Firenze 2016  /  All rights reserved.
                </div>
                {/* <!-- footer end --> */}
            </header>
            {/* <!-- header end --> */}
            {/* <!-- nav-button-holder end --> */}
            <div className="nav-button-holder">
                <div className="nav-button">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {/* <!-- mobile logo--> */}
                <a className="mob-logo ajax" href="index.html"><img src="images/small-logo.png" alt="" /></a>
            </div>
            {/* <!-- nav-button-holder end --> */}
        </>
    );
};

export default AdminHeaderComponent;
