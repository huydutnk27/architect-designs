// // Function component using arrow function syntax
// import logo from '../assets/images/logo-dark.png';
// import footer_widget_gallery_1 from '../assets/images/gallery/footer-widget-gallery-1.jpg';
// import footer_widget_gallery_2 from '../assets/images/gallery/footer-widget-gallery-2.jpg';
// import footer_widget_gallery_3 from '../assets/images/gallery/footer-widget-gallery-3.jpg';
// import footer_widget_gallery_4 from '../assets/images/gallery/footer-widget-gallery-4.jpg';
// import footer_widget_gallery_5 from '../assets/images/gallery/footer-widget-gallery-5.jpg';
// import footer_widget_gallery_6 from '../assets/images/gallery/footer-widget-gallery-6.jpg';
// import footer_shape_1 from '../assets/images/shapes/footer-shape-1.png';
// import footer_shape_2 from '../assets/images/shapes/footer-shape-2.png';
// import footer_shape_3 from '../assets/images/shapes/footer-shape-3.png';
// import footer_shape_4 from '../assets/images/shapes/footer-shape-4.png';
// import footer_shape_5 from '../assets/images/shapes/footer-shape-5.png';


// const FooterComponent = () => {
//     return (
//         // <!--<< Footer Section Start >>-->
//         <footer className="main-footer section-space-top">
//             <div className="container">
//                 <div className="main-footer__top">
//                     <a href="index.html" className="main-footer__logo">
//                         <img src={logo} width="209" alt="Eduhive HTML Template"/>
//                     </a>
//                     <div className="main-footer__top__inner">
//                         <div className="main-footer__newsletter">
//                             <form action="#" data-url="MAILCHIMP_FORM_URL" className="main-footer__newsletter__form mc-form">
//                                 <input type="text" name="EMAIL" placeholder="Enter Your Mail"/>
//                                 <button type="submit" className="eduhive-btn">
//                                     <span>Get newsletter</span>
//                                 </button>
//                             </form>
//                             <div className="mc-form__response"></div>
//                         </div>
//                         <div className="main-footer__social social-links">
//                             <a href="https://facebook.com">
//                                 <i className="fab fa-facebook-f" aria-hidden="true"></i>
//                                 <span className="sr-only">Facebook</span>
//                             </a>
//                             <a href="https://twitter.com">
//                                 <i className="icon-twitter" aria-hidden="true"></i>
//                                 <span className="sr-only">Twitter</span>
//                             </a>
//                             <a href="https://linkedin.com">
//                                 <i className="fab fa-linkedin-in" aria-hidden="true"></i>
//                                 <span className="sr-only">Linkedin</span>
//                             </a>
//                             <a href="https://youtube.com">
//                                 <i className="fab fa-youtube" aria-hidden="true"></i>
//                                 <span className="sr-only">Youtube</span>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row gutter-y-40">
//                     <div className="col-xl-3 col-lg-4 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
//                         <div className="footer-widget footer-widget--about">
//                             <h2 className="footer-widget__title">About Us</h2>
//                             <p className="footer-widget__about-text">Phasellus ultricies aliquam volutpat
//                                 ullamcorper laoreet neque, a lacinia
//                                 curabitur lacinia mollis</p>
//                             <ul className="footer-widget__info">
//                                 <li>
//                                     <span className="footer-widget__info__icon"><i className="icon-location"></i></span>
//                                     <a href="https://www.google.com/maps">2683 Smith Street, Boston - 02110</a>
//                                 </li>
//                                 <li>
//                                     <span className="footer-widget__info__icon"><i className="icon-email"></i></span>
//                                     <a href="mailto:needhelp@company.com">needhelp@company.com</a>
//                                 </li>
//                                 <li>
//                                     <span className="footer-widget__info__icon"><i className="icon-telephone"></i></span>
//                                     <a href="tel:+6120320024">+61 2032 0024</a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
//                         <div className="footer-widget footer-widget--links">
//                             <h2 className="footer-widget__title">Quick Link</h2>
//                             <ul className="list-unstyled footer-widget__links">
//                                 <li>
//                                     <a href="about.html">
//                                         <span className="footer-widget__links__icon">
//                                             <i className="icon-double-arrow"></i>
//                                         </span>
//                                         About Eduhive
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="courses.html">
//                                         <span className="footer-widget__links__icon">
//                                             <i className="icon-double-arrow"></i>
//                                         </span>
//                                         Our Courses
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="instructors.html">
//                                         <span className="footer-widget__links__icon">
//                                             <i className="icon-double-arrow"></i>
//                                         </span>
//                                         Instructors
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="instructor-details.html">
//                                         <span className="footer-widget__links__icon">
//                                             <i className="icon-double-arrow"></i>
//                                         </span>
//                                         Instructor Details
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="contact.html">
//                                         <span className="footer-widget__links__icon">
//                                             <i className="icon-double-arrow"></i>
//                                         </span>
//                                         Contact Us
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
//                         <div className="footer-widget footer-widget--links">
//                             <h2 className="footer-widget__title">Courses</h2>
//                             <ul className="list-unstyled footer-widget__links">
//                                 <li>
//                                     <a href="apps-development.html">
//                                         <span className="footer-widget__links__icon">
//                                             <i className="icon-double-arrow"></i>
//                                         </span>
//                                         Apps Development
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="digital-marketing.html">
//                                         <span className="footer-widget__links__icon">
//                                             <i className="icon-double-arrow"></i>
//                                         </span>
//                                         Digital Marketing
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="graphics-design.html">
//                                         <span className="footer-widget__links__icon">
//                                             <i className="icon-double-arrow"></i>
//                                         </span>
//                                         Graphics Design
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="uiux-design.html">
//                                         <span className="footer-widget__links__icon">
//                                             <i className="icon-double-arrow"></i>
//                                         </span>
//                                         UI/UX Design
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="data-science.html">
//                                         <span className="footer-widget__links__icon">
//                                             <i className="icon-double-arrow"></i>
//                                         </span>
//                                         Data Science
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="col-xl-3 col-md-4 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
//                         <div className="footer-widget footer-widget--gallery">
//                             <h2 className="footer-widget__title">Our Gallery</h2>
//                             <div className="footer-widget__gallery">
//                                 <a href="gallery.html" className="footer-widget__gallery__link">
//                                     <img src={footer_widget_gallery_1} alt="footer-widget-gallery"/>
//                                     <span className="footer-widget__gallery__icon icon-plus"></span>
//                                 </a>
//                                 <a href="gallery.html" className="footer-widget__gallery__link">
//                                     <img src={footer_widget_gallery_2} alt="footer-widget-gallery"/>
//                                     <span className="footer-widget__gallery__icon icon-plus"></span>
//                                 </a>
//                                 <a href="gallery.html" className="footer-widget__gallery__link">
//                                     <img src={footer_widget_gallery_3} alt="footer-widget-gallery"/>
//                                     <span className="footer-widget__gallery__icon icon-plus"></span>
//                                 </a>
//                                 <a href="gallery.html" className="footer-widget__gallery__link">
//                                     <img src={footer_widget_gallery_4} alt="footer-widget-gallery"/>
//                                     <span className="footer-widget__gallery__icon icon-plus"></span>
//                                 </a>
//                                 <a href="gallery.html" className="footer-widget__gallery__link">
//                                     <img src={footer_widget_gallery_5} alt="footer-widget-gallery"/>
//                                     <span className="footer-widget__gallery__icon icon-plus"></span>
//                                 </a>
//                                 <a href="gallery.html" className="footer-widget__gallery__link">
//                                     <img src={footer_widget_gallery_6} alt="footer-widget-gallery"/>
//                                     <span className="footer-widget__gallery__icon icon-plus"></span>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="main-footer__bottom">
//                 <div className="container">
//                     <div className="main-footer__bottom__inner">
//                         <p className="main-footer__copyright">
//                             &copy; Copyright <span className="dynamic-year"></span> by Eduhive HTML Template.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <img src={footer_shape_1} alt="shape" className="main-footer__shape-one"/>
//             <img src={footer_shape_2} alt="shape" className="main-footer__shape-two"/>
//             <img src={footer_shape_3} alt="shape" className="main-footer__shape-three"/>
//             <img src={footer_shape_4} alt="shape" className="main-footer__shape-four"/>
//             <img src={footer_shape_5} alt="shape" className="main-footer__shape-five"/>
//         </footer>
//     );
// };

// export default FooterComponent;
