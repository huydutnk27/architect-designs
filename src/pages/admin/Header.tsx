import { useNavigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

// Function component using arrow function syntax
const AdminHeaderComponent = () => {
    const navigation = useNavigate();

    /**
     * Redirect to setting section of admin page
     * @param section: string
     */
    const navigateTo = (section: string) => {
        const params = {_section: section};
        navigation('/admin/home', {replace: true, state: params});
        navigation(0);
    };

    return (
        <>
            <ToastContainer hideProgressBar/>
            {/* <!--=============== header ===============--> */}
            <div className="admin-container">
                <nav>
                        <ul className="mcd-menu">
                            <li>
                                <a href="" className="active">
                                    <i className="fa fa-home"></i>
                                    <strong>Home</strong>
                                    <small>setting home</small>
                                </a>
                                <ul>
                                    <li><a href="javascript:void(0)" onClick={() => navigateTo('slider')}><i className="fa fa-globe"></i>Slider Setting</a></li>
                                    <li><a href="javascript:void(0)" onClick={() => navigateTo('header_image')}><i className="fa fa-trophy"></i>Header Image</a></li>
                                    <li><a href="javascript:void(0)" onClick={() => navigateTo('new_product')}><i className="fa fa-certificate"></i>New Arrivals</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa fa-edit"></i>
                                    <strong>About us</strong>
                                    <small>sweet home</small>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa fa-gift"></i>
                                    <strong>Features</strong>
                                    <small>sweet home</small>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa fa-globe"></i>
                                    <strong>News</strong>
                                    <small>sweet home</small>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa fa-comments-o"></i>
                                    <strong>Blog</strong>
                                    <small>what they say</small>
                                </a>
                                <ul>
                                    <li><a href="#"><i className="fa fa-globe"></i>Mission</a></li>
                                    <li>
                                        <a href="#"><i className="fa fa-group"></i>Our Team</a>
                                        <ul>
                                            <li><a href="#"><i className="fa fa-female"></i>Leyla Sparks</a></li>
                                            <li>
                                                <a href="#"><i className="fa fa-male"></i>Gleb Ismailov</a>
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-leaf"></i>About</a></li>
                                                    <li><a href="#"><i className="fa fa-tasks"></i>Skills</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#"><i className="fa fa-female"></i>Viktoria Gibbers</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#"><i className="fa fa-trophy"></i>Rewards</a></li>
                                    <li><a href="#"><i className="fa fa-certificate"></i>Certificates</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa fa-picture-o"></i>
                                    <strong>Portfolio</strong>
                                    <small>sweet home</small>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa fa-envelope-o"></i>
                                    <strong>Contacts</strong>
                                    <small>drop a line</small>
                                </a>
                            </li>
                            <li className="float">
                                <a className="search">
                                    <input type="text" value="search ..." />
                                    <button><i className="fa fa-search"></i></button>
                                </a>
                                <a href="" className="search-mobile">
                                    <i className="fa fa-search"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
        </>
    );
};

export default AdminHeaderComponent;
