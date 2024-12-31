//Function component using arrow function syntax
import logo from '../assets/img/footer/logo_ft.png';
import footer_img_1 from '../assets/img/m/1-field_manufacture.jpg';
import footer_img_2 from '../assets/img/m/2-field_manufacture.jpg';
import footer_img_3 from '../assets/img/m/3-field_manufacture.jpg';
import footer_img_4 from '../assets/img/m/4-field_manufacture.jpg';
import footer_img_5 from '../assets/img/m/5-field_manufacture.jpg';
import footer_img_6 from '../assets/img/m/6-field_manufacture.jpg';
import footer_img_7 from '../assets/img/m/7-field_manufacture.jpg';
import footer_img_8 from '../assets/img/footer/payment_footer.png';


const FooterComponent = () => {
    return (
        // <!--<< Footer Section Start >>-->
        <footer id="footer">
            <div className="Brands-block-slider">
                <div className="container">
                    <div id="fieldbrandslider" className="block title_center horizontal_mode">
                        <h4 className="title_block title_font"><a className="title_text" href="https://demo.fieldthemes.com/decor/home3/en/brands">Our brands</a></h4>
                        <div className="row">
                            <div id="fieldbrandslider-manufacturers" className="grid carousel-grid owl-carousel">
                                <div className="item">
                                    <a className="img-wrapper" href="https://demo.fieldthemes.com/decor/home3/en/1_brand1" title="brand1">
                                        <img className="img-responsive" src={footer_img_1} alt="brand1" width="169" height="92" />
                                    </a>
                                </div>
                                <div className="item">
                                    <a className="img-wrapper" href="https://demo.fieldthemes.com/decor/home3/en/2_brand2" title="brand2">
                                        <img className="img-responsive" src={footer_img_2} alt="brand2" width="169" height="92" />
                                    </a>
                                </div>
                                <div className="item">
                                    <a className="img-wrapper" href="https://demo.fieldthemes.com/decor/home3/en/3_brand3" title="brand3">
                                        <img className="img-responsive" src={footer_img_3} alt="brand3" width="169" height="92" />
                                    </a>
                                </div>
                                <div className="item">
                                    <a className="img-wrapper" href="https://demo.fieldthemes.com/decor/home3/en/4_brand4" title="brand4">
                                        <img className="img-responsive" src={footer_img_4} alt="brand4" width="169" height="92" />
                                    </a>
                                </div>
                                <div className="item">
                                    <a className="img-wrapper" href="https://demo.fieldthemes.com/decor/home3/en/5_brand5" title="brand5">
                                        <img className="img-responsive" src={footer_img_5} alt="brand5" width="169" height="92" />
                                    </a>
                                </div>
                                <div className="item">
                                    <a className="img-wrapper" href="https://demo.fieldthemes.com/decor/home3/en/6_brand6" title="brand6">
                                        <img className="img-responsive" src={footer_img_6} alt="brand6" width="169" height="92" />
                                    </a>
                                </div>
                                <div className="item">
                                    <a className="img-wrapper" href="https://demo.fieldthemes.com/decor/home3/en/7_brand7" title="brand7">
                                        <img className="img-responsive" src={footer_img_7} alt="brand7" width="169" height="92" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block_fot_top">
                <div className="container">
                    <div className="static_content-footer">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-3 block">
                                <div className="box-static_footer">
                                    <h3>
                                        <a href="#"><i className="fa fa-map-marker"></i>Address</a>
                                    </h3>
                                    <p>No. 96, Jecica City, NJ 07305, New York,</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3 block">
                                <div className="box-static_footer">
                                    <h3>
                                        <a href="#"><i className="fa fa-phone"></i>Phone</a>
                                    </h3>
                                    <p>(+08) 123 456 789 - (+08) 234 567 890</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3 block">
                                <div className="box-static_footer">
                                    <h3>
                                        <a href="#"><i className="fa fa-envelope-o"></i>Email</a>
                                    </h3>
                                    <p><a href="mailto:sales@yoursite.com" target="_blank">sales@yoursite.com</a></p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3 block">
                                <div className="box-static_footer">
                                    <h3>
                                        <a href="#"><i className="fa fa-clock-o"></i>Opening</a>
                                    </h3>
                                    <p>Mon - Sat : 8.00 Am - 5.00 Pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block_footer_main">
                <div className="footer-center block">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-3 links about_ft">
                                <h3><span style={{display: "none"}}>.</span> <img src={logo} alt="" /></h3>
                                <div className="title" data-target="#footer_sub_menu_col_1" data-toggle="collapse">
                                    <div className="navbar-toggler collapse-icons hidden-md-up">
                                        <div className="fa fa-plus add"></div>
                                        <div className="fa fa-minus remove"></div>
                                    </div>
                                </div>
                                <div id="footer_sub_menu_col_1" className="collapse">
                                    <div>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh.</p>
                                    </div>
                                    <div className="social_content">
                                        <a href="#" className="fa fa-facebook">.</a> <a href="#" className="fa fa-google-plus">.</a> <a href="#" className="fa fa-twitter">.</a> <a href="#" className="fa fa-youtube">.</a>
                                        <a href="#" className="fa fa-rss">.</a><a href="#" className="fa fa-linkedin">.</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3 links bullet">
                                <h3>INFORMATION</h3>
                                <div className="title" data-target="#footer_sub_menu_col_2" data-toggle="collapse">
                                    <div className="navbar-toggler collapse-icons hidden-md-up">
                                        <div className="fa fa-plus add"></div>
                                        <div className="fa fa-minus remove"></div>
                                    </div>
                                </div>
                                <ul id="footer_sub_menu_col_2" className="collapse">
                                    <li>
                                        <a href="/decor/home3/en/sitemap" title=""><i className="fa fa-caret-right"></i>Site Map</a>
                                    </li>
                                    <li>
                                        <a href="#" title=""><i className="fa fa-caret-right"></i>Search Terms</a>
                                    </li>
                                    <li>
                                        <a href="#" title=""><i className="fa fa-caret-right"></i>Advanced Search</a>
                                    </li>
                                    <li>
                                        <a href="/decor/home3/en/contact-us" title=""><i className="fa fa-caret-right"></i>Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#" title=""><i className="fa fa-caret-right"></i>Suppliers</a>
                                    </li>
                                    <li>
                                        <a href="#" title=""><i className="fa fa-caret-right"></i>Our stores</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3 links bullet">
                                <h3>SHOPPING GUIDE</h3>
                                <div className="title" data-target="#footer_sub_menu_col_3" data-toggle="collapse">
                                    <div className="navbar-toggler collapse-icons hidden-md-up">
                                        <div className="fa fa-plus add"></div>
                                        <div className="fa fa-minus remove"></div>
                                    </div>
                                </div>
                                <ul id="footer_sub_menu_col_3" className="collapse">
                                    <li>
                                        <a href="/decor/home3/en/smartblog.html" title=""><i className="fa fa-caret-right"></i>Blog</a>
                                    </li>
                                    <li>
                                        <a href="#" title=""><i className="fa fa-caret-right"></i>FAQs</a>
                                    </li>
                                    <li>
                                        <a href="#" title=""><i className="fa fa-caret-right"></i>Payment</a>
                                    </li>
                                    <li>
                                        <a href="#" title=""><i className="fa fa-caret-right"></i>Shipment</a>
                                    </li>
                                    <li>
                                        <a href="#" title=""><i className="fa fa-caret-right"></i>Where is my order?</a>
                                    </li>
                                    <li>
                                        <a href="#" title=""><i className="fa fa-caret-right"></i>eturn Policy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3 links bullet">
                                <h3>STYLE ADVISOR</h3>
                                <div className="title" data-target="#footer_sub_menu_col_4" data-toggle="collapse">
                                    <div className="navbar-toggler collapse-icons hidden-md-up">
                                        <div className="fa fa-plus add"></div>
                                        <div className="fa fa-minus remove"></div>
                                    </div>
                                </div>
                                <ul id="footer_sub_menu_col_4" className="collapse">
                                    <li>
                                        <a href="/decor/home3/en/login?back=my-account" title=""><i className="fa fa-caret-right"></i>Your Account</a>
                                    </li>
                                    <li>
                                        <a href="#" title=""><i className="fa fa-caret-right"></i>Information</a>
                                    </li>
                                    <li>
                                        <a href="#" title=""><i className="fa fa-caret-right"></i>Adresses</a>
                                    </li>
                                    <li>
                                        <a href="#" title=""><i className="fa fa-caret-right"></i>Discount</a>
                                    </li>
                                    <li>
                                        <a href="#" title=""><i className="fa fa-caret-right"></i>Order History</a>
                                    </li>
                                    <li>
                                        <a href="#" title=""><i className="fa fa-caret-right"></i>Addtional Information</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-bottom2 col-xs-12 col-sm-12 col-md-12">
                                <ul>
                                    <li><a href="/decor/home3/en/content/4-about-us" title="About us">About us </a></li>
                                    <li><a href="#" title="Customer Service">Customer Service </a></li>
                                    <li><a href="#" title="Privacy Policy">Privacy Policy</a></li>
                                    <li><a href="#" title="Advanced Search">Advanced Search</a></li>
                                    <li><a href="#" title="Orders and Returns">Orders and Returns</a></li>
                                    <li><a href="/decor/home3/en/contact-us" title="Contact Us">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="footer-address col-xs-12 col-sm-12 col-md-6">
                                <p>Copyright © 2024 <a href="#">FieldThemes</a>. All Right Reserved</p>
                            </div>
                            <div className="footer-bottom-img col-xs-12 col-sm-12 col-md-6"><img src={footer_img_8} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="back-top">
                <a href="javascript:void(0)" className="mypresta_scrollup hidden-phone"><i className="fa fa-chevron-up"></i></a>
            </div>
        </footer>
    );
};

export default FooterComponent;
