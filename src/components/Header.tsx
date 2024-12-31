// import { useNavigate } from 'react-router-dom';
import imgLogo from '../assets/img/logo.png';
import h_img_1 from '../assets/img/l/1.jpg';
import h_img_2 from '../assets/img/megamenu/img1.png';
import h_img_3 from '../assets/img/megamenu/img2.png';
import h_img_4 from '../assets/img/megamenu/img3.png';
import h_img_5 from '../assets/img/megamenu/img6.png';
import h_img_6 from '../assets/img/blocks/phone_img.jpg';
import h_img_7 from '../assets/img/megamenu/img4.png';
import h_img_8 from '../assets/img/megamenu/img5.png';

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
            <header id="header">
                <div className="header-top">
                    <div className="container">
                        <div className="logo_header">
                            <a href="https://demo.fieldthemes.com/decor/home3/">
                                <img className="img-responsive logo" src={imgLogo} alt="Decor" />
                            </a>
                        </div>
                        <div id="sticky_top">
                            <div id="cart_block_top" className="sticky_top">
                                <div className="blockcart cart-preview inactive" data-refresh-url="//demo.fieldthemes.com/decor/home3/en/module/ps_shoppingcart/ajax">
                                    <div className="click-cart">
                                        <span className="unline_cart">
                                            <span className="cart-products-count">0</span>
                                            <span className="cart-item-top">Item -</span>
                                            <span className="cart-total-top">$0.00</span>
                                        </span>
                                        <span className="shopping-cart">
                                            <span className="fa fa-shopping-cart"> </span>
                                            <span className="cart-products-count">0</span>
                                        </span>
                                    </div>
                                    <div className="cart_top_ajax">
                                        <div className="card-block-top" style={{borderTop: "none"}}>
                                            There are no more items in your cart
                                        </div>
                                        <div className="card-block-top">
                                            <div className="totals-top">
                                                <span className="label-top">Total (tax excl.)</span>
                                                <span className="value-top price">$0.00</span>
                                            </div>
                                            <div className="totals-top">
                                                <span className="label-top">Taxes</span>
                                                <span className="value-top price">$0.00</span>
                                            </div>
                                        </div>
                                        <div className="card-block-top">
                                            <a href="//demo.fieldthemes.com/decor/home3/en/cart?action=show" className="view-cart">View Cart</a>
                                        </div>
                                    </div>
                                    {/* <script type="text/javascript">
                                        $(document).ready(function () {
                                            $(".click-cart").click(function (e) {
                                                $(".cart_top_ajax").slideToggle();
                                                $(".click-cart").toggleClass("active");

                                                e.stopPropagation();
                                            });
                                            $("body").click(function (e) {
                                                $(".cart_top_ajax").slideUp();
                                                $(".click-cart").removeClass("active");
                                            });
                                        });
                                    </script> */}
                                </div>
                            </div>

                            {/* <!-- block seach mobile --> */}
                            {/* <!-- Block search module TOP --> */}
                            <div id="search_block_top" className="dropdown js-dropdown">
                                <div className="current fa fa-search expand-more" data-toggle="dropdown"></div>
                                <div className="dropdown-menu">
                                    <div className="field-search">
                                        <form method="get" action="https://demo.fieldthemes.com/decor/home3/en/search" id="searchbox">
                                            <input type="hidden" name="controller" value="search" />
                                            <input type="hidden" name="orderby" value="position" />
                                            <input type="hidden" name="orderway" value="desc" />
                                            <input className="search_query" type="text" id="search_query_top" name="search_query" value="" placeholder="Keyword" />
                                            <button type="submit" name="submit_search" className="btn button-search">
                                                <span className="icon-search"></span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- /Block search module TOP --> */}
                            <div className="content-top">
                                <div className="phone_img"><img className="img-responsive" src={h_img_6} alt="" /></div>
                                <div className="content_text-top">
                                    <h3 className="title_font">Call us now</h3>
                                    <p>+0123 456 789</p>
                                </div>
                            </div>
                        </div>
                        <div className="nav_head">
                            <div className="click-nav">
                                <i className="fa fa-bars"></i>
                            </div>
                            <div className="content-nav">
                                <div className="content-nav-items">
                                    <div className="language-selector-wrapper">
                                        <div className="language-selector dropdown js-dropdown">
                                            <span className="expand-more" data-toggle="dropdown">
                                                <img src={h_img_1} alt="English" width="18" height="12" />
                                                English<i className="fa fa-caret-down"></i>
                                            </span>
                                            <ul className="dropdown-menu">
                                                <li className="current">
                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/" className="dropdown-item">
                                                        <img src={h_img_1} alt="en" width="16" height="11" />
                                                        English
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://demo.fieldthemes.com/decor/home3/es/" className="dropdown-item">
                                                        <img src="assets/img/l/7.jpg" alt="es" width="16" height="11" />
                                                        Español
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://demo.fieldthemes.com/decor/home3/it/" className="dropdown-item">
                                                        <img src="assets/img/l/8.jpg" alt="it" width="16" height="11" />
                                                        Italiano
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://demo.fieldthemes.com/decor/home3/fr/" className="dropdown-item">
                                                        <img src="assets/img/l/9.jpg" alt="fr" width="16" height="11" />
                                                        Français
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="currency-selector-wrapper">
                                        <div className="currency-selector dropdown js-dropdown">
                                            <span className="expand-more _gray-darker" data-toggle="dropdown">USD<i className="fa fa-caret-down"></i></span>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a title="Euro" rel="nofollow" href="https://demo.fieldthemes.com/decor/home3/en/?SubmitCurrency=1&amp;id_currency=2" className="dropdown-item">EUR €</a>
                                                </li>
                                                <li className="current">
                                                    <a title="US Dollar" rel="nofollow" href="https://demo.fieldthemes.com/decor/home3/en/?SubmitCurrency=1&amp;id_currency=1" className="dropdown-item">USD $</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mobile_links-wrapper">
                                        <div id="mobile_links" className="dropdown js-dropdown">
                                            <span className="expand-more" data-toggle="dropdown"><i className="fa fa-user"></i>My account<i className="fa fa-caret-down"></i></span>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/my-account" title="My Account" rel="nofollow">My Account</a>
                                                </li>
                                                <li>
                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/contact-us" title="Contact us" rel="nofollow">Contact us</a>
                                                </li>
                                                <li>
                                                    <a className="link-myaccount" href="https://demo.fieldthemes.com/decor/home3/en/cart?action=show" title="My Cart" rel="nofollow">
                                                        My Cart
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/my-account" title="Log in to your customer account" rel="nofollow">
                                                        <span>Sign in</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- MEGAMENU --> */}
                        <div id="header_menu" className="visible-lg visible-md">
                            <div className="container">
                                <div className="row">
                                    <nav id="fieldmegamenu-main" className="fieldmegamenu inactive">
                                        <ul>
                                            <li className="root root-1">
                                                <div className="root-item no-description">
                                                    <a href="/decor/home3/">
                                                        <div className="title title_font"><span className="fa menu-home"></span><span className="title-text">HOME</span></div>
                                                    </a>
                                                </div>
                                            </li>

                                            <li className="root root-2">
                                                <div className="root-item no-description">
                                                    <a href="/decor/home3/en/12-categories">
                                                        <div className="title title_font"><span className="title-text">Categories</span><span className="icon-has-sub fa fa-angle-down"></span></div>
                                                    </a>
                                                </div>

                                                <ul className="menu-items col-md-6 col-xs-12">
                                                    <li className="menu-item menu-item-1 depth-1 customcontent menucol-1-3">
                                                        <div className="normalized">
                                                            <p className="img-top">
                                                                <a href="#"> <img src={h_img_2} alt="" width="160" height="80" /> </a>
                                                            </p>
                                                        </div>
                                                    </li>

                                                    <li className="menu-item menu-item-2 depth-1 customcontent menucol-1-3">
                                                        <div className="normalized">
                                                            <p className="img-top">
                                                                <a href="#"> <img src={h_img_3} alt="" width="160" height="80" /> </a>
                                                            </p>
                                                        </div>
                                                    </li>

                                                    <li className="menu-item menu-item-3 depth-1 customcontent divider">
                                                        <div className="normalized"></div>
                                                    </li>

                                                    <li className="menu-item menu-item-5 depth-1 category menucol-1-3">
                                                        <div className="title title_font">
                                                            <a href="https://demo.fieldthemes.com/decor/home3/en/41-bakeware"> bakeware </a>
                                                        </div>

                                                        <ul className="submenu submenu-depth-2">
                                                            <li className="menu-item menu-item-4 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing"> Home Brewing </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-9 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/14-living-room"> Living room </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-7 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/32-knife-accessories"> Knife Accessories </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-8 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/33-utensils-gadgets"> Utensils & Gadgets </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-6 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/34-coffee"> Coffee </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="menu-item menu-item-10 depth-1 category menucol-1-3">
                                                        <div className="title title_font">
                                                            <a href="https://demo.fieldthemes.com/decor/home3/en/42-entertaining"> Entertaining </a>
                                                        </div>

                                                        <ul className="submenu submenu-depth-2">
                                                            <li className="menu-item menu-item-11 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/37-lifestyle"> Lifestyle </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-15 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/34-coffee"> Coffee </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-12 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/36-hats-and-gloves"> Hats and Gloves </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-13 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/32-knife-accessories"> Knife Accessories </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-14 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/36-hats-and-gloves"> Hats and Gloves </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="menu-item menu-item-18 depth-1 customcontent menucol-1-3 img_right">
                                                        <div className="normalized">
                                                            <p>
                                                                <a href="#"><img src={h_img_4} alt="" width="160" height="80" /> </a>
                                                            </p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="root root-3">
                                                <div className="root-item no-description">
                                                    <a href="/decor/home3/en/13-furniture">
                                                        <div className="title title_font"><span className="title-text">Furniture</span><span className="icon-has-sub fa fa-angle-down"></span></div>
                                                    </a>
                                                </div>

                                                <ul className="menu-items col-md-6 col-xs-12">
                                                    <li className="menu-item menu-item-19 depth-1 category menucol-1-3">
                                                        <div className="title title_font">
                                                            <a href="https://demo.fieldthemes.com/decor/home3/en/19-gift-for-men"> Gift for men </a>
                                                        </div>

                                                        <ul className="submenu submenu-depth-2">
                                                            <li className="menu-item menu-item-20 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/20-objects"> Objects </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-21 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/21-tabletop"> Tabletop </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="menu-item menu-item-22 depth-1 category menucol-1-3">
                                                        <div className="title title_font">
                                                            <a href="https://demo.fieldthemes.com/decor/home3/en/22-fragrances"> Fragrances </a>
                                                        </div>

                                                        <ul className="submenu submenu-depth-2">
                                                            <li className="menu-item menu-item-23 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/23-fishing"> Fishing </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-24 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/24-fpv-system-parts"> FPV System & Parts </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="menu-item menu-item-25 depth-1 category menucol-1-3">
                                                        <div className="title title_font">
                                                            <a href="https://demo.fieldthemes.com/decor/home3/en/19-gift-for-men"> Gift for men </a>
                                                        </div>

                                                        <ul className="submenu submenu-depth-2">
                                                            <li className="menu-item menu-item-26 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/14-living-room"> Living room </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-27 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/16-kitchen"> Kitchen </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="menu-item menu-item-65 depth-1 divider menucol-1-1 divider"></li>

                                                    <li className="menu-item menu-item-28 depth-1 category menucol-1-3">
                                                        <div className="title title_font">
                                                            <a href="https://demo.fieldthemes.com/decor/home3/en/30-girls"> Girls </a>
                                                        </div>

                                                        <ul className="submenu submenu-depth-2">
                                                            <li className="menu-item menu-item-29 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/38-shrot-sleeved"> Shrot Sleeved </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-30 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/43-golf-supplies"> Golf Supplies </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-31 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/44-gift-for-women"> Gift for Women </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="menu-item menu-item-32 depth-1 category menucol-1-3">
                                                        <div className="title title_font">
                                                            <a href="https://demo.fieldthemes.com/decor/home3/en/25-earings"> Earings </a>
                                                        </div>

                                                        <ul className="submenu submenu-depth-2">
                                                            <li className="menu-item menu-item-33 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/19-gift-for-men"> Gift for men </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-34 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/44-gift-for-women"> Gift for Women </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-35 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/23-fishing"> Fishing </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="menu-item menu-item-36 depth-1 category menucol-1-3">
                                                        <div className="title title_font">
                                                            <a href="https://demo.fieldthemes.com/decor/home3/en/22-fragrances"> Fragrances </a>
                                                        </div>

                                                        <ul className="submenu submenu-depth-2">
                                                            <li className="menu-item menu-item-37 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/26-coffee-tables"> Coffee Tables </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-38 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/27-sofas"> Sofas </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-39 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/28-sofas-tables"> Sofas tables </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="menu-item menu-item-41 depth-1 customcontent menucol-1-1">
                                                        <div className="normalized">
                                                            <p className="img-bottom">
                                                                <a href="#"><img className="img-responsive" src={h_img_7} alt="" width="540" height="90" /></a>
                                                            </p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="root root-4">
                                                <div className="root-item no-description">
                                                    <a href="/decor/home3/en/17-accessories">
                                                        <div className="title title_font"><span className="title-text">Accessories</span><span className="icon-has-sub fa fa-angle-down"></span></div>
                                                    </a>
                                                </div>

                                                <ul className="menu-items col-md-7 col-xs-12">
                                                    <li className="menu-item menu-item-42 depth-1 category menucol-1-4">
                                                        <div className="title title_font">
                                                            <a href="https://demo.fieldthemes.com/decor/home3/en/45-dresses"> Dresses </a>
                                                        </div>

                                                        <ul className="submenu submenu-depth-2">
                                                            <li className="menu-item menu-item-50 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/17-accessories"> Accessories </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-43 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/46-hats-and-gloves"> Hats and Gloves </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-44 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/47-lifestyle"> Lifestyle </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-45 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/48-bras"> Bras </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="menu-item menu-item-46 depth-1 category menucol-1-4">
                                                        <div className="title title_font">
                                                            <a href="https://demo.fieldthemes.com/decor/home3/en/35-brand"> Brand </a>
                                                        </div>

                                                        <ul className="submenu submenu-depth-2">
                                                            <li className="menu-item menu-item-47 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/49-evening"> Evening </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-48 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/39-long-sleeved"> Long Sleeved </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-49 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/38-shrot-sleeved"> Shrot Sleeved </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-51 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/40-tanks-and-camis"> Tanks and Camis </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="menu-item menu-item-52 depth-1 customcontent menucol-1-2">
                                                        <div className="normalized">
                                                            <div className="custom-menu-bottom">
                                                                <div className="menu-bottom col1">
                                                                    <a href="#"><img src={h_img_8} alt="" width="100" height="111" /></a>
                                                                    <div className="menu-bottom-dec">
                                                                        <h3>chair&nbsp;Collection 2024</h3>
                                                                        <p>Lorem Ipsum is simply dumy text of the printing</p>
                                                                        <a href="#">Shop now</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="menu-item menu-item-64 depth-1 divider"></li>

                                                    <li className="menu-item menu-item-53 depth-1 category menucol-1-4">
                                                        <div className="title title_font">
                                                            <a href="https://demo.fieldthemes.com/decor/home3/en/17-accessories"> Accessories </a>
                                                        </div>

                                                        <ul className="submenu submenu-depth-2">
                                                            <li className="menu-item menu-item-54 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/49-evening"> Evening </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-55 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/39-long-sleeved"> Long Sleeved </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-56 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/38-shrot-sleeved"> Shrot Sleeved </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-57 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/40-tanks-and-camis"> Tanks and Camis </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="menu-item menu-item-58 depth-1 category menucol-1-4">
                                                        <div className="title title_font">
                                                            <a href="https://demo.fieldthemes.com/decor/home3/en/23-fishing"> Fishing </a>
                                                        </div>

                                                        <ul className="submenu submenu-depth-2">
                                                            <li className="menu-item menu-item-59 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/26-coffee-tables"> Coffee Tables </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-60 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/36-hats-and-gloves"> Hats and Gloves </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-61 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/37-lifestyle"> Lifestyle </a>
                                                                </div>
                                                            </li>

                                                            <li className="menu-item menu-item-62 depth-2 category">
                                                                <div className="title">
                                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/41-bakeware"> bakeware </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="menu-item menu-item-63 depth-1 customcontent menucol-1-2">
                                                        <div className="normalized">
                                                            <div className="custom-menu-bottom">
                                                                <div className="menu-bottom col1">
                                                                    <a href="#"><img src={h_img_5} alt="" width="100" height="111" /></a>
                                                                    <div className="menu-bottom-dec">
                                                                        <h3>sofa&nbsp;Collection 2024</h3>
                                                                        <p>Lorem Ipsum is simply dumy text of the printing</p>
                                                                        <a href="#">Shop now</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="root root-5">
                                                <div className="root-item no-description">
                                                    <a href="/decor/home3/en/smartblog.html">
                                                        <div className="title title_font"><span className="title-text">Blogs</span></div>
                                                    </a>
                                                </div>
                                            </li>

                                            <li className="root root-6">
                                                <div className="root-item no-description">
                                                    <a href="/decor/home3/en/contact-us">
                                                        <div className="title title_font"><span className="title-text">contact us</span></div>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* header_mobile_menu */}
            <div id="header_mobile_menu" className="navbar-inactive visible-sm visible-xs">
                <div className="container">
                    <div className="fieldmm-nav col-sm-12 col-xs-12">
                        <span className="brand">Menu list</span>
                        <span id="fieldmm-button"><i className="fa fa-reorder"></i></span>

                        <nav id="fieldmegamenu-mobile" className="fieldmegamenu inactive">
                            <ul>
                                <li className="root root-1">
                                    <div className="root-item no-description">
                                        <a href="/decor/home3/">
                                            <div className="title title_font"><span className="fa menu-home"></span><span className="title-text">HOME</span></div>
                                        </a>
                                    </div>
                                </li>

                                <li className="root root-2">
                                    <div className="root-item no-description">
                                        <a href="/decor/home3/en/12-categories">
                                            <div className="title title_font"><span className="title-text">Categories</span><span className="icon-has-sub fa fa-angle-down"></span></div>
                                        </a>
                                    </div>

                                    <ul className="menu-items col-md-6 col-xs-12">
                                        <li className="menu-item menu-item-1 depth-1 customcontent menucol-1-3">
                                            <div className="normalized">
                                                <p className="img-top">
                                                    <a href="#"> <img src={h_img_2} alt="" width="160" height="80" /> </a>
                                                </p>
                                            </div>
                                        </li>

                                        <li className="menu-item menu-item-2 depth-1 customcontent menucol-1-3">
                                            <div className="normalized">
                                                <p className="img-top">
                                                    <a href="#"> <img src={h_img_3} alt="" width="160" height="80" /> </a>
                                                </p>
                                            </div>
                                        </li>

                                        <li className="menu-item menu-item-3 depth-1 customcontent divider">
                                            <div className="normalized"></div>
                                        </li>

                                        <li className="menu-item menu-item-5 depth-1 category menucol-1-3">
                                            <div className="title title_font">
                                                <a href="https://demo.fieldthemes.com/decor/home3/en/41-bakeware"> bakeware </a>
                                            </div>

                                            <ul className="submenu submenu-depth-2">
                                                <li className="menu-item menu-item-4 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing"> Home Brewing </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-9 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/14-living-room"> Living room </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-7 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/32-knife-accessories"> Knife Accessories </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-8 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/33-utensils-gadgets"> Utensils & Gadgets </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-6 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/34-coffee"> Coffee </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="menu-item menu-item-10 depth-1 category menucol-1-3">
                                            <div className="title title_font">
                                                <a href="https://demo.fieldthemes.com/decor/home3/en/42-entertaining"> Entertaining </a>
                                            </div>

                                            <ul className="submenu submenu-depth-2">
                                                <li className="menu-item menu-item-11 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/37-lifestyle"> Lifestyle </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-15 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/34-coffee"> Coffee </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-12 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/36-hats-and-gloves"> Hats and Gloves </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-13 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/32-knife-accessories"> Knife Accessories </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-14 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/36-hats-and-gloves"> Hats and Gloves </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="menu-item menu-item-18 depth-1 customcontent menucol-1-3 img_right">
                                            <div className="normalized">
                                                <p>
                                                    <a href="#"> <img src={h_img_4} alt="" width="160" height="80" /> </a>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>

                                <li className="root root-3">
                                    <div className="root-item no-description">
                                        <a href="/decor/home3/en/13-furniture">
                                            <div className="title title_font"><span className="title-text">Furniture</span><span className="icon-has-sub fa fa-angle-down"></span></div>
                                        </a>
                                    </div>

                                    <ul className="menu-items col-md-6 col-xs-12">
                                        <li className="menu-item menu-item-19 depth-1 category menucol-1-3">
                                            <div className="title title_font">
                                                <a href="https://demo.fieldthemes.com/decor/home3/en/19-gift-for-men"> Gift for men </a>
                                            </div>

                                            <ul className="submenu submenu-depth-2">
                                                <li className="menu-item menu-item-20 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/20-objects"> Objects </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-21 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/21-tabletop"> Tabletop </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="menu-item menu-item-22 depth-1 category menucol-1-3">
                                            <div className="title title_font">
                                                <a href="https://demo.fieldthemes.com/decor/home3/en/22-fragrances"> Fragrances </a>
                                            </div>

                                            <ul className="submenu submenu-depth-2">
                                                <li className="menu-item menu-item-23 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/23-fishing"> Fishing </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-24 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/24-fpv-system-parts"> FPV System & Parts </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="menu-item menu-item-25 depth-1 category menucol-1-3">
                                            <div className="title title_font">
                                                <a href="https://demo.fieldthemes.com/decor/home3/en/19-gift-for-men"> Gift for men </a>
                                            </div>

                                            <ul className="submenu submenu-depth-2">
                                                <li className="menu-item menu-item-26 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/14-living-room"> Living room </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-27 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/16-kitchen"> Kitchen </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="menu-item menu-item-65 depth-1 divider menucol-1-1 divider"></li>

                                        <li className="menu-item menu-item-28 depth-1 category menucol-1-3">
                                            <div className="title title_font">
                                                <a href="https://demo.fieldthemes.com/decor/home3/en/30-girls"> Girls </a>
                                            </div>

                                            <ul className="submenu submenu-depth-2">
                                                <li className="menu-item menu-item-29 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/38-shrot-sleeved"> Shrot Sleeved </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-30 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/43-golf-supplies"> Golf Supplies </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-31 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/44-gift-for-women"> Gift for Women </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="menu-item menu-item-32 depth-1 category menucol-1-3">
                                            <div className="title title_font">
                                                <a href="https://demo.fieldthemes.com/decor/home3/en/25-earings"> Earings </a>
                                            </div>

                                            <ul className="submenu submenu-depth-2">
                                                <li className="menu-item menu-item-33 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/19-gift-for-men"> Gift for men </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-34 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/44-gift-for-women"> Gift for Women </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-35 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/23-fishing"> Fishing </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="menu-item menu-item-36 depth-1 category menucol-1-3">
                                            <div className="title title_font">
                                                <a href="https://demo.fieldthemes.com/decor/home3/en/22-fragrances"> Fragrances </a>
                                            </div>

                                            <ul className="submenu submenu-depth-2">
                                                <li className="menu-item menu-item-37 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/26-coffee-tables"> Coffee Tables </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-38 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/27-sofas"> Sofas </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-39 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/28-sofas-tables"> Sofas tables </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="menu-item menu-item-41 depth-1 customcontent menucol-1-1">
                                            <div className="normalized">
                                                <p className="img-bottom">
                                                    <a href="#"><img className="img-responsive" src={h_img_7} alt="" width="540" height="90" /></a>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>

                                <li className="root root-4">
                                    <div className="root-item no-description">
                                        <a href="/decor/home3/en/17-accessories">
                                            <div className="title title_font"><span className="title-text">Accessories</span><span className="icon-has-sub fa fa-angle-down"></span></div>
                                        </a>
                                    </div>

                                    <ul className="menu-items col-md-7 col-xs-12">
                                        <li className="menu-item menu-item-42 depth-1 category menucol-1-4">
                                            <div className="title title_font">
                                                <a href="https://demo.fieldthemes.com/decor/home3/en/45-dresses"> Dresses </a>
                                            </div>

                                            <ul className="submenu submenu-depth-2">
                                                <li className="menu-item menu-item-50 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/17-accessories"> Accessories </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-43 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/46-hats-and-gloves"> Hats and Gloves </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-44 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/47-lifestyle"> Lifestyle </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-45 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/48-bras"> Bras </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="menu-item menu-item-46 depth-1 category menucol-1-4">
                                            <div className="title title_font">
                                                <a href="https://demo.fieldthemes.com/decor/home3/en/35-brand"> Brand </a>
                                            </div>

                                            <ul className="submenu submenu-depth-2">
                                                <li className="menu-item menu-item-47 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/49-evening"> Evening </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-48 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/39-long-sleeved"> Long Sleeved </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-49 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/38-shrot-sleeved"> Shrot Sleeved </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-51 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/40-tanks-and-camis"> Tanks and Camis </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="menu-item menu-item-52 depth-1 customcontent menucol-1-2">
                                            <div className="normalized">
                                                <div className="custom-menu-bottom">
                                                    <div className="menu-bottom col1">
                                                        <a href="#"><img src="assets/img/megamenu/img5.png" alt="" width="100" height="111" /></a>
                                                        <div className="menu-bottom-dec">
                                                            <h3>chair&nbsp;Collection 2024</h3>
                                                            <p>Lorem Ipsum is simply dumy text of the printing</p>
                                                            <a href="#">Shop now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="menu-item menu-item-64 depth-1 divider"></li>

                                        <li className="menu-item menu-item-53 depth-1 category menucol-1-4">
                                            <div className="title title_font">
                                                <a href="https://demo.fieldthemes.com/decor/home3/en/17-accessories"> Accessories </a>
                                            </div>

                                            <ul className="submenu submenu-depth-2">
                                                <li className="menu-item menu-item-54 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/49-evening"> Evening </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-55 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/39-long-sleeved"> Long Sleeved </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-56 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/38-shrot-sleeved"> Shrot Sleeved </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-57 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/40-tanks-and-camis"> Tanks and Camis </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="menu-item menu-item-58 depth-1 category menucol-1-4">
                                            <div className="title title_font">
                                                <a href="https://demo.fieldthemes.com/decor/home3/en/23-fishing"> Fishing </a>
                                            </div>

                                            <ul className="submenu submenu-depth-2">
                                                <li className="menu-item menu-item-59 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/26-coffee-tables"> Coffee Tables </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-60 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/36-hats-and-gloves"> Hats and Gloves </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-61 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/37-lifestyle"> Lifestyle </a>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-62 depth-2 category">
                                                    <div className="title">
                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/41-bakeware"> bakeware </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="menu-item menu-item-63 depth-1 customcontent menucol-1-2">
                                            <div className="normalized">
                                                <div className="custom-menu-bottom">
                                                    <div className="menu-bottom col1">
                                                        <a href="#"><img src={h_img_5} alt="" width="100" height="111" /></a>
                                                        <div className="menu-bottom-dec">
                                                            <h3>sofa&nbsp;Collection 2024</h3>
                                                            <p>Lorem Ipsum is simply dumy text of the printing</p>
                                                            <a href="#">Shop now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>

                                <li className="root root-5">
                                    <div className="root-item no-description">
                                        <a href="/decor/home3/en/smartblog.html">
                                            <div className="title title_font"><span className="title-text">Blogs</span></div>
                                        </a>
                                    </div>
                                </li>

                                <li className="root root-6">
                                    <div className="root-item no-description">
                                        <a href="/decor/home3/en/contact-us">
                                            <div className="title title_font"><span className="title-text">contact us</span></div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="vmega_responsive"></div>
                </div>
            </div>
        </>
    );
};

export default HeaderComponent;
