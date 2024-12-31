import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


import img_slide_show_1 from '../../assets/img/slideshow/slider-111.jpg';
import img_slide_show_2 from '../../assets/img/slideshow/slider-222.jpg';
import img_slide_show_3 from '../../assets/img/slideshow/slider-333.jpg';
import home_img_4 from '../../assets/img/40-new_default/printed-summer-dress.jpg';
import home_img_5 from '../../assets/img/40-large_default/printed-summer-dress.jpg';
import home_img_6 from '../../assets/img/41-new_default/printed-summer-dress.jpg';
import home_img_7 from '../../assets/img/44-new_default/printed-summer-dress.jpg';
import home_img_8 from '../../assets/img/44-large_default/printed-summer-dress.jpg';
import home_img_9 from '../../assets/img/45-new_default/printed-summer-dress.jpg';
import home_img_10 from '../../assets/img/52-new_default/faded-short-sleeves-tshirt.jpg';
import home_img_11 from '../../assets/img/52-large_default/faded-short-sleeves-tshirt.jpg';
import home_img_12 from '../../assets/img/53-new_default/faded-short-sleeves-tshirt.jpg';
import home_img_13 from '../../assets/img/56-new_default/printed-chiffon-dress.jpg';
import home_img_14 from '../../assets/img/56-large_default/printed-chiffon-dress.jpg';
import home_img_15 from '../../assets/img/57-new_default/printed-chiffon-dress.jpg';
import home_img_16 from '../../assets/img/32-new_default/printed-dress.jpg';
import home_img_17 from '../../assets/img/32-large_default/printed-dress.jpg';
import home_img_18 from '../../assets/img/33-new_default/printed-dress.jpg';
import home_img_19 from '../../assets/img/68-new_default/printed-dress.jpg';
import home_img_20 from '../../assets/img/68-large_default/printed-dress.jpg';
import home_img_21 from '../../assets/img/69-new_default/printed-dress.jpg';
import home_img_37 from '../../assets/img/blocks/bn1.jpg';
import home_img_38 from '../../assets/img/blocks/bn2.jpg';
import home_img_39 from '../../assets/img/blocks/bn3.jpg';
import { TfiPencilAlt } from 'react-icons/tfi';
import { text } from 'body-parser';

