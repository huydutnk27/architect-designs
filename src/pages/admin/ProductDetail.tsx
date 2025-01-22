import axios from 'axios';
import { toast } from "react-toastify";
import background  from '../../assets/img/front/bg/back-1-1.jpg';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { EmptyProduct, ProductEntity } from '../../model/product';
import ImageUpload from '../../components/upload/ImageUpload';

// Async function to fetch category data by id
const loadProductByProductId = async (id: string) => {
    return await axios.get('/api/getCategoryById', {
        params: {
          _id: id
        }
    });
};

// Async function to fetch categories data
const updateProduct = async (_product: ProductEntity) => {
    return await axios.post('/api/updateCategory', {
        product: _product
    });
};

const ProductDetailAdmin = () => {
    const productEntity: ProductEntity = EmptyProduct;
    const [productDetail, setProductDetail] = useState(productEntity);
    const {state} = useLocation();
    let imageData = null;

    const divRef = useRef(null);

    //ES6 object destructuring
    const showSuccessMessage = () => {
        toast.success("Updated 1 document(s) !", {
            position: "top-right"
        });
    };
    const showErrorMessage = () => {
        toast.error("Updated document(s) fails !", {
            position: "top-right"
        });
    };

    // callBack get base64 data image from upload component.
    const onChangeImageData = (imgUploadata: string) => {
        // set image base64 data for slider
        if(imgUploadata) {
            // const updProductEntity = Object.assign({}, productDetail);
            imageData = imgUploadata;
            // const slideUpd = [...slideData];
            // const updItem = slideUpd[slideIndex - 1];
            // updItem.imageData = imgUploadata;
            // setSlideData(slideUpd);
            // const updProductEntity = Object.assign({}, productDetail);
            // updProductEntity.imageData = slideData;
            // setHomeData(updHomeEntity);
        }
    }

    const onSetIndexImg = (name: string) => {
        setTimeout(function () {
            if (name) {
                if(name.indexOf('product-selected') >= 0) {
                    const ids = name.split("-");
                    const index = parseInt(ids[2]);
                    const updProductEntity = Object.assign({}, productDetail);
                    const listImgDetailUpd = updProductEntity.listImgDetail;
                    switch (index) {
                        case 1:
                            listImgDetailUpd[0] = imageData;
                            setProductDetail(updProductEntity);
                            break;
                        case 2:
                            listImgDetailUpd[1] = imageData;
                            setProductDetail(updProductEntity);
                            break;
                        case 3:
                            // setImageDataSilde3(imgUploadata);
                            break;
                        default:
                            break;
                    }
                } else {
                    const updProductEntity = Object.assign({}, productDetail);
                    updProductEntity.imageData = imageData;
                    setProductDetail(updProductEntity);
                }
            }
                
        }, 100);
    }

    useEffect(() => {
        setTimeout(function () { 
            window?.applyElevateZoom();
        }, 1000);
        console.log('productId', state._id);
        loadProductByProductId(state._id).then(res => {
            Object.assign(productEntity, res.data.product);
            setProductDetail(productEntity);
        });
    }, []);

    const handleSave = (event) => {
        // if(productDetail) {
        //     productDetail.imageBase64Data = imageData;
        //     productDetail.description = textEditor;
        // }
        console.log('productDetail', productDetail);
        // updateProduct(productDetail).then(res => {
        //     if (res.status === 200) {
        //         showSuccessMessage();
        //     } else {
        //         showErrorMessage();
        //     }
        // });
    };

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
                    <div className="row admin">
                        <div id="content-wrapper" className="right-column col-xs-12 col-sm-12 col-md-12">
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
                                                    <img className="js-qv-product-cover img-responsive" src={productDetail.imageData}
                                                         alt="" title="" style={{maxWidth: "100%", "height": "auto"}}
                                                         itemProp="image" width="800" height="800"
                                                    />
                                                    <div className="layer hidden-sm-down" data-toggle="modal" data-target="#product-modal">
                                                        <ImageUpload onSetImageData={onChangeImageData} setIndex={onSetIndexImg} name={'product-cover'}/>
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
                                                            <ImageUpload onSetImageData={onChangeImageData} setIndex={onSetIndexImg} name={'product-selected-1'}/>
                                                        </div>
                                                        <div className="thumb-container">
                                                            <img className="thumb js-thumb"
                                                                 data-image-medium-src="https://demo.fieldthemes.com/decor/home1/41-medium_default/printed-summer-dress.jpg"
                                                                 data-image-large-src="https://demo.fieldthemes.com/decor/home1/41-large_default/printed-summer-dress.jpg"
                                                                 src="https://demo.fieldthemes.com/decor/home1/41-small_default/printed-summer-dress.jpg"
                                                                 alt="" title="" width="100" itemProp="image"
                                                            />
                                                            <i className="material-icons zoom-in">&#xe413;</i>
                                                        </div>
                                                        <div className="thumb-container">
                                                            <img className="thumb js-thumb"
                                                                    data-image-medium-src="https://demo.fieldthemes.com/decor/home1/42-medium_default/printed-summer-dress.jpg"
                                                                    data-image-large-src="https://demo.fieldthemes.com/decor/home1/42-large_default/printed-summer-dress.jpg"
                                                                    src="https://demo.fieldthemes.com/decor/home1/42-small_default/printed-summer-dress.jpg"
                                                                    alt="" title="" width="100" itemProp="image"
                                                            />
                                                            <i className="material-icons zoom-in">&#xe413;</i>
                                                        </div>
                                                        <div className="thumb-container">
                                                            <img className="thumb js-thumb"
                                                                    data-image-medium-src="https://demo.fieldthemes.com/decor/home1/43-medium_default/printed-summer-dress.jpg"
                                                                    data-image-large-src="https://demo.fieldthemes.com/decor/home1/43-large_default/printed-summer-dress.jpg"
                                                                    src="https://demo.fieldthemes.com/decor/home1/43-small_default/printed-summer-dress.jpg"
                                                                    alt="" title="" width="100" itemProp="image"
                                                            />
                                                            <i className="material-icons zoom-in">&#xe413;</i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div className="col-md-6">
                                        <h1 className="h1" itemProp="name">
                                            <input type="text" className="form-control" value="Consectetuer adipis elit." />
                                        </h1>

                                        <div className="product-information">
                                            <div id="product-description-short-5" itemProp="description">
                                                <p>
                                                    <input type="text" className="form-control" value="Long printed dress with thin adjustable straps. V-neckline and wiring under the bust with ruffles at the bottom of the dress." />
                                                </p>
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
                                                            <div className="checkbox-wrapper-55">
                                                                <label className="rocker rocker-small">
                                                                    <input type="checkbox" />
                                                                    <span className="switch-left">Yes</span>
                                                                    <span className="switch-right">No</span>
                                                                </label>
                                                            </div>
                                                            <span id="product-availability">
                                                                In stock
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                    <p className="product-minimal-quantity"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabs">
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item active">
                                            <a className="nav-link" data-toggle="tab" href="#product-details">Product Details</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="tab-content">
                                        <div className="tab-pane fade in active" id="product-details"
                                            data-product='{"id_shop_default":"1","id_manufacturer":"1","id_supplier":"1","reference":"demo_5","is_virtual":"0","id_category_default":"12","on_sale":"1","online_only":"0","ecotax":"0.000000","minimal_quantity":"1","price":28.975,"unity":null,"unit_price_ratio":"0.000000","additional_shipping_cost":"0.00","customizable":"0","text_fields":"0","uploadable_files":"0","redirect_type":"404","id_type_redirected":"0","available_for_order":"1","available_date":null,"show_condition":"1","condition":"new","show_price":"1","indexed":"1","visibility":"both","cache_default_attribute":"19","advanced_stock_management":"0","date_add":"2017-08-03 04:30:23","date_upd":"2017-08-16 10:30:50","pack_stock_type":"3","meta_description":null,"meta_keywords":null,"meta_title":null,"link_rewrite":"printed-summer-dress","name":"Consectetuer adipis elit.","description":"&lt;p&gt;Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman&#039;s wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!&lt;\/p&gt;","description_short":"&lt;p&gt;Long printed dress with thin adjustable straps. V-neckline and wiring under the bust with ruffles at the bottom of the dress.&lt;\/p&gt;","available_now":"In stock","available_later":null,"id":5,"id_product":5,"out_of_stock":2,"new":1,"id_product_attribute":19,"quantity_wanted":1,"extraContent":[],"allow_oosp":0,"category":"categories","category_name":"Categories","link":"https:\/\/demo.fieldthemes.com\/decor\/home1\/en\/categories\/5-printed-summer-dress.html","attribute_price":0,"price_tax_exc":28.98,"price_without_reduction":30.5,"reduction":1.525,"specific_prices":{"id_specific_price":"1","id_specific_price_rule":"0","id_cart":"0","id_product":"5","id_shop":"0","id_shop_group":"0","id_currency":"0","id_country":"0","id_group":"0","id_customer":"0","id_product_attribute":"0","price":"-1.000000","from_quantity":"1","reduction":"0.050000","reduction_tax":"1","reduction_type":"percentage","from":"0000-00-00 00:00:00","to":"0000-00-00 00:00:00","score":"32"},"quantity":300,"quantity_all_versions":3600,"id_image":"en-default","features":[{"name":"Compositions","value":"Viscose","id_feature":"5"},{"name":"Styles","value":"Casual","id_feature":"6"},{"name":"Properties","value":"Maxi Dress","id_feature":"7"}],"attachments":[],"virtual":0,"pack":0,"packItems":[],"nopackprice":0,"customization_required":false,"attributes":{"1":{"id_attribute":"1","id_attribute_group":"1","name":"S","group":"Size","reference":null,"ean13":null,"isbn":null,"upc":null},"3":{"id_attribute":"16","id_attribute_group":"3","name":"Yellow","group":"Color","reference":null,"ean13":null,"isbn":null,"upc":null}},"rate":0,"tax_name":"","ecotax_rate":0,"unit_price":0,"customizations":{"fields":[]},"id_customization":0,"is_customizable":false,"show_quantities":true,"quantity_label":"Items","quantity_discounts":[],"customer_group_discount":0}'
                                        >
                                            <div className="product-manufacturer">
                                                <a href="https://demo.fieldthemes.com/decor/home1/en/1_brand1">
                                                    <img src="https://demo.fieldthemes.com/decor/home1/img/m/1.jpg" className="img img-thumbnail manufacturer-logo" />
                                                </a>
                                            </div>
                                            <div className="product-out-of-stock"></div>
                                            <section className="product-features">
                                                <h3 className="h6">Data sheet</h3>
                                                <dl className="data-sheet">
                                                    <dt className="name">Category</dt>
                                                    <dd className="value">
                                                        <select className="form-control" id="exampleFormControlSelect1">
                                                            <option value="CATE001">TRẦN XUYÊN SÁNG</option>
                                                            <option value="CATE002">TRẦN SAO</option>
                                                            <option value="CATE003">TRẦN HỌA TIẾT</option>
                                                            <option value="CATE004">VẬT TƯ</option>
                                                            <option value="CATE004">HỘP ĐÈN</option>
                                                        </select>
                                                    </dd>
                                                    <dt className="name">Nhà sản xuất</dt>
                                                    <dd className="value">
                                                        <input type="text" className="form-control" value="Casual" />
                                                    </dd>
                                                    <dt className="name">Thời gian thi công</dt>
                                                    <dd className="value">
                                                        <input type="text" className="form-control" value="3 ngày" />
                                                    </dd>
                                                    <dt className="name">Thời gian bảo hành</dt>
                                                    <dd className="value">
                                                        <input type="text" className="form-control" value="3 ngày" />
                                                    </dd>
                                                </dl>
                                            </section>

                                            <div className="product-condition">
                                                <label className="label">Description </label>
                                            </div>

                                            <div className="product-description form-group">
                                                <textarea className="form-control" rows={10} value="Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full
                                                    ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the
                                                    beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!">
                                                    
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add" style={{paddingTop: "5px"}}>
                                        <button className="btn" type="button" onClick={handleSave}>
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </section>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- wrapper end --> */}
        </>
    );
}

export default ProductDetailAdmin;