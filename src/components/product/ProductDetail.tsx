import axios from 'axios';
import jQuery from 'jquery';
import bg_img from '../../assets/images/bg/20.jpg';
import product_detail_img_1 from '../../assets/img/image1.png';
// import product_detail_img_2 from '../../assets/images/folio/thumbs/3.jpg';
import background  from '../../assets/img/front/bg/back-1-1.jpg';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ProductEntity } from '../../model/product';

// Async function to fetch category data by id
const loadCategoryById = async (id: string) => {
    return await axios.get('/api/getCategoryById', {
        params: {
          _id: id
        }
    });
};

// Create the function
// export function AddLibrary(urlOfTheLibrary: string): any {
//     const script = document.createElement("script");
//     script.src = urlOfTheLibrary;
//     script.type = 'text/javascript';
//     script.async = true;
//     script.defer = false;
//     script.crossOrigin = "anonymous";
//     document.body.appendChild(script);
// }

const ProductDetail = () => {
    const productEntity: ProductEntity = {
        _id: '',
        index: 1,
        cateId: '',
        categoryType: '',
        imgName: '',
        name: '',
        subTitle: '',
        imageBase64Data: '',
        description: ''
    };
    const [productDetail, setProductDetail] = useState(productEntity);
    const {state} = useLocation();
    const [imageData, setImageData] = useState(null);

    const divRef = useRef(null);

    useEffect(() => {
        console.log('cateId');
        
        setTimeout(function () { 
            window?.applyElevateZoom();
        }, 500);
        // window?.alertHello?.();
        // const loadScript = async() => {
        //     await AddLibrary('./assets/js/product-detail.js');
        // }
        // loadScript();
        // console.log('cateId', state._id);
        // loadCategoryById(state._id).then(res => {
        //     Object.assign(productEntity, res.data.category);
        //     setProductDetail(productEntity);
        //     if(productDetail) {
        //         setImageData(productDetail.imageBase64Data);
        //     }
        // });
    }, []);
    return (
        <>
            {/* <!--=============== wrapper ===============--> */}
            <section id="wrapper" className="active_grid">
                {/* <h2 style={{display: 'none !important'}}>.</h2> */}
                <div className="back_ct" style={{ backgroundImage: `url(${background})` }}>
                    <div className="container">
                        <nav data-depth="3" className="breadcrumb hidden-sm-down">
                            <ol itemScope itemType="http://schema.org/BreadcrumbList">
                                <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                                    <a itemProp="item" href="https://demo.fieldthemes.com/decor/home1/en/">
                                        <span itemProp="name">Home</span>
                                    </a>
                                    <meta itemProp="position" content="1" />
                                </li>
                                <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                                    <a itemProp="item" href="https://demo.fieldthemes.com/decor/home1/en/12-categories">
                                        <span itemProp="name">Categories</span>
                                    </a>
                                    <meta itemProp="position" content="2" />
                                </li>
                                <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                                    <a itemProp="item" href="https://demo.fieldthemes.com/decor/home1/en/categories/5-printed-summer-dress.html">
                                        <span itemProp="name">Consectetuer adipis elit.</span>
                                    </a>
                                    <meta itemProp="position" content="3" />
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div id="content-wrapper" className="right-column col-xs-12 col-sm-8 col-md-9">
                            <section id="main" itemScope itemType="https://schema.org/Product">
                                <meta itemProp="url" content="https://demo.fieldthemes.com/decor/home1/en/categories/5-19-printed-summer-dress.html#/1-size-s/16-color-yellow" />
                                {/* <h2 style={{display: 'none !important'}}>.</h2> */}
                                <div className="row">
                                    <div className="col-md-6">
                                        <section className="page-content horizontal_mode" id="content">
                                            <div className="conditions-box">
                                                <span className="new_product">New</span>
                                                <span className="sale_product">Sale</span>
                                            </div>

                                            <div className="images-container">
                                                <div className="product-cover">
                                                    <img className="js-qv-product-cover img-responsive"
                                                         src="https://demo.fieldthemes.com/decor/home1/40-large_default/printed-summer-dress.jpg"
                                                         alt="" title="" style={{maxWidth: "100%", "height": "auto"}}
                                                         itemProp="image" width="800" height="800"
                                                    />
                                                    <div className="layer hidden-sm-down" data-toggle="modal" data-target="#product-modal">
                                                        <i className="material-icons zoom-in">&#xE8FF;</i>
                                                    </div>
                                                </div>

                                                <div className="js-qv-mask mask">
                                                    <div className="product-images product-images-33650576 js-qv-product-images carousel-grid owl-carousel">
                                                        <div className="thumb-container">
                                                            <img className="thumb js-thumb selected"
                                                                    data-image-medium-src="https://demo.fieldthemes.com/decor/home1/40-medium_default/printed-summer-dress.jpg"
                                                                    data-image-large-src="https://demo.fieldthemes.com/decor/home1/40-large_default/printed-summer-dress.jpg"
                                                                    src="https://demo.fieldthemes.com/decor/home1/40-small_default/printed-summer-dress.jpg"
                                                                    alt="" title="" width="100" itemProp="image"
                                                            />
                                                        </div>
                                                        <div className="thumb-container">
                                                            <img className="thumb js-thumb"
                                                                    data-image-medium-src="https://demo.fieldthemes.com/decor/home1/41-medium_default/printed-summer-dress.jpg"
                                                                    data-image-large-src="https://demo.fieldthemes.com/decor/home1/41-large_default/printed-summer-dress.jpg"
                                                                    src="https://demo.fieldthemes.com/decor/home1/41-small_default/printed-summer-dress.jpg"
                                                                    alt="" title="" width="100" itemProp="image"
                                                            />
                                                        </div>
                                                        <div className="thumb-container">
                                                            <img className="thumb js-thumb"
                                                                    data-image-medium-src="https://demo.fieldthemes.com/decor/home1/42-medium_default/printed-summer-dress.jpg"
                                                                    data-image-large-src="https://demo.fieldthemes.com/decor/home1/42-large_default/printed-summer-dress.jpg"
                                                                    src="https://demo.fieldthemes.com/decor/home1/42-small_default/printed-summer-dress.jpg"
                                                                    alt="" title="" width="100" itemProp="image"
                                                            />
                                                        </div>
                                                        <div className="thumb-container">
                                                            <img className="thumb js-thumb"
                                                                    data-image-medium-src="https://demo.fieldthemes.com/decor/home1/43-medium_default/printed-summer-dress.jpg"
                                                                    data-image-large-src="https://demo.fieldthemes.com/decor/home1/43-large_default/printed-summer-dress.jpg"
                                                                    src="https://demo.fieldthemes.com/decor/home1/43-small_default/printed-summer-dress.jpg"
                                                                    alt="" title="" width="100" itemProp="image"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div className="col-md-6">
                                        <h1 className="h1" itemProp="name">Consectetuer adipis elit.</h1>

                                        <div className="product-information">
                                            <div id="product-description-short-5" itemProp="description">
                                                <p>Long printed dress with thin adjustable straps. V-neckline and wiring under the bust with ruffles at the bottom of the dress.</p>
                                            </div>

                                            <div className="product-prices">
                                                <div className="product-discount">
                                                    <span className="regular-price">$30.50</span>
                                                </div>

                                                <div className="product-price h5 has-discount" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                                                    <link itemProp="availability" href="https://schema.org/InStock" />
                                                    <meta itemProp="priceCurrency" content="USD" />

                                                    <div className="current-price">
                                                        <span itemProp="price" content="28.98">$28.98</span>

                                                        <span className="discount discount-percentage">Save 5%</span>
                                                    </div>
                                                </div>

                                                <div className="tax-shipping-delivery-label"></div>
                                            </div>

                                            <div className="product-actions">
                                                {/* <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post" id="add-to-cart-or-refresh"> */}
                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
                                                    <input type="hidden" name="id_product" value="5" id="product_page_product_id" />
                                                    <input type="hidden" name="id_customization" value="0" id="product_customization_id" />

                                                    <div className="product-variants">
                                                        <div className="clearfix product-variants-item">
                                                            <span className="control-label">Size</span>
                                                            <select id="group_1" data-product-attribute="1" name="group[1]">
                                                                <option value="1" title="S" selected={true}>S</option>
                                                                <option value="2" title="M">M</option>
                                                                <option value="3" title="L">L</option>
                                                            </select>
                                                        </div>
                                                        <div className="clearfix product-variants-item">
                                                            <span className="control-label">Color</span>
                                                            <ul id="group_3">
                                                                <li className="pull-xs-left input-container">
                                                                    <input className="input-color" type="radio" data-product-attribute="3" name="group[3]" value="11" />
                                                                    <span className="color" style={{backgroundColor: "#434a54"}}><span className="sr-only">Black</span></span>
                                                                </li>
                                                                <li className="pull-xs-left input-container">
                                                                    <input className="input-color" type="radio" data-product-attribute="3" name="group[3]" value="13" />
                                                                    <span className="color" style={{backgroundColor: "#f39c11"}}><span className="sr-only">Orange</span></span>
                                                                </li>
                                                                <li className="pull-xs-left input-container">
                                                                    <input className="input-color" type="radio" data-product-attribute="3" name="group[3]" value="14" />
                                                                    <span className="color" style={{backgroundColor: "#5d9cec"}}><span className="sr-only">Blue</span></span>
                                                                </li>
                                                                <li className="pull-xs-left input-container">
                                                                    <input className="input-color" type="radio" data-product-attribute="3" name="group[3]" value="16" checked={true} />
                                                                    <span className="color" style={{backgroundColor: "#f1c40f"}}><span className="sr-only">Yellow</span></span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <section className="product-discounts"></section>

                                                    <div className="product-add-to-cart">
                                                        <div className="product-quantity">
                                                            <div className="qty">
                                                                <span className="control-label">Quantity</span>
                                                                <input type="text" name="qty" id="quantity_wanted" value="1" className="input-group" min="1" />
                                                            </div>
                                                            <div className="add">
                                                                <button className="btn btn-primary add-to-cart" type="button">
                                                                    <i className="fa fa-shopping-cart shopping-cart"></i>
                                                                    Add to cart
                                                                </button>

                                                                <span id="product-availability">
                                                                    <i className="material-icons product-available">&#xE5CA;</i>
                                                                    In stock
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix"></div>

                                                        <p className="product-minimal-quantity"></p>
                                                    </div>

                                                    <div className="social-sharing">
                                                        <span>Share</span>
                                                        <ul>
                                                            <li className="facebook icon-gray">
                                                                <a href="http://www.facebook.com/sharer.php?u=https://demo.fieldthemes.com/decor/home1/en/categories/5-printed-summer-dress.html"
                                                                   className="text-hide" title="Share" target="_blank">
                                                                    Share
                                                                </a>
                                                            </li>
                                                            <li className="twitter icon-gray">
                                                                <a href="https://twitter.com/intent/tweet?text=Consectetuer adipis elit. https://demo.fieldthemes.com/decor/home1/en/categories/5-printed-summer-dress.html"
                                                                   className="text-hide" title="Tweet" target="_blank">
                                                                    Tweet
                                                                </a>
                                                            </li>
                                                            <li className="googleplus icon-gray">
                                                                <a
                                                                    href="https://plus.google.com/share?url=https://demo.fieldthemes.com/decor/home1/en/categories/5-printed-summer-dress.html"
                                                                    className="text-hide"
                                                                    title="Google+"
                                                                    target="_blank"
                                                                >
                                                                    Google+
                                                                </a>
                                                            </li>
                                                            <li className="pinterest icon-gray">
                                                                <a
                                                                    href="http://www.pinterest.com/pin/create/button/?media=https://demo.fieldthemes.com/decor/home1/40/printed-summer-dress.jpg&amp;url=https://demo.fieldthemes.com/decor/home1/en/categories/5-printed-summer-dress.html"
                                                                    className="text-hide"
                                                                    title="Pinterest"
                                                                    target="_blank"
                                                                >
                                                                    Pinterest
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <input className="product-refresh ps-hidden-by-js" name="refresh" type="submit" value="Refresh" />
                                                {/* </form> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tabs">
                                        <ul className="nav nav-tabs">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="tab" href="#description">Description</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#product-details">Product Details</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="tab-content">
                                            <div className="tab-pane fade in active" id="description">
                                                <div className="product-description">
                                                    <p>
                                                        Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full
                                                        ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the
                                                        beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!
                                                    </p>
                                                </div>
                                                <div className="tab-pane fade" id="product-details"
                                                    data-product='{"id_shop_default":"1","id_manufacturer":"1","id_supplier":"1","reference":"demo_5","is_virtual":"0","id_category_default":"12","on_sale":"1","online_only":"0","ecotax":"0.000000","minimal_quantity":"1","price":28.975,"unity":null,"unit_price_ratio":"0.000000","additional_shipping_cost":"0.00","customizable":"0","text_fields":"0","uploadable_files":"0","redirect_type":"404","id_type_redirected":"0","available_for_order":"1","available_date":null,"show_condition":"1","condition":"new","show_price":"1","indexed":"1","visibility":"both","cache_default_attribute":"19","advanced_stock_management":"0","date_add":"2017-08-03 04:30:23","date_upd":"2017-08-16 10:30:50","pack_stock_type":"3","meta_description":null,"meta_keywords":null,"meta_title":null,"link_rewrite":"printed-summer-dress","name":"Consectetuer adipis elit.","description":"&lt;p&gt;Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman&#039;s wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!&lt;\/p&gt;","description_short":"&lt;p&gt;Long printed dress with thin adjustable straps. V-neckline and wiring under the bust with ruffles at the bottom of the dress.&lt;\/p&gt;","available_now":"In stock","available_later":null,"id":5,"id_product":5,"out_of_stock":2,"new":1,"id_product_attribute":19,"quantity_wanted":1,"extraContent":[],"allow_oosp":0,"category":"categories","category_name":"Categories","link":"https:\/\/demo.fieldthemes.com\/decor\/home1\/en\/categories\/5-printed-summer-dress.html","attribute_price":0,"price_tax_exc":28.98,"price_without_reduction":30.5,"reduction":1.525,"specific_prices":{"id_specific_price":"1","id_specific_price_rule":"0","id_cart":"0","id_product":"5","id_shop":"0","id_shop_group":"0","id_currency":"0","id_country":"0","id_group":"0","id_customer":"0","id_product_attribute":"0","price":"-1.000000","from_quantity":"1","reduction":"0.050000","reduction_tax":"1","reduction_type":"percentage","from":"0000-00-00 00:00:00","to":"0000-00-00 00:00:00","score":"32"},"quantity":300,"quantity_all_versions":3600,"id_image":"en-default","features":[{"name":"Compositions","value":"Viscose","id_feature":"5"},{"name":"Styles","value":"Casual","id_feature":"6"},{"name":"Properties","value":"Maxi Dress","id_feature":"7"}],"attachments":[],"virtual":0,"pack":0,"packItems":[],"nopackprice":0,"customization_required":false,"attributes":{"1":{"id_attribute":"1","id_attribute_group":"1","name":"S","group":"Size","reference":null,"ean13":null,"isbn":null,"upc":null},"3":{"id_attribute":"16","id_attribute_group":"3","name":"Yellow","group":"Color","reference":null,"ean13":null,"isbn":null,"upc":null}},"rate":0,"tax_name":"","ecotax_rate":0,"unit_price":0,"customizations":{"fields":[]},"id_customization":0,"is_customizable":false,"show_quantities":true,"quantity_label":"Items","quantity_discounts":[],"customer_group_discount":0}'
                                                >
                                                    <div className="product-manufacturer">
                                                        <a href="https://demo.fieldthemes.com/decor/home1/en/1_brand1">
                                                            <img src="https://demo.fieldthemes.com/decor/home1/img/m/1.jpg" className="img img-thumbnail manufacturer-logo" />
                                                        </a>
                                                    </div>
                                                    <div className="product-reference">
                                                        <label className="label">Reference </label>
                                                        <span itemProp="sku">demo_5</span>
                                                    </div>
                                                    <div className="product-quantities">
                                                        <label className="label">In stock</label>
                                                        <span>300 Items</span>
                                                    </div>
                                                    <div className="product-out-of-stock"></div>
                                                    <section className="product-features">
                                                        <h3 className="h6">Data sheet</h3>
                                                        <dl className="data-sheet">
                                                            <dt className="name">Compositions</dt>
                                                            <dd className="value">Viscose</dd>
                                                            <dt className="name">Styles</dt>
                                                            <dd className="value">Casual</dd>
                                                            <dt className="name">Properties</dt>
                                                            <dd className="value">Maxi Dress</dd>
                                                        </dl>
                                                    </section>

                                                    <div className="product-condition">
                                                        <label className="label">Condition </label>
                                                        <link itemProp="itemCondition" href="https://schema.org/NewCondition" />
                                                        <span>New product</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div id="right-column" className="col-xs-12 col-sm-4 col-md-3">
                            {/* <!-- MODULE News Products Products --> */}
                            <div className="special_block_right horizontal_mode clearfix">
                                <h4 className="title_block title_font">
                                    <a href="https://demo.fieldthemes.com/decor/home1/en/prices-drop" title="viewed products">
                                        viewed products
                                    </a>
                                </h4>

                                <div className="row">
                                    <div className="special_products carousel-grid owl-carousel">
                                        {/* <!--Number Row--> */}
                                        <div className="item">
                                            <div className="item-inner">
                                                <div className="product-miniature js-product-miniature" data-id-product="5" data-id-product-attribute="19" itemScope itemType="http://schema.org/Product">
                                                    <div className="left-product">
                                                        <a href="https://demo.fieldthemes.com/decor/home1/en/categories/5-19-printed-summer-dress.html#/1-size-s/16-color-yellow" 
                                                           className="thumbnail product-thumbnail">
                                                            <span className="cover_image">
                                                                <img src="https://demo.fieldthemes.com/decor/home1/40-home_default/printed-summer-dress.jpg"
                                                                     data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/40-large_default/printed-summer-dress.jpg"
                                                                     alt="" width="270" height="270" />
                                                            </span>
                                                            <span className="hover_image">
                                                                <img src="https://demo.fieldthemes.com/decor/home1/41-home_default/printed-summer-dress.jpg"
                                                                     data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/41-home_default/printed-summer-dress.jpg"
                                                                     alt="" width="270" height="270" />
                                                            </span>
                                                        </a>
                                                        <div className="conditions-box">
                                                            <span className="new_product"><span>New</span></span>
                                                            <span className="sale_product"><span>Sale</span></span>
                                                        </div>
                                                        <div className="button-action">
                                                            <a href="javascript:void(0)" className="quick-view" data-link-action="quickview" title="Quick view">
                                                                <i className="fa fa-search"></i>
                                                            </a>
                                                            <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
                                                                <input type="hidden" name="id_product" value="5" />
                                                                <button title="Add to cart" className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                    <i className="fa fa-shopping-bag"></i>
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="right-product">
                                                        <div className="product-description">
                                                            <div className="product_name">
                                                                <a href="https://demo.fieldthemes.com/decor/home1/en/categories/5-19-printed-summer-dress.html#/1-size-s/16-color-yellow">Consectetuer adipis elit.</a>
                                                            </div>
                                                            <div className="prod_fat">
                                                                <div className="product-price-and-shipping">
                                                                    <span className="price">$28.98</span>

                                                                    <span className="regular-price">$30.50</span>
                                                                    <span className="price-percent-reduction">-5%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="item">
                                            <div className="item-inner">
                                                <div className="product-miniature js-product-miniature" data-id-product="7" data-id-product-attribute="34" itemScope itemType="http://schema.org/Product">
                                                    <div className="left-product">
                                                        <a href="https://demo.fieldthemes.com/decor/home1/en/home/7-34-printed-chiffon-dress.html#/1-size-s/16-color-yellow" className="thumbnail product-thumbnail">
                                                            <span className="cover_image">
                                                                <img
                                                                    src="https://demo.fieldthemes.com/decor/home1/56-home_default/printed-chiffon-dress.jpg"
                                                                    data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/56-large_default/printed-chiffon-dress.jpg"
                                                                    alt=""
                                                                    width="270"
                                                                    height="270"
                                                                />
                                                            </span>
                                                            <span className="hover_image">
                                                                <img
                                                                    src="https://demo.fieldthemes.com/decor/home1/57-home_default/printed-chiffon-dress.jpg"
                                                                    data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/57-home_default/printed-chiffon-dress.jpg"
                                                                    alt=""
                                                                    width="270"
                                                                    height="270"
                                                                />
                                                            </span>
                                                        </a>
                                                        <div className="conditions-box">
                                                            <span className="new_product"><span>New</span></span>
                                                        </div>

                                                        <div className="button-action">
                                                            <a href="javascript:void(0)" className="quick-view" data-link-action="quickview" title="Quick view">
                                                                <i className="fa fa-search"></i>
                                                            </a>
                                                            <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
                                                                <input type="hidden" name="id_product" value="7" />
                                                                <button title="Add to cart" className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                    <i className="fa fa-shopping-bag"></i>
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="right-product">
                                                        <div className="product-description">
                                                            <div className="product_name"><a href="https://demo.fieldthemes.com/decor/home1/en/home/7-34-printed-chiffon-dress.html#/1-size-s/16-color-yellow">Non semper suscipit.</a></div>
                                                            <div className="prod_fat">
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
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- /MODULE News Products --> */}
                            <div className="field-slideshow-container">
                                <div className="flexslider field-nivoslider">
                                    <div className="field-loading"></div>
                                    <div id="field-slideshow-home" className="slides">
                                        <a href="#"><img className="display: none;" src="https://demo.fieldthemes.com/decor/home1/modules/fieldbannerslider/images/slider333-568.jpg" alt="" title="#htmlcaption1" /></a>
                                        <a href="#"><img className="display: none;" src="https://demo.fieldthemes.com/decor/home1/modules/fieldbannerslider/images/slider222-251.jpg" alt="" title="#htmlcaption2" /></a>
                                        <a href="#"><img className="display: none;" src="https://demo.fieldthemes.com/decor/home1/modules/fieldbannerslider/images/slider111-247.jpg" alt="" title="#htmlcaption3" /></a>
                                    </div>
                                </div>
                                <div id="tags_block_left" className="block tags_block">
                                    <h3 className="title_block title_font">Popular Tags</h3>
                                    <div className="block_content">
                                        <a href="#" title="Girl"> Girl</a> <a href="#" title="Women">Women</a> <a href="#" title="Men"> Men</a> <a href="#" title="Handmade"> Handmade</a> <a href="#" title="Food"> Food</a>
                                        <a href="#" title="Kids">Kids</a> <a href="#" title=" Natural"> Natural</a> <a href="#" title="Healthy "> Healthy </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="tab-category-container-slider_2 tab-category horizontal_mode">
                        <div className="tab-category-slider_2">
                            <div className="title_block">
                                <div className="title_font title_back">
                                    Related products
                                </div>
                                <h3 className="title_font">
                                    Related products
                                </h3>
                            </div>
                            <div className="title_block_ul">
                                <ul className="tab_cates">
                                    <li rel="tab_2_14" className="active">Living room</li>
                                    <li rel="tab_2_15">Bed room</li>
                                    <li rel="tab_2_16">Kitchen</li>
                                    <li rel="tab_2_17">Accessories</li>
                                </ul>
                            </div>
                            <div className="tab_cate_container">
                                <div id="tab_2_14" className="tab_category_slider_2">
                                    <div className="row">
                                        <div className="tabcate_content carousel-grid owl-carousel">
                                            <div className="item">
                                                <div className="item-inner">
                                                    <div className="product-miniature js-product-miniature" data-id-product="5" data-id-product-attribute="19" itemScope itemType="http://schema.org/Product">
                                                        <div className="left-product">
                                                            <a href="https://demo.fieldthemes.com/decor/home1/en/categories/5-19-printed-summer-dress.html#/1-size-s/16-color-yellow" className="thumbnail product-thumbnail">
                                                                <span className="cover_image">
                                                                    <img src="https://demo.fieldthemes.com/decor/home1/40-home_default/printed-summer-dress.jpg"
                                                                         data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/40-large_default/printed-summer-dress.jpg"
                                                                         alt="" width="270" height="270" />
                                                                </span>
                                                                <span className="hover_image">
                                                                    <img src="https://demo.fieldthemes.com/decor/home1/41-home_default/printed-summer-dress.jpg"
                                                                         data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/41-home_default/printed-summer-dress.jpg"
                                                                         alt="" width="270" height="270" />
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
                                                                <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
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
                                                                    <a href="https://demo.fieldthemes.com/decor/home1/en/categories/5-19-printed-summer-dress.html#/1-size-s/16-color-yellow">Consectetuer adipis elit.</a>
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
                                            </div>
                                            <div className="item">
                                                <div className="item-inner">
                                                    <div className="product-miniature js-product-miniature" data-id-product="6" data-id-product-attribute="31" itemScope itemType="http://schema.org/Product">
                                                        <div className="left-product">
                                                            <a href="https://demo.fieldthemes.com/decor/home1/en/home/6-31-printed-summer-dress.html#/1-size-s/16-color-yellow" className="thumbnail product-thumbnail">
                                                                <span className="cover_image">
                                                                    <img src="https://demo.fieldthemes.com/decor/home1/44-home_default/printed-summer-dress.jpg"
                                                                         data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/44-large_default/printed-summer-dress.jpg"
                                                                         alt="" width="270" height="270" />
                                                                </span>
                                                                <span className="hover_image">
                                                                    <img src="https://demo.fieldthemes.com/decor/home1/45-home_default/printed-summer-dress.jpg"
                                                                         data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/45-home_default/printed-summer-dress.jpg"
                                                                         alt="" width="270" height="270" />
                                                                </span>
                                                            </a>
                                                            <div className="conditions-box"></div>
                                                            <div className="button-action">
                                                                <a href="javascript:void(0)" className="quick-view" data-link-action="quickview" title="Quick view">
                                                                    <i className="fa fa-eye"></i>
                                                                </a>
                                                                <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
                                                                    <input type="hidden" name="id_product" value="6" />
                                                                    <button className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                        <i className="fa fa-shopping-bag"></i>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="right-product">
                                                            <div className="product-description">
                                                                <div className="product_name"><a href="https://demo.fieldthemes.com/decor/home1/en/home/6-31-printed-summer-dress.html#/1-size-s/16-color-yellow">Nullam malesuada.</a></div>
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
                                                            <a href="https://demo.fieldthemes.com/decor/home1/en/categories/8-51-faded-short-sleeves-tshirt.html#/1-size-s/13-color-orange" className="thumbnail product-thumbnail">
                                                                <span className="cover_image">
                                                                    <img src="https://demo.fieldthemes.com/decor/home1/52-home_default/faded-short-sleeves-tshirt.jpg"
                                                                         data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/52-large_default/faded-short-sleeves-tshirt.jpg"
                                                                         alt="" width="270" height="270" />
                                                                </span>
                                                                <span className="hover_image">
                                                                    <img src="https://demo.fieldthemes.com/decor/home1/53-home_default/faded-short-sleeves-tshirt.jpg"
                                                                         data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/53-home_default/faded-short-sleeves-tshirt.jpg"
                                                                         alt="" width="270" height="270" />
                                                                </span>
                                                            </a>
                                                            <div className="conditions-box"></div>
                                                            <div className="button-action">
                                                                <a href="javascript:void(0)" className="quick-view" data-link-action="quickview" title="Quick view">
                                                                    <i className="fa fa-eye"></i>
                                                                </a>
                                                                <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
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
                                                                    <a href="https://demo.fieldthemes.com/decor/home1/en/categories/8-51-faded-short-sleeves-tshirt.html#/1-size-s/13-color-orange">Printed Chiffon Dress</a>
                                                                </div>
                                                                <div className="product-price-and-shipping">
                                                                    <span className="price">$16.51</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="item-inner">
                                                    <div className="product-miniature js-product-miniature" data-id-product="7" data-id-product-attribute="34" itemScope itemType="http://schema.org/Product">
                                                        <div className="left-product">
                                                            <a href="https://demo.fieldthemes.com/decor/home1/en/home/7-34-printed-chiffon-dress.html#/1-size-s/16-color-yellow" className="thumbnail product-thumbnail">
                                                                <span className="cover_image">
                                                                    <img src="https://demo.fieldthemes.com/decor/home1/56-home_default/printed-chiffon-dress.jpg"
                                                                         data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/56-large_default/printed-chiffon-dress.jpg"
                                                                         alt="" width="270" height="270" />
                                                                </span>
                                                                <span className="hover_image">
                                                                    <img src="https://demo.fieldthemes.com/decor/home1/57-home_default/printed-chiffon-dress.jpg"
                                                                         data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/57-home_default/printed-chiffon-dress.jpg"
                                                                         alt="" width="270" height="270" />
                                                                </span>
                                                            </a>
                                                            <div className="conditions-box">
                                                                <span className="new_product">New</span>
                                                            </div>
                                                            <div className="button-action">
                                                                <a href="javascript:void(0)" className="quick-view" data-link-action="quickview" title="Quick view">
                                                                    <i className="fa fa-eye"></i>
                                                                </a>
                                                                <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
                                                                    <input type="hidden" name="id_product" value="7" />
                                                                    <button className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                        <i className="fa fa-shopping-bag"></i>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="right-product">
                                                            <div className="product-description">
                                                                <div className="product_name"><a href="https://demo.fieldthemes.com/decor/home1/en/home/7-34-printed-chiffon-dress.html#/1-size-s/16-color-yellow">Non semper suscipit.</a></div>
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
                                                            <a href="https://demo.fieldthemes.com/decor/home1/en/home/3-13-printed-dress.html#/1-size-s/13-color-orange" className="thumbnail product-thumbnail">
                                                                <span className="cover_image">
                                                                    <img src="https://demo.fieldthemes.com/decor/home1/32-home_default/printed-dress.jpg"
                                                                         data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/32-large_default/printed-dress.jpg"
                                                                         alt="" width="270" height="270" />
                                                                </span>
                                                                <span className="hover_image">
                                                                    <img src="https://demo.fieldthemes.com/decor/home1/33-home_default/printed-dress.jpg"
                                                                         data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/33-home_default/printed-dress.jpg"
                                                                         alt="" width="270" height="270"
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
                                                                <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
                                                                    <input type="hidden" name="id_product" value="3" />
                                                                    <button className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                        <i className="fa fa-shopping-bag"></i>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="right-product">
                                                            <div className="product-description">
                                                                <div className="product_name"><a href="https://demo.fieldthemes.com/decor/home1/en/home/3-13-printed-dress.html#/1-size-s/13-color-orange">Curabitur sit amet enim</a></div>
                                                                <div className="product-price-and-shipping">
                                                                    <span className="price">$25.99</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="item-inner">
                                                    <div className="product-miniature js-product-miniature" data-id-product="10" data-id-product-attribute="60" itemScope itemType="http://schema.org/Product">
                                                        <div className="left-product">
                                                            <a href="https://demo.fieldthemes.com/decor/home1/en/home/10-60-printed-dress.html#/1-size-s/13-color-orange" className="thumbnail product-thumbnail">
                                                                <span className="cover_image">
                                                                    <img src="https://demo.fieldthemes.com/decor/home1/68-home_default/printed-dress.jpg"
                                                                         data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/68-large_default/printed-dress.jpg"
                                                                         alt="" width="270" height="270" />
                                                                </span>
                                                                <span className="hover_image">
                                                                    <img src="https://demo.fieldthemes.com/decor/home1/69-home_default/printed-dress.jpg"
                                                                         data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/69-home_default/printed-dress.jpg"
                                                                         alt="" width="270" height="270" />
                                                                </span>
                                                            </a>
                                                            <div className="conditions-box"></div>
                                                            <div className="button-action">
                                                                <a href="javascript:void(0)" className="quick-view" data-link-action="quickview" title="Quick view">
                                                                    <i className="fa fa-eye"></i>
                                                                </a>
                                                                <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
                                                                    <input type="hidden" name="id_product" value="10" />
                                                                    <button className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                        <i className="fa fa-shopping-bag"></i>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="right-product">
                                                            <div className="product-description">
                                                                <div className="product_name"><a href="https://demo.fieldthemes.com/decor/home1/en/home/10-60-printed-dress.html#/1-size-s/13-color-orange">Printed Summer Dress</a></div>
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
                                <div id="tab_2_15" className="tab_category_slider_2">
                                    <div className="row">
                                        <div className="tabcate_content carousel-grid owl-carousel">
                                            <div className="item">
                                                <div className="item-inner">
                                                    <div className="product-miniature js-product-miniature" data-id-product="5" data-id-product-attribute="19" itemScope itemType="http://schema.org/Product">
                                                        <div className="left-product">
                                                            <a href="https://demo.fieldthemes.com/decor/home1/en/categories/5-19-printed-summer-dress.html#/1-size-s/16-color-yellow" className="thumbnail product-thumbnail">
                                                                <span className="cover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/40-home_default/printed-summer-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/40-large_default/printed-summer-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                                <span className="hover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/41-home_default/printed-summer-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/41-home_default/printed-summer-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
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
                                                                <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
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
                                                                    <a href="https://demo.fieldthemes.com/decor/home1/en/categories/5-19-printed-summer-dress.html#/1-size-s/16-color-yellow">Consectetuer adipis elit.</a>
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
                                            </div>
                                            <div className="item">
                                                <div className="item-inner">
                                                    <div className="product-miniature js-product-miniature" data-id-product="6" data-id-product-attribute="31" itemScope itemType="http://schema.org/Product">
                                                        <div className="left-product">
                                                            <a href="https://demo.fieldthemes.com/decor/home1/en/home/6-31-printed-summer-dress.html#/1-size-s/16-color-yellow" className="thumbnail product-thumbnail">
                                                                <span className="cover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/44-home_default/printed-summer-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/44-large_default/printed-summer-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                                <span className="hover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/45-home_default/printed-summer-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/45-home_default/printed-summer-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="conditions-box"></div>
                                                            <div className="button-action">
                                                                <a href="javascript:void(0)" className="quick-view" data-link-action="quickview" title="Quick view">
                                                                    <i className="fa fa-eye"></i>
                                                                </a>
                                                                <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
                                                                    <input type="hidden" name="id_product" value="6" />
                                                                    <button className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                        <i className="fa fa-shopping-bag"></i>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="right-product">
                                                            <div className="product-description">
                                                                <div className="product_name"><a href="https://demo.fieldthemes.com/decor/home1/en/home/6-31-printed-summer-dress.html#/1-size-s/16-color-yellow">Nullam malesuada.</a></div>
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
                                                            <a href="https://demo.fieldthemes.com/decor/home1/en/categories/8-51-faded-short-sleeves-tshirt.html#/1-size-s/13-color-orange" className="thumbnail product-thumbnail">
                                                                <span className="cover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/52-home_default/faded-short-sleeves-tshirt.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/52-large_default/faded-short-sleeves-tshirt.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                                <span className="hover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/53-home_default/faded-short-sleeves-tshirt.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/53-home_default/faded-short-sleeves-tshirt.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="conditions-box"></div>
                                                            <div className="button-action">
                                                                <a href="javascript:void(0)" className="quick-view" data-link-action="quickview" title="Quick view">
                                                                    <i className="fa fa-eye"></i>
                                                                </a>
                                                                <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
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
                                                                    <a href="https://demo.fieldthemes.com/decor/home1/en/categories/8-51-faded-short-sleeves-tshirt.html#/1-size-s/13-color-orange">Printed Chiffon Dress</a>
                                                                </div>
                                                                <div className="product-price-and-shipping">
                                                                    <span className="price">$16.51</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="item-inner">
                                                    <div className="product-miniature js-product-miniature" data-id-product="7" data-id-product-attribute="34" itemScope itemType="http://schema.org/Product">
                                                        <div className="left-product">
                                                            <a href="https://demo.fieldthemes.com/decor/home1/en/home/7-34-printed-chiffon-dress.html#/1-size-s/16-color-yellow" className="thumbnail product-thumbnail">
                                                                <span className="cover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/56-home_default/printed-chiffon-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/56-large_default/printed-chiffon-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                                <span className="hover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/57-home_default/printed-chiffon-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/57-home_default/printed-chiffon-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
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
                                                                <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
                                                                    <input type="hidden" name="id_product" value="7" />
                                                                    <button className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                        <i className="fa fa-shopping-bag"></i>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="right-product">
                                                            <div className="product-description">
                                                                <div className="product_name"><a href="https://demo.fieldthemes.com/decor/home1/en/home/7-34-printed-chiffon-dress.html#/1-size-s/16-color-yellow">Non semper suscipit.</a></div>
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
                                                            <a href="https://demo.fieldthemes.com/decor/home1/en/home/3-13-printed-dress.html#/1-size-s/13-color-orange" className="thumbnail product-thumbnail">
                                                                <span className="cover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/32-home_default/printed-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/32-large_default/printed-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                                <span className="hover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/33-home_default/printed-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/33-home_default/printed-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
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
                                                                <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
                                                                    <input type="hidden" name="id_product" value="3" />
                                                                    <button className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                        <i className="fa fa-shopping-bag"></i>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="right-product">
                                                            <div className="product-description">
                                                                <div className="product_name"><a href="https://demo.fieldthemes.com/decor/home1/en/home/3-13-printed-dress.html#/1-size-s/13-color-orange">Curabitur sit amet enim</a></div>
                                                                <div className="product-price-and-shipping">
                                                                    <span className="price">$25.99</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="item-inner">
                                                    <div className="product-miniature js-product-miniature" data-id-product="10" data-id-product-attribute="60" itemScope itemType="http://schema.org/Product">
                                                        <div className="left-product">
                                                            <a href="https://demo.fieldthemes.com/decor/home1/en/home/10-60-printed-dress.html#/1-size-s/13-color-orange" className="thumbnail product-thumbnail">
                                                                <span className="cover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/68-home_default/printed-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/68-large_default/printed-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                                <span className="hover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/69-home_default/printed-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/69-home_default/printed-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="conditions-box"></div>
                                                            <div className="button-action">
                                                                <a href="javascript:void(0)" className="quick-view" data-link-action="quickview" title="Quick view">
                                                                    <i className="fa fa-eye"></i>
                                                                </a>
                                                                <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
                                                                    <input type="hidden" name="id_product" value="10" />
                                                                    <button className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                        <i className="fa fa-shopping-bag"></i>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="right-product">
                                                            <div className="product-description">
                                                                <div className="product_name"><a href="https://demo.fieldthemes.com/decor/home1/en/home/10-60-printed-dress.html#/1-size-s/13-color-orange">Printed Summer Dress</a></div>
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
                                <div id="tab_2_16" className="tab_category_slider_2">
                                    <div className="row">
                                        <div className="tabcate_content carousel-grid owl-carousel">
                                            <div className="item">
                                                <div className="item-inner">
                                                    <div className="product-miniature js-product-miniature" data-id-product="5" data-id-product-attribute="19" itemScope itemType="http://schema.org/Product">
                                                        <div className="left-product">
                                                            <a href="https://demo.fieldthemes.com/decor/home1/en/categories/5-19-printed-summer-dress.html#/1-size-s/16-color-yellow" className="thumbnail product-thumbnail">
                                                                <span className="cover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/40-home_default/printed-summer-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/40-large_default/printed-summer-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                                <span className="hover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/41-home_default/printed-summer-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/41-home_default/printed-summer-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
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
                                                                <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
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
                                                                    <a href="https://demo.fieldthemes.com/decor/home1/en/categories/5-19-printed-summer-dress.html#/1-size-s/16-color-yellow">Consectetuer adipis elit.</a>
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
                                            </div>
                                            <div className="item">
                                                <div className="item-inner">
                                                    <div className="product-miniature js-product-miniature" data-id-product="6" data-id-product-attribute="31" itemScope itemType="http://schema.org/Product">
                                                        <div className="left-product">
                                                            <a href="https://demo.fieldthemes.com/decor/home1/en/home/6-31-printed-summer-dress.html#/1-size-s/16-color-yellow" className="thumbnail product-thumbnail">
                                                                <span className="cover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/44-home_default/printed-summer-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/44-large_default/printed-summer-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                                <span className="hover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/45-home_default/printed-summer-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/45-home_default/printed-summer-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="conditions-box"></div>
                                                            <div className="button-action">
                                                                <a href="javascript:void(0)" className="quick-view" data-link-action="quickview" title="Quick view">
                                                                    <i className="fa fa-eye"></i>
                                                                </a>
                                                                <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
                                                                    <input type="hidden" name="id_product" value="6" />
                                                                    <button className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                        <i className="fa fa-shopping-bag"></i>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="right-product">
                                                            <div className="product-description">
                                                                <div className="product_name"><a href="https://demo.fieldthemes.com/decor/home1/en/home/6-31-printed-summer-dress.html#/1-size-s/16-color-yellow">Nullam malesuada.</a></div>
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
                                                            <a href="https://demo.fieldthemes.com/decor/home1/en/categories/8-51-faded-short-sleeves-tshirt.html#/1-size-s/13-color-orange" className="thumbnail product-thumbnail">
                                                                <span className="cover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/52-home_default/faded-short-sleeves-tshirt.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/52-large_default/faded-short-sleeves-tshirt.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                                <span className="hover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/53-home_default/faded-short-sleeves-tshirt.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/53-home_default/faded-short-sleeves-tshirt.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="conditions-box"></div>
                                                            <div className="button-action">
                                                                <a href="javascript:void(0)" className="quick-view" data-link-action="quickview" title="Quick view">
                                                                    <i className="fa fa-eye"></i>
                                                                </a>
                                                                <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
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
                                                                    <a href="https://demo.fieldthemes.com/decor/home1/en/categories/8-51-faded-short-sleeves-tshirt.html#/1-size-s/13-color-orange">Printed Chiffon Dress</a>
                                                                </div>
                                                                <div className="product-price-and-shipping">
                                                                    <span className="price">$16.51</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="item-inner">
                                                    <div className="product-miniature js-product-miniature" data-id-product="7" data-id-product-attribute="34" itemScope itemType="http://schema.org/Product">
                                                        <div className="left-product">
                                                            <a href="https://demo.fieldthemes.com/decor/home1/en/home/7-34-printed-chiffon-dress.html#/1-size-s/16-color-yellow" className="thumbnail product-thumbnail">
                                                                <span className="cover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/56-home_default/printed-chiffon-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/56-large_default/printed-chiffon-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                                <span className="hover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/57-home_default/printed-chiffon-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/57-home_default/printed-chiffon-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
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
                                                                <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
                                                                    <input type="hidden" name="id_product" value="7" />
                                                                    <button className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                        <i className="fa fa-shopping-bag"></i>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="right-product">
                                                            <div className="product-description">
                                                                <div className="product_name"><a href="https://demo.fieldthemes.com/decor/home1/en/home/7-34-printed-chiffon-dress.html#/1-size-s/16-color-yellow">Non semper suscipit.</a></div>
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
                                                            <a href="https://demo.fieldthemes.com/decor/home1/en/home/3-13-printed-dress.html#/1-size-s/13-color-orange" className="thumbnail product-thumbnail">
                                                                <span className="cover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/32-home_default/printed-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/32-large_default/printed-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                                <span className="hover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/33-home_default/printed-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/33-home_default/printed-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
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
                                                                <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
                                                                    <input type="hidden" name="id_product" value="3" />
                                                                    <button className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                        <i className="fa fa-shopping-bag"></i>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="right-product">
                                                            <div className="product-description">
                                                                <div className="product_name"><a href="https://demo.fieldthemes.com/decor/home1/en/home/3-13-printed-dress.html#/1-size-s/13-color-orange">Curabitur sit amet enim</a></div>
                                                                <div className="product-price-and-shipping">
                                                                    <span className="price">$25.99</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="item-inner">
                                                    <div className="product-miniature js-product-miniature" data-id-product="10" data-id-product-attribute="60" itemScope itemType="http://schema.org/Product">
                                                        <div className="left-product">
                                                            <a href="https://demo.fieldthemes.com/decor/home1/en/home/10-60-printed-dress.html#/1-size-s/13-color-orange" className="thumbnail product-thumbnail">
                                                                <span className="cover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/68-home_default/printed-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/68-large_default/printed-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                                <span className="hover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/69-home_default/printed-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/69-home_default/printed-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="conditions-box"></div>
                                                            <div className="button-action">
                                                                <a href="javascript:void(0)" className="quick-view" data-link-action="quickview" title="Quick view">
                                                                    <i className="fa fa-eye"></i>
                                                                </a>
                                                                <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
                                                                    <input type="hidden" name="id_product" value="10" />
                                                                    <button className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                        <i className="fa fa-shopping-bag"></i>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="right-product">
                                                            <div className="product-description">
                                                                <div className="product_name"><a href="https://demo.fieldthemes.com/decor/home1/en/home/10-60-printed-dress.html#/1-size-s/13-color-orange">Printed Summer Dress</a></div>
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
                                <div id="tab_2_17" className="tab_category_slider_2">
                                    <div className="row">
                                        <div className="tabcate_content carousel-grid owl-carousel">
                                            <div className="item">
                                                <div className="item-inner">
                                                    <div className="product-miniature js-product-miniature" data-id-product="5" data-id-product-attribute="19" itemScope itemType="http://schema.org/Product">
                                                        <div className="left-product">
                                                            <a href="https://demo.fieldthemes.com/decor/home1/en/categories/5-19-printed-summer-dress.html#/1-size-s/16-color-yellow" className="thumbnail product-thumbnail">
                                                                <span className="cover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/40-home_default/printed-summer-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/40-large_default/printed-summer-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                                <span className="hover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/41-home_default/printed-summer-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/41-home_default/printed-summer-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
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
                                                                <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
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
                                                                    <a href="https://demo.fieldthemes.com/decor/home1/en/categories/5-19-printed-summer-dress.html#/1-size-s/16-color-yellow">Consectetuer adipis elit.</a>
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
                                            </div>
                                            <div className="item">
                                                <div className="item-inner">
                                                    <div className="product-miniature js-product-miniature" data-id-product="6" data-id-product-attribute="31" itemScope itemType="http://schema.org/Product">
                                                        <div className="left-product">
                                                            <a href="https://demo.fieldthemes.com/decor/home1/en/home/6-31-printed-summer-dress.html#/1-size-s/16-color-yellow" className="thumbnail product-thumbnail">
                                                                <span className="cover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/44-home_default/printed-summer-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/44-large_default/printed-summer-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                                <span className="hover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/45-home_default/printed-summer-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/45-home_default/printed-summer-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="conditions-box"></div>
                                                            <div className="button-action">
                                                                <a href="javascript:void(0)" className="quick-view" data-link-action="quickview" title="Quick view">
                                                                    <i className="fa fa-eye"></i>
                                                                </a>
                                                                <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
                                                                    <input type="hidden" name="id_product" value="6" />
                                                                    <button className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                        <i className="fa fa-shopping-bag"></i>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="right-product">
                                                            <div className="product-description">
                                                                <div className="product_name"><a href="https://demo.fieldthemes.com/decor/home1/en/home/6-31-printed-summer-dress.html#/1-size-s/16-color-yellow">Nullam malesuada.</a></div>
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
                                                            <a href="https://demo.fieldthemes.com/decor/home1/en/categories/8-51-faded-short-sleeves-tshirt.html#/1-size-s/13-color-orange" className="thumbnail product-thumbnail">
                                                                <span className="cover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/52-home_default/faded-short-sleeves-tshirt.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/52-large_default/faded-short-sleeves-tshirt.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                                <span className="hover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/53-home_default/faded-short-sleeves-tshirt.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/53-home_default/faded-short-sleeves-tshirt.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="conditions-box"></div>
                                                            <div className="button-action">
                                                                <a href="javascript:void(0)" className="quick-view" data-link-action="quickview" title="Quick view">
                                                                    <i className="fa fa-eye"></i>
                                                                </a>
                                                                <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
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
                                                                    <a href="https://demo.fieldthemes.com/decor/home1/en/categories/8-51-faded-short-sleeves-tshirt.html#/1-size-s/13-color-orange">Printed Chiffon Dress</a>
                                                                </div>
                                                                <div className="product-price-and-shipping">
                                                                    <span className="price">$16.51</span>
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
                                                            <a href="https://demo.fieldthemes.com/decor/home1/en/home/3-13-printed-dress.html#/1-size-s/13-color-orange" className="thumbnail product-thumbnail">
                                                                <span className="cover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/32-home_default/printed-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/32-large_default/printed-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                                <span className="hover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/33-home_default/printed-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/33-home_default/printed-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
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
                                                                <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
                                                                    <input type="hidden" name="id_product" value="3" />
                                                                    <button className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                        <i className="fa fa-shopping-bag"></i>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="right-product">
                                                            <div className="product-description">
                                                                <div className="product_name"><a href="https://demo.fieldthemes.com/decor/home1/en/home/3-13-printed-dress.html#/1-size-s/13-color-orange">Curabitur sit amet enim</a></div>
                                                                <div className="product-price-and-shipping">
                                                                    <span className="price">$25.99</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="item-inner">
                                                    <div className="product-miniature js-product-miniature" data-id-product="10" data-id-product-attribute="60" itemScope itemType="http://schema.org/Product">
                                                        <div className="left-product">
                                                            <a href="https://demo.fieldthemes.com/decor/home1/en/home/10-60-printed-dress.html#/1-size-s/13-color-orange" className="thumbnail product-thumbnail">
                                                                <span className="cover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/68-home_default/printed-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/68-large_default/printed-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                                <span className="hover_image">
                                                                    <img
                                                                        src="https://demo.fieldthemes.com/decor/home1/69-home_default/printed-dress.jpg"
                                                                        data-full-size-image-url="https://demo.fieldthemes.com/decor/home1/69-home_default/printed-dress.jpg"
                                                                        alt=""
                                                                        width="270"
                                                                        height="270"
                                                                    />
                                                                </span>
                                                            </a>
                                                            <div className="conditions-box"></div>
                                                            <div className="button-action">
                                                                <a href="javascript:void(0)" className="quick-view" data-link-action="quickview" title="Quick view">
                                                                    <i className="fa fa-eye"></i>
                                                                </a>
                                                                <form action="https://demo.fieldthemes.com/decor/home1/en/cart" method="post">
                                                                    <input type="hidden" name="token" value="2072490f512dc8028a9c341a5dd5d506" />
                                                                    <input type="hidden" name="id_product" value="10" />
                                                                    <button className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                        <i className="fa fa-shopping-bag"></i>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="right-product">
                                                            <div className="product-description">
                                                                <div className="product_name"><a href="https://demo.fieldthemes.com/decor/home1/en/home/10-60-printed-dress.html#/1-size-s/13-color-orange">Printed Summer Dress</a></div>
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
                </div>
            </section>
            {/* <!-- wrapper end --> */}
        </>
    );
}

export default ProductDetail;