const AdminHome = () => {
    const {state} = useLocation();
    const [section, setSection] = useState('slider');
    
    useEffect(() => {
        if(state) {
            setSection(state._section);
        }
    });

    return (
        <>
            {/* <!-- INNER PAGE BANNER --> */}
            <div className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center" data-stellar-background-ratio="0.5">
            	<div className="overlay-main bg-black opacity-07"></div>
                <div className="container">
                    <div className="wt-bnr-inr-entry">
                    	<div className="banner-title-outer">
                        	<div className="banner-title-name">
                        		<h2 className="text-white text-uppercase letter-spacing-5 font-18 font-weight-300">Architects with a different approach.</h2>
                            </div>
                        </div>
                        {/* <!-- BREADCRUMB ROW --> */}
                        <div className="p-tb20">
                            <div className="">
                                <ul className="wt-breadcrumb breadcrumb-style-2">
                                    <li><a href="javascript:void(0);">Home</a></li>
                                    <li>News listing</li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- BREADCRUMB ROW END --> */}
                    </div>
                </div>
            </div>
            <div className="p-t30"></div>
            {/* <!-- INNER PAGE BANNER END --> */}
            <div className="row" style={{display: (section === 'slider' ? 'block' : 'none')}}>
                <div className="col-md-12">
                    <div id="field_slideshow">
                        <div className="field-main-slider block" style={{overflow: "hidden"}}>
                            <div id="insideslider_mod" className="outer-slide" style={{width: "1920px", height: "800px"}}>
                                {/* <div className="loading">
                                    <div className="bg-loading"></div>
                                    <div className="icon-loading"></div>
                                </div> */}
                                <div data-u="slides" style={{width: "1920px", height: "800px"}}>
                                    <div className="field-main-slider_1">
                                        <a href="#">
                                            <img className="img-slider" src={img_slide_show_1} alt="" data-u="image" />
                                        </a>
                                        <div className="box-slider">
                                            <div className="large-slide-title title_font" data-u="caption" data-t="T-*IB" data-t2="ZML|TR" data-d="-300">
                                                Retains soft !
                                            </div>
                                            <div className="big-slide-title title_font" data-u="caption" data-t="ZM*WVR|LB" data-t2="WVC|R" data-d="-300">
                                                Comfort liner chair
                                            </div>
                                            <div className="small-slide-title" data-u="caption" data-t="TORTUOUS|HL" data-t2="JDN|B" data-d="-300">
                                                <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
                                            </div>
                                            <div className="div-slide-button shop_now" data-u="caption" data-t="B-R*">
                                                <a className="slide-button title_font" href="#">
                                                    Shop now !
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="field-main-slider_2">
                                        <a href="#">
                                            <img className="img-slider" src={img_slide_show_2} alt="" data-u="image" />
                                        </a>
                                        <div className="box-slider">
                                            <div className="large-slide-title title_font" data-u="caption" data-t="ZM*JUP1|T" data-t2="FLTTRWN|LT">
                                                THE WOW FACTOR
                                            </div>
                                            <div className="big-slide-title title_font" data-u="caption" data-t="ZM*JUP1|T" data-t2="FLTTRWN|LT">
                                                STATEMENT WING CHAIR
                                            </div>
                                            <div className="small-slide-title" data-u="caption" data-t="ZM*JUP1|L" data-t2="TORTUOUS|HL">
                                                <h3>FOR YOUR LIVING SPACE</h3>
                                            </div>
                                            <div className="div-slide-button shop_now" data-u="caption" data-t="ZM*JUP1|B">
                                                <a className="slide-button title_font" href="#">
                                                    Shop now !
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="field-main-slider_3">
                                        <a href="#">
                                            <img className="img-slider" src={img_slide_show_3} alt="" data-u="image" />
                                        </a>
                                        <div className="box-slider">
                                            <div className="large-slide-title title_font" data-u="caption" data-t="ZM*WVR|RT" data-t2="WVC|B" data-d="-300">
                                                SUMMER SALE
                                            </div>
                                            <div className="big-slide-title title_font" data-u="caption" data-t="ZM*WVR|LB" data-t2="WVC|T" data-d="-300">
                                                UP TO 25% OFF
                                            </div>
                                            <div className="small-slide-title" data-u="caption" data-t="DDGDANCE|RB" data-t2="WVC|T" data-d="-300">
                                                <h3>FURNITURE BRANDS</h3>
                                            </div>
                                            <div className="div-slide-button shop_now" data-u="caption" data-t="ZM*WVR|LB" data-t2="WVC|T" data-d="-300">
                                                <a className="slide-button title_font" href="#">
                                                    Shop now !
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-u="navigator">
                                    <div data-u="prototype"></div>
                                </div>
                                <span data-u="arrowleft"><i className="fa fa-angle-left"></i></span>
                                <span data-u="arrowright"><i className="fa fa-angle-right"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <section className="get-in-touch">
                        <form className="contact-form row">
                            <div className="form-field col-lg-12">
                                <input id="categoryType" name="categoryType" className="input-text js-input" type="text" value="Retains soft !" />
                                <label className="label" htmlFor="categoryType">Line Text 1</label>
                            </div>
                            <div className="form-field col-lg-12">
                                <input id="name" name="name" className="input-text js-input" type="text" value="Comfort liner chair" />
                                <label className="label" htmlFor="name">Line Text 2</label>
                            </div>
                            <div className="form-field col-lg-12">
                                <input id="subTitle" name="subTitle" className="input-text js-input" type="text" value="Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis."/>
                                <label className="label" htmlFor="subTitle">Line Text 3</label>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
            <div className="row" style={{display: (section === 'header_image' ? 'block' : 'none')}}>
                <div className="col-md-12 admin">
                    <div className="banner_home3">
                        <div className="hover_banner">
                            <div className="row">
                                <div className="col-xs-12 col-sm-4 col-md-4 block">
                                    <a href="javascript:void(0);"> <img className="img-responsive" src={home_img_37} alt="" /></a>
                                    <div className="edit-btn" >
                                        <TfiPencilAlt />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 col-md-4 block">
                                    <a href="javascript:void(0);"> <img className="img-responsive" src={home_img_38} alt="" /></a>
                                    <div className="edit-btn" >
                                        <TfiPencilAlt />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 col-md-4 block">
                                    <a href="javascript:void(0);"> <img className="img-responsive" src={home_img_39} alt="" /></a>
                                    <div className="edit-btn" >
                                        <TfiPencilAlt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{display: (section === 'new_product' ? 'block' : 'none')}}>
                <div className="col-md-12 admin">
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
                </div>
            </div>
        </>
    );
}

export default AdminHome;