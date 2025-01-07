import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";

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
import ImageUpload from '../../components/upload/ImageUpload';
import { EmptySlideEntity, EmptySpecialProduct, HomeEntity, SlideEntity, SpecialProduct } from '../../model/home';

// Async function to fetch categories data
const loadHome = async () => {
    return await axios.get('/api/fetchHomeData');
};

// Async function to fetch categories data
const updateHome = async (_homeEntity: HomeEntity) => {
    return await axios.post('/api/updateHomeData', {
        homeData: _homeEntity
    });
};

const AdminHome = () => {
    const {state} = useLocation();
    const [section, setSection] = useState('slider');
    const [imageData, setImageData] = useState(null);
    const [indexSpecialProduct, setIndexSpecialProduct] = useState(0);
    const [imageDataSilde1, setImageDataSilde1] = useState(null);
    const [imageDataSilde2, setImageDataSilde2] = useState(null);
    const [imageDataSilde3, setImageDataSilde3] = useState(null);
    const updateSlideEntity: SlideEntity = EmptySlideEntity;
    const slidesEntity: SlideEntity[] = [EmptySlideEntity, EmptySlideEntity, EmptySlideEntity];
    const [slideData, setSlideData] = useState(slidesEntity);
    const [slideIndex, setSlideIndex] = useState(1);
    const [slideUpdate, setSlideUpdate] = useState(updateSlideEntity);
    const [dataSlider, setDataSlider] = useState([{}, {}, {}]);

    const specialProductEntity: SpecialProduct[] = [EmptySpecialProduct, EmptySpecialProduct];
    const [specialProductData, setSpecialProductData] = useState(specialProductEntity);
    const [isLoaded, setIsLoaded] = useState(false);
    const homeEntity: HomeEntity = {
        slider: [],
        specialProduct: []
    };
    const [homeData, setHomeData] = useState(homeEntity);

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

    // handle next slide event click
    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1);
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1);
        }
    }

    // handle previous slide event click
    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1);
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length);
        }
    }

    // callBack get base64 data image from upload component.
    const onChangeImageData = (imgUploadata: string) => {
        // set image base64 data for slider
        if(imgUploadata) {
            switch (slideIndex) {
                case 1:
                    setImageDataSilde1(imgUploadata);
                    break;
                case 2:
                    setImageDataSilde2(imgUploadata);
                    break;
                case 3:
                    setImageDataSilde3(imgUploadata);
                    break;
                default:
                    break;
            }
            const slideUpd = [...slideData];
            const updItem = slideUpd[slideIndex - 1];
            updItem.imageData = imgUploadata;
            setSlideData(slideUpd);
            const updHomeEntity = Object.assign({}, homeData);
            updHomeEntity.slider = slideData;
            setHomeData(updHomeEntity);
        }
    }

    // callBack get base64 data image from upload component.
    const onChangeSpecialProductImageData = (imgUploadata: string) => {
        if(imgUploadata) {
            const updateSpecialProduct = [...specialProductData];
            const updHomeEntity = Object.assign({}, homeData);
            switch (indexSpecialProduct) {
                case 0: {
                    const findSpecialProduct = specialProductData[0];
                    findSpecialProduct.imageData = imgUploadata;
                    setSpecialProductData(updateSpecialProduct);
                }
                    break;
                case 1:{
                    const findSpecialProduct = specialProductData[1];
                    findSpecialProduct.imageData = imgUploadata;
                    setSpecialProductData(updateSpecialProduct);
                }
                    break;
                default:
                    break;
            }
            updHomeEntity.specialProduct = specialProductData;
            setHomeData(updHomeEntity);
        }
    }
    
    // Handle site effect
    useEffect(() => {
        if(state) {
            setSection(state._section);
        }
        
        if(!isLoaded) {
            loadHome().then(res => {
                Object.assign(homeEntity, res.data.home);

                // GET SLIDER DATA
                setSlideData(homeEntity.slider);
                setSlideUpdate(homeEntity.slider[0]);
                setImageDataSilde1(homeEntity.slider[0].imageData);
                setImageDataSilde2(homeEntity.slider[1].imageData);
                setImageDataSilde3(homeEntity.slider[2].imageData);

                // LOAD SPECIAL PRODUCT DATA
                setSpecialProductData(homeEntity.specialProduct);
                
                setIsLoaded(true);
                console.log('AAAAAAAAAAAAAAAAAAAAAAA');
            });
        }
        // console.log('homeData', homeData);
        setSlideUpdate(slideData[slideIndex - 1]);
    }, [slideIndex, imageData]);

    // Handle change data for slide data
    const handleSpecialProductDataChange = (productId: string , event) => {
        const { name, value } = event.target;
        const updateSpecialProduct = [...specialProductData];
        const findSpecialProduct = specialProductData.find((x) => x.productId === productId);
        if (name.includes('mainText')) {
            findSpecialProduct.mainText = value;
        } else if (name.includes('subText')) {
            findSpecialProduct.subText = value;
        }
        
        setSpecialProductData(updateSpecialProduct);
        const updHomeEntity = Object.assign({}, homeData);
        updHomeEntity.specialProduct = specialProductData;
        setHomeData(updHomeEntity);
    };

    // Handle change data for slide data
    const handleSlideDataChange = (event) => {
        const { name, value } = event.target;
        setSlideUpdate((prevFormData) => ({ ...prevFormData, [name]: value }));
        const slideUpd = [...slideData];
        const updItem = slideUpd[slideIndex - 1];
        switch (name) {
            case 'lineText1':
                updItem.lineText1 = value;
                break;
            case 'lineText2':
                updItem.lineText2 = value;
                break;
            case 'lineText3':
                updItem.lineText3 = value;
                break;
            default:
                break;
        }
        setSlideData(slideUpd);
        const updHomeEntity = Object.assign({}, homeData);
        updHomeEntity.slider = slideData;
        setHomeData(updHomeEntity);
    };

    // Handle update data for home page.
    const handleSave = (event) => {
        if(homeData) {
            console.log('homeData = ', homeData);
            updateHome(homeData).then(res => {
                if (res.status === 200) {
                    showSuccessMessage();
                } else {
                    showErrorMessage();
                }
            });
        }
    };

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
            <div className="row admin" style={{display: (section === 'slider' ? 'block' : 'none')}}>
                <div className="col-md-12">
                    <div id="field_slideshow">
                        <div className="field-main-slider block" style={{overflow: "hidden"}}>
                            <div id="insideslider_mod" className="outer-slide" style={{width: "1920px", height: "800px"}}>
                                <div data-u="slides" style={{width: "1920px", height: "800px"}}>
                                    <div className="field-main-slider_1">
                                        <a href="#">
                                            <img className="img-slider" src={imageDataSilde1} alt="" data-u="image" />
                                        </a>
                                        <div className="box-slider">
                                            <div className="large-slide-title title_font" data-u="caption" data-t="T-*IB" data-t2="ZML|TR" data-d="-300">
                                                {slideData[0].lineText1}
                                            </div>
                                            <div className="big-slide-title title_font" data-u="caption" data-t="ZM*WVR|LB" data-t2="WVC|R" data-d="-300">
                                                {slideData[0].lineText2}
                                            </div>
                                            <div className="small-slide-title" data-u="caption" data-t="TORTUOUS|HL" data-t2="JDN|B" data-d="-300">
                                                <p>{slideData[0].lineText3}</p>
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
                                            <img className="img-slider" src={imageDataSilde2} alt="" data-u="image" />
                                        </a>
                                        <div className="box-slider">
                                            <div className="large-slide-title title_font" data-u="caption" data-t="ZM*JUP1|T" data-t2="FLTTRWN|LT">
                                                {slideData[1].lineText1}
                                            </div>
                                            <div className="big-slide-title title_font" data-u="caption" data-t="ZM*JUP1|T" data-t2="FLTTRWN|LT">
                                                {slideData[1].lineText2}
                                            </div>
                                            <div className="small-slide-title" data-u="caption" data-t="ZM*JUP1|L" data-t2="TORTUOUS|HL">
                                                <h3>{slideData[1].lineText3}</h3>
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
                                            <img className="img-slider" src={imageDataSilde3} alt="" data-u="image" />
                                        </a>
                                        <div className="box-slider">
                                            <div className="large-slide-title title_font" data-u="caption" data-t="ZM*WVR|RT" data-t2="WVC|B" data-d="-300">
                                                {slideData[2].lineText1}
                                            </div>
                                            <div className="big-slide-title title_font" data-u="caption" data-t="ZM*WVR|LB" data-t2="WVC|T" data-d="-300">
                                                {slideData[2].lineText2}
                                            </div>
                                            <div className="small-slide-title" data-u="caption" data-t="DDGDANCE|RB" data-t2="WVC|T" data-d="-300">
                                                <h3>{slideData[2].lineText3}</h3>
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
                                <span data-u="arrowleft" onClick={prevSlide}><i className="fa fa-angle-left"></i></span>
                                <span data-u="arrowright" onClick={nextSlide}><i className="fa fa-angle-right"></i></span>
                            </div>
                        </div>
                        <div className="float-start">
                            <ImageUpload onSetImageData={onChangeImageData} onSetIndex={() => {}}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <section className="get-in-touch">
                        <form className="contact-form row">
                            <div className="form-field col-lg-12">
                                <input id="lineText1" name="lineText1" className="input-text js-input" type="text" value={slideUpdate.lineText1} 
                                       onChange={handleSlideDataChange}/>
                                <label className="label" htmlFor="categoryType">Line Text 1</label>
                            </div>
                            <div className="form-field col-lg-12">
                                <input id="lineText2" name="lineText2" className="input-text js-input" type="text" value={slideUpdate.lineText2}
                                       onChange={handleSlideDataChange}/>
                                <label className="label" htmlFor="name">Line Text 2</label>
                            </div>
                            <div className="form-field col-lg-12">
                                <input id="lineText3" name="lineText3" className="input-text js-input" type="text" value={slideUpdate.lineText3}
                                       onChange={handleSlideDataChange}/>
                                <label className="label" htmlFor="subTitle">Line Text 3</label>
                            </div>
                        </form>
                    </section>
                </div>
                <div className="float-start">
                    <a className="slide-button title_font" href="javascript:void(0)" onClick={handleSave}>Save changes</a>
                </div>
            </div>
            <div className="container">
                <div className="row" style={{display: (section === 'special-product' ? 'block' : 'none')}}>
                    <div className="col-md-12 admin">
                        <div className="banner_home2">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6 block banner1">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="img_banner1">
                                                <div className="icon-border1"></div>
                                                <div className="icon-border2"></div>
                                                <a href="#">{" "}
                                                    <img className="img-responsive" src={specialProductData[0].imageData} alt="" />
                                                </a>
                                            </div>
                                            <ImageUpload onSetImageData={onChangeSpecialProductImageData} onSetIndex={() => setIndexSpecialProduct(0)} />
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="banner-text1">
                                                <label htmlFor="mainText1" className="form-label">Title</label>
                                                <h3>
                                                    {/* <a className="href=">Classic Desk Lamp</a> */}
                                                    <input id="mainText1" name="mainText1" className="form-control href=" type="text" value={specialProductData[0].mainText}
                                                           onChange={(e) => handleSpecialProductDataChange(specialProductData[0].productId, e)}/>
                                                </h3>
                                                <label htmlFor="subText1" className="form-label">Sub Title</label>
                                                <h3>
                                                    <textarea id="subText1" name="subText1" className="form-control" value={specialProductData[0].subText}
                                                              onChange={(e) => handleSpecialProductDataChange(specialProductData[0].productId, e)}/>
                                                </h3>
                                                <a className="title_font shop-now1" href="javascript:void(0);" onClick={handleSave}>Save changes</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 block banner2">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="banner-text1">
                                                <label htmlFor="mainText2" className="form-label">Title</label>
                                                <h3>
                                                    <input id="mainText2" name="mainText2" className="form-control href=" type="text" value={specialProductData[1].mainText}
                                                           onChange={(e) => handleSpecialProductDataChange(specialProductData[1].productId, e)}/>
                                                </h3>
                                                <label htmlFor="subText2" className="form-label">Sub Title</label>
                                                <h3>
                                                    <textarea id="subText2" name="subText2" className="form-control" value={specialProductData[1].subText}
                                                              onChange={(e) => handleSpecialProductDataChange(specialProductData[1].productId, e)}/>
                                                </h3>
                                                <a className="title_font shop-now1" href="javascript:void(0);" onClick={handleSave}>Save changes</a>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="img_banner1">
                                                <div className="icon-border1"></div>
                                                <div className="icon-border2"></div>
                                                <a href="#"> {" "}
                                                    <img className="img-responsive" src={specialProductData[1].imageData} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                        <ImageUpload onSetImageData={onChangeSpecialProductImageData} onSetIndex={() => setIndexSpecialProduct(1)} />
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
            </div>
        </>
    );
}

export default AdminHome;