import { lazy, use, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import home_img_1 from '../assets/img/blocks/icon1.jpg';
import home_img_2 from '../assets/img/blocks/icon2.jpg';
import home_img_3 from '../assets/img/blocks/icon3.jpg';
import home_img_4 from '../assets/img/40-new_default/printed-summer-dress.jpg';
import home_img_5 from '../assets/img/40-large_default/printed-summer-dress.jpg';
import home_img_6 from '../assets/img/41-new_default/printed-summer-dress.jpg';
import home_img_7 from '../assets/img/44-new_default/printed-summer-dress.jpg';
import home_img_8 from '../assets/img/44-large_default/printed-summer-dress.jpg';
import home_img_9 from '../assets/img/45-new_default/printed-summer-dress.jpg';
import home_img_10 from '../assets/img/52-new_default/faded-short-sleeves-tshirt.jpg';
import home_img_11 from '../assets/img/52-large_default/faded-short-sleeves-tshirt.jpg';
import home_img_12 from '../assets/img/53-new_default/faded-short-sleeves-tshirt.jpg';
import home_img_13 from '../assets/img/56-new_default/printed-chiffon-dress.jpg';
import home_img_14 from '../assets/img/56-large_default/printed-chiffon-dress.jpg';
import home_img_15 from '../assets/img/57-new_default/printed-chiffon-dress.jpg';
import home_img_16 from '../assets/img/32-new_default/printed-dress.jpg';
import home_img_17 from '../assets/img/32-large_default/printed-dress.jpg';
import home_img_18 from '../assets/img/33-new_default/printed-dress.jpg';
import home_img_19 from '../assets/img/68-new_default/printed-dress.jpg';
import home_img_20 from '../assets/img/68-large_default/printed-dress.jpg';
import home_img_21 from '../assets/img/69-new_default/printed-dress.jpg';
// import home_img_22 from '../assets/img/40-new_default/printed-summer-dress.jpg';
// import home_img_23 from '../assets/img/40-large_default/printed-summer-dress.jpg';
// import home_img_24 from '../assets/img/41-new_default/printed-summer-dress.jpg';
// import home_img_25 from '../assets/img/44-new_default/printed-summer-dress.jpg';
// import home_img_26 from '../assets/img/44-large_default/printed-summer-dress.jpg';
// import home_img_27 from '../assets/img/45-new_default/printed-summer-dress.jpg';
// import home_img_28 from '../assets/img/52-new_default/faded-short-sleeves-tshirt.jpg';
// import home_img_29 from '../assets/img/52-large_default/faded-short-sleeves-tshirt.jpg';
// import home_img_30 from '../assets/img/53-new_default/faded-short-sleeves-tshirt.jpg';
// import home_img_31 from '../assets/img/56-new_default/printed-chiffon-dress.jpg';
// import home_img_32 from '../assets/img/56-large_default/printed-chiffon-dress.jpg';
// import home_img_33 from '../assets/img/57-new_default/printed-chiffon-dress.jpg';
// import home_img_34 from '../assets/img/32-new_default/printed-dress.jpg';
// import home_img_35 from '../assets/img/32-large_default/printed-dress.jpg';
// import home_img_36 from '../assets/img/33-new_default/printed-dress.jpg';
// import home_img_37 from '../assets/img/blocks/bn1.jpg';
// import home_img_38 from '../assets/img/blocks/bn2.jpg';
// import home_img_39 from '../assets/img/blocks/bn3.jpg';
import home_img_40 from '../assets/img/blocks/bn4.jpg';
// import axios from 'axios';

const SliderShowComponent  = lazy(() => import('../components/slider-show/SliderShow'));


const HomeComponent = () => {
    const home = JSON.parse(window.sessionStorage.getItem("HOME_DATA"));
    // const [homeData, setHomeData] = useState({});
    // let [sliderData, setSliderData] = useState([]);
    // let [headerImage, setHeaderImage] = useState(home['headerImg']);
    // console.log(home['headerImg']);
    // const navigation = useNavigate();
    // const home = use(messagePromise);
    const [sliderData, setSliderData] = useState(home.slider);
    const [headerImage, setHeaderImage] = useState(home.headerImg);
    // console.log("home['headerImg']", home);
    // useEffect(() => {
        
        // let mounted = true;
        // loadHome().then(res => {
        //     if(mounted) {
        //         setSliderData(res.data.home['slider'])
        //     }
        // });
        // return () => {
        //     mounted = false;
        // }
        // setHomeData(home);
        
        // setHomeData(home);
        // setSliderData(home['slider'] || []);
        // console.log(home);
        // console.log(home['slider']);
        // sliderData = home['slider'];
    // }, []);

    /**
     * Redirect to category detail
     * @param cateId 
     */
    // const onDetailClick = (cateId: string) => {
    //     const params = {_id: cateId};
    //     navigation('detail', {replace: true, state: params});
    //     navigation(0);
    // };
    return (
        <>
            <SliderShowComponent data={sliderData}/>
            <aside id="notifications">
                <div className="container"></div>
            </aside>
            {/* <!--=============== wrapper ===============--> */}
            <section id="wrapper" className="active_grid">
                <h2 style={{display: "none !important"}}>.</h2>

                <section id="content" className="page-home">
                    <div className="container">
                        <div className="banner_home3">
                            <div className="hover_banner">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-4 col-md-4 block">
                                        <a href="#"> <img className="img-responsive" src={headerImage[0]} alt="" /></a>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 col-md-4 block">
                                        <a href="#"> <img className="img-responsive" src={headerImage[1]} alt="" /></a>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 col-md-4 block">
                                        <a href="#"> <img className="img-responsive" src={headerImage[2]} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="static_content block">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="box-static_content">
                                        <div className="icon_block"><img className="img-responsive" src={home_img_1} alt="" /></div>
                                        <div className="content_text">
                                            <h3 className="title_font"><a href="#">Free shipping on oder over 500$</a></h3>
                                            <p>Duis luctus libero in quam convallis.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="box-static_content">
                                        <div className="icon_block"><img className="img-responsive" src={home_img_2} alt="" /></div>
                                        <div className="content_text">
                                            <h3 className="title_font"><a href="#">100% money back guarantee</a></h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-4">
                                    <div className="box-static_content">
                                        <div className="icon_block"><img className="img-responsive" src={home_img_3} alt="" /></div>
                                        <div className="content_text">
                                            <h3><a href="#">online support 24/7</a></h3>
                                            <p>Etiam ac purus at lorem commodo.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- MODULE Tab Cate Products Products --> */}
                        <div className="tab-category-container-slider tab-category horizontal_mode block">
                            <div className="tab-category-slider">
                                <div className="title_block">
                                    <div className="title_font title_back">
                                        New Arrivals
                                    </div>
                                    <h3 className="title_font">
                                        New Arrivals
                                    </h3>
                                </div>
                                <div className="title_block_ul">
                                    <ul className="tab_cates">
                                        <li rel="tab_14" className="active">Living room</li>
                                        <li rel="tab_15">Bed room</li>
                                        <li rel="tab_16">Kitchen</li>
                                        <li rel="tab_17">Accessories</li>
                                    </ul>
                                </div>
                                <div className="tab_cate_container">
                                    <div id="tab_14" className="tab_category_slider">
                                        <div className="row">
                                            <div className="tabcate_content carousel-grid owl-carousel">
                                                <div className="item">
                                                    <div className="item-inner">
                                                        <div className="product-miniature js-product-miniature" data-id-product="5" data-id-product-attribute="19" itemScope itemType="http://schema.org/Product">
                                                            <div className="left-product">
                                                                <a href="https://demo.fieldthemes.com/decor/home3/en/categories/5-19-printed-summer-dress.html#/1-size-s/16-color-yellow" className="thumbnail product-thumbnail">
                                                                    <span className="cover_image">
                                                                        <img
                                                                            src={home_img_4}
                                                                            data-full-size-image-url={home_img_5}
                                                                            alt=""
                                                                            width="370"
                                                                            height="370"
                                                                        />
                                                                    </span>
                                                                    <span className="hover_image">
                                                                        <img
                                                                            src={home_img_6}
                                                                            data-full-size-image-url={home_img_6}
                                                                            alt=""
                                                                            width="370"
                                                                            height="370"
                                                                        />
                                                                    </span>
                                                                </a>
                                                                <div className="conditions-box">
                                                                    <span className="new_product">New</span>
                                                                    <span className="sale_product">Sale</span>
                                                                </div>
                                                                <div className="button-action">
                                                                    <a href="javascript:void(0)" className="quick-view" data-link-action="quickview" title="Quick view">
                                                                        <i className="fa fa-eye"></i>
                                                                    </a>
                                                                    <form action="https://demo.fieldthemes.com/decor/home3/en/cart" method="post">
                                                                        <input type="hidden" name="token" value="328b550320902db31ea20486f39ebb65" />
                                                                        <input type="hidden" name="id_product" value="5" />
                                                                        <button className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                            <i className="fa fa-shopping-bag"></i>
                                                                        </button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                            <div className="right-product">
                                                                <div className="product-description">
                                                                    <div className="product_name">
                                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/categories/5-19-printed-summer-dress.html#/1-size-s/16-color-yellow">Consectetuer adipis elit.</a>
                                                                    </div>
                                                                    <div className="product-price-and-shipping">
                                                                        <span className="price">$28.98</span>

                                                                        <span className="regular-price">$30.50</span>
                                                                        <span className="price-percent-reduction">-5%</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-inner">
                                                        <div className="product-miniature js-product-miniature" data-id-product="6" data-id-product-attribute="31" itemScope itemType="http://schema.org/Product">
                                                            <div className="left-product">
                                                                <a href="https://demo.fieldthemes.com/decor/home3/en/home/6-31-printed-summer-dress.html#/1-size-s/16-color-yellow" className="thumbnail product-thumbnail">
                                                                    <span className="cover_image">
                                                                        <img
                                                                            src={home_img_7}
                                                                            data-full-size-image-url={home_img_8}
                                                                            alt=""
                                                                            width="370"
                                                                            height="370"
                                                                        />
                                                                    </span>
                                                                    <span className="hover_image">
                                                                        <img
                                                                            src={home_img_9}
                                                                            data-full-size-image-url={home_img_9}
                                                                            alt=""
                                                                            width="370"
                                                                            height="370"
                                                                        />
                                                                    </span>
                                                                </a>
                                                                <div className="conditions-box"></div>
                                                                <div className="button-action">
                                                                    <a href="javascript:void(0)" className="quick-view" data-link-action="quickview" title="Quick view">
                                                                        <i className="fa fa-eye"></i>
                                                                    </a>
                                                                    <form action="https://demo.fieldthemes.com/decor/home3/en/cart" method="post">
                                                                        <input type="hidden" name="token" value="328b550320902db31ea20486f39ebb65" />
                                                                        <input type="hidden" name="id_product" value="6" />
                                                                        <button className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                            <i className="fa fa-shopping-bag"></i>
                                                                        </button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                            <div className="right-product">
                                                                <div className="product-description">
                                                                    <div className="product_name"><a href="https://demo.fieldthemes.com/decor/home3/en/home/6-31-printed-summer-dress.html#/1-size-s/16-color-yellow">Nullam malesuada.</a></div>
                                                                    <div className="product-price-and-shipping">
                                                                        <span className="price">$30.50</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="item-inner">
                                                        <div className="product-miniature js-product-miniature" data-id-product="8" data-id-product-attribute="51" itemScope itemType="http://schema.org/Product">
                                                            <div className="left-product">
                                                                <a href="https://demo.fieldthemes.com/decor/home3/en/categories/8-51-faded-short-sleeves-tshirt.html#/1-size-s/13-color-orange" className="thumbnail product-thumbnail">
                                                                    <span className="cover_image">
                                                                        <img src={home_img_10}
                                                                            data-full-size-image-url={home_img_11}
                                                                            alt="" width="370" height="370"
                                                                        />
                                                                    </span>
                                                                    <span className="hover_image">
                                                                        <img src={home_img_12}
                                                                            data-full-size-image-url={home_img_12}
                                                                            alt="" width="370" height="370"
                                                                        />
                                                                    </span>
                                                                </a>
                                                                <div className="conditions-box"></div>
                                                                <div className="button-action">
                                                                    <a href="javascript:void(0)" className="quick-view" data-link-action="quickview" title="Quick view">
                                                                        <i className="fa fa-eye"></i>
                                                                    </a>
                                                                    <form action="https://demo.fieldthemes.com/decor/home3/en/cart" method="post">
                                                                        <input type="hidden" name="token" value="328b550320902db31ea20486f39ebb65" />
                                                                        <input type="hidden" name="id_product" value="8" />
                                                                        <button className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                            <i className="fa fa-shopping-bag"></i>
                                                                        </button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                            <div className="right-product">
                                                                <div className="product-description">
                                                                    <div className="product_name">
                                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/categories/8-51-faded-short-sleeves-tshirt.html#/1-size-s/13-color-orange">Printed Chiffon Dress</a>
                                                                    </div>
                                                                    <div className="product-price-and-shipping">
                                                                        <span className="price">$16.51</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-inner">
                                                        <div className="product-miniature js-product-miniature" data-id-product="7" data-id-product-attribute="34" itemScope itemType="http://schema.org/Product">
                                                            <div className="left-product">
                                                                <a href="https://demo.fieldthemes.com/decor/home3/en/home/7-34-printed-chiffon-dress.html#/1-size-s/16-color-yellow" className="thumbnail product-thumbnail">
                                                                    <span className="cover_image">
                                                                        <img src={home_img_13}
                                                                            data-full-size-image-url={home_img_14}
                                                                            alt="" width="370" height="370"
                                                                        />
                                                                    </span>
                                                                    <span className="hover_image">
                                                                        <img src={home_img_15}
                                                                            data-full-size-image-url={home_img_15}
                                                                            alt="" width="370" height="370"
                                                                        />
                                                                    </span>
                                                                </a>
                                                                <div className="conditions-box">
                                                                    <span className="new_product">New</span>
                                                                </div>
                                                                <div className="button-action">
                                                                    <a href="javascript:void(0)" className="quick-view" data-link-action="quickview" title="Quick view">
                                                                        <i className="fa fa-eye"></i>
                                                                    </a>
                                                                    <form action="https://demo.fieldthemes.com/decor/home3/en/cart" method="post">
                                                                        <input type="hidden" name="token" value="328b550320902db31ea20486f39ebb65" />
                                                                        <input type="hidden" name="id_product" value="7" />
                                                                        <button className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                            <i className="fa fa-shopping-bag"></i>
                                                                        </button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                            <div className="right-product">
                                                                <div className="product-description">
                                                                    <div className="product_name">
                                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/home/7-34-printed-chiffon-dress.html#/1-size-s/16-color-yellow">Non semper suscipit.</a>
                                                                    </div>
                                                                    <div className="product-price-and-shipping">
                                                                        <span className="price">$16.40</span>

                                                                        <span className="regular-price">$20.50</span>
                                                                        <span className="price-percent-reduction">-20%</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="item-inner">
                                                        <div className="product-miniature js-product-miniature" data-id-product="3" data-id-product-attribute="13" itemScope itemType="http://schema.org/Product">
                                                            <div className="left-product">
                                                                <a href="https://demo.fieldthemes.com/decor/home3/en/home/3-13-printed-dress.html#/1-size-s/13-color-orange" className="thumbnail product-thumbnail">
                                                                    <span className="cover_image">
                                                                        <img src={home_img_16}
                                                                            data-full-size-image-url={home_img_17}
                                                                            alt="" width="370" height="370"
                                                                        />
                                                                    </span>
                                                                    <span className="hover_image">
                                                                        <img src={home_img_18}
                                                                            data-full-size-image-url={home_img_18}
                                                                            alt="" width="370" height="370"
                                                                        />
                                                                    </span>
                                                                </a>
                                                                <div className="conditions-box">
                                                                    <span className="sale_product">Sale</span>
                                                                </div>
                                                                <div className="button-action">
                                                                    <a href="javascript:void(0)" className="quick-view" data-link-action="quickview" title="Quick view">
                                                                        <i className="fa fa-eye"></i>
                                                                    </a>
                                                                    <form action="https://demo.fieldthemes.com/decor/home3/en/cart" method="post">
                                                                        <input type="hidden" name="token" value="328b550320902db31ea20486f39ebb65" />
                                                                        <input type="hidden" name="id_product" value="3" />
                                                                        <button className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                            <i className="fa fa-shopping-bag"></i>
                                                                        </button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                            <div className="right-product">
                                                                <div className="product-description">
                                                                    <div className="product_name"><a href="https://demo.fieldthemes.com/decor/home3/en/home/3-13-printed-dress.html#/1-size-s/13-color-orange">Curabitur sit amet enim</a></div>
                                                                    <div className="product-price-and-shipping">
                                                                        <span className="price">$25.99</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-inner">
                                                        <div className="product-miniature js-product-miniature" data-id-product="10" data-id-product-attribute="60" itemScope itemType="http://schema.org/Product">
                                                            <div className="left-product">
                                                                <a href="https://demo.fieldthemes.com/decor/home3/en/home/10-60-printed-dress.html#/1-size-s/13-color-orange" className="thumbnail product-thumbnail">
                                                                    <span className="cover_image">
                                                                        <img src={home_img_19}
                                                                            data-full-size-image-url={home_img_20}
                                                                            alt="" width="370" height="370"
                                                                        />
                                                                    </span>
                                                                    <span className="hover_image">
                                                                        <img src={home_img_21}
                                                                            data-full-size-image-url={home_img_21}
                                                                            alt="" width="370" height="370"
                                                                        />
                                                                    </span>
                                                                </a>
                                                                <div className="conditions-box"></div>
                                                                <div className="button-action">
                                                                    <a href="javascript:void(0)" className="quick-view" data-link-action="quickview" title="Quick view">
                                                                        <i className="fa fa-eye"></i>
                                                                    </a>
                                                                    <form action="https://demo.fieldthemes.com/decor/home3/en/cart" method="post">
                                                                        <input type="hidden" name="token" value="328b550320902db31ea20486f39ebb65" />
                                                                        <input type="hidden" name="id_product" value="10" />
                                                                        <button className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                            <i className="fa fa-shopping-bag"></i>
                                                                        </button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                            <div className="right-product">
                                                                <div className="product-description">
                                                                    <div className="product_name"><a href="https://demo.fieldthemes.com/decor/home3/en/home/10-60-printed-dress.html#/1-size-s/13-color-orange">Printed Summer Dress</a></div>
                                                                    <div className="product-price-and-shipping">
                                                                        <span className="price">$25.99</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /MODULE Tab Cate Products Products --> */}

                        {/* <!-- /MODULE Tab Cate Products Products --> */}

                        <div className="banner_home2">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6 block">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="img_banner1">
                                                <div className="icon-border1"></div>
                                                <div className="icon-border2"></div>
                                                <a href="#"> <img className="img-responsive" src={home_img_40} alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 block">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="banner-text1">
                                                <h3><a href="#">Classic Desk Lamp</a></h3>
                                                <p>Curabitur sit amet enim sodales nisl efficitur porttitor. Donec ac turpis diam. Mauris interdum magna eu neque convallis.</p>
                                                <a className="title_font shop-now1" href="#">Shop now !</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block-newsletter">
                            <h3 className="title_font">Sign up and get 20% off</h3>
                            <p>Be the first to know about the latest furniture new and get exclusive offers</p>
                            <div className="footer-newsletter">
                                <form action="https://demo.fieldthemes.com/decor/home3/en/#footer" method="post">
                                    <div className="input-wrapper">
                                        <input name="email" type="text" value="" placeholder="Enter your email" />
                                    </div>
                                    <button className="button-newletter" type="submit" name="submitNewsletter">
                                        Subscribe
                                    </button>
                                    <input type="hidden" name="action" value="0" />
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            {/* <!-- wrapper end --> */}
        </>
    );
};

export default HomeComponent;
