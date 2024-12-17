// import { useNavigate } from 'react-router-dom';
import imgLogo from '../assets/images/logo.png';
// import loader from '../assets/images/loader.png';
// Function component using arrow function syntax
const HeaderComponent = () => {
    // const navigate = useNavigate();
    // const navigateToHref = (e: React.MouseEvent<Element, MouseEvent>, link: string) => {
    //     e.preventDefault();
    //     navigate(link);
    // };
    return (
        <>
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
                                <li>
                                    <a href="index.html" className="ajax act-link">Home</a>
                                    {/* <!-- subnav--> */}
                                    <ul>
                                        <li><a href="index2.html" className="ajax">Slideshow</a></li>
                                        <li><a href="index3.html" className="ajax">Multi slideshow</a></li>
                                        <li><a href="index4.html" className="ajax">Image</a></li>
                                        <li><a href="index5.html" className="ajax">Carousel</a></li>
                                        <li><a href="index6.html" className="ajax">Video</a></li>
                                    </ul>
                                    {/* <!-- subnav end--> */}
                                </li>
                                <li>
                                    <a href="portfolio.html" className="ajax">Projects</a>
                                    {/* <!-- subnav--> */}
                                    <ul>
                                        <li><a href="portfolio2.html" className="ajax">Style 2</a></li>
                                        <li><a href="portfolio3.html" className="ajax">Style 3</a></li>
                                        <li><a href="portfolio-single.html" className="ajax">Portfolio single 1</a></li>
                                        <li><a href="portfolio-single2.html" className="ajax">Portfolio single 2</a></li>
                                        <li><a href="portfolio-single3.html" className="ajax">Portfolio single 3</a></li>
                                        <li><a href="portfolio-single4.html" className="ajax">Portfolio single 4</a></li>
                                        <li><a href="portfolio-single5.html" className="ajax">Portfolio single 5</a></li>
                                        <li><a href="portfolio-single6.html" className="ajax">Portfolio single 6</a></li>
                                    </ul>
                                    {/* <!-- subnav end--> */}
                                </li>
                                <li>
                                    <a href="about.html" className="ajax">About us </a>
                                    {/* <!-- subnav --> */}
                                    <ul>
                                        <li><a href="about.html#sec1" className="ajax custom-scroll-link">About us </a></li>
                                        <li><a href="about.html#sec2" className="ajax custom-scroll-link">Team</a></li>
                                        <li><a href="about.html#sec3" className="ajax custom-scroll-link">Story </a></li>
                                        <li><a href="about.html#sec4" className="ajax custom-scroll-link">Services</a></li>
                                    </ul>
                                    {/* <!-- subnav end--> */}
                                </li>
                                <li><a href="contact.html" className="ajax">Contact</a></li>
                                <li><a href="blog.html" className="ajax">Blog</a></li>
                                <li>
                                    <a href="#nolink">Pages</a>
                                    {/* <!-- subnav--> */}
                                    <ul>
                                        <li><a href="about2.html" className="ajax">About minimal</a></li>
                                        <li><a href="category.html" className="ajax">Category</a></li>
                                        <li><a href="team-single.html" className="ajax">Team single</a></li>
                                        <li><a href="blog2.html" className="ajax">Blog classik</a></li>
                                        <li><a href="blog-single.html" className="ajax">Blog single</a></li>
                                        <li><a href="contact2.html" className="ajax">Contact 2</a></li>
                                        <li><a href="404.html" className="ajax">404</a></li>
                                    </ul>
                                    {/* <!-- subnav end--> */}
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* <!-- navigation  end --> */}
                    {/* <!-- header-widget--> */}
                    <div className="header-widget">
                        <h3>Contact info</h3>
                        <ul className="header-contacts">
                            <li><span>Adress</span><a href="#nolink">27th Brooklyn New York, NY 10065</a></li>
                            <li><span>Call</span><a href="#nolink">+3 (123) 8976541</a></li>
                            <li><span>Write</span><a href="#nolink">yourmail@domain.com</a></li>
                        </ul>
                    </div>
                    {/* <!-- header-widget end --> */}
                    {/* <!-- header-widget--> */}
                    <div className="header-widget">
                        <h3>Find us</h3>
                        <ul className="header-social">
                            <li><a href="#nolink" target="_blank" ><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#nolink" target="_blank"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#nolink" target="_blank" ><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#nolink" target="_blank" ><i className="fa fa-pinterest"></i></a></li>
                            <li><a href="#nolink" target="_blank" ><i className="fa fa-tumblr"></i></a></li>
                        </ul>
                    </div>
                    {/* <!-- header-widget end --> */}
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

export default HeaderComponent;
