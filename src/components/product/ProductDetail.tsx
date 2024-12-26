import axios from 'axios';
import bg_img from '../../assets/images/bg/20.jpg';
// import product_detail_img_1 from '../../assets/images/folio/thumbs/2.jpg';
// import product_detail_img_2 from '../../assets/images/folio/thumbs/3.jpg';
// import product_detail_img_3 from '../../assets/images/folio/thumbs/4.jpg';
import { useEffect, useState } from 'react';
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
    useEffect(() => {
        console.log('cateId', state._id);
        loadCategoryById(state._id).then(res => {
            Object.assign(productEntity, res.data.category);
            setProductDetail(productEntity);
            if(productDetail) {
                setImageData(productDetail.imageBase64Data);
            }
        });
    }, []);
    return (
        <>
            {/* <!--=============== wrapper ===============--> */}
            <div id="wrapper">
                {/* <!-- content-holder  --> */}
                <div className="content-holder scale-bg2">
                    {/* <!-- top-bar-holder  --> */}
                    <div className="top-bar-holder">
                        <div className="container">
                            <div className="top-bar">
                                <div className="top-bar-title">
                                    <h2><span>Page</span> : <a href="portfolio-single2.html" className="ajax">Product Detail</a></h2>
                                </div>
                                <div className="show-share">
                                    <span>Share</span>
                                    <i className="fa fa-chain-broken"></i>
                                </div>
                                <div className="share-container"  data-share="['facebook','pinterest','googleplus','twitter','linkedin']">
                                    <a className="closeshare"><i className="fa fa-times"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- top-bar-holder  end--> */}
                    {/* <!-- wrapper-inner--> */}
                    <div className="wrapper-inner">
                        {/* <!-- content--> */}
                        <div className="content mr-bottom">
                            {/* <!-- page-title--> */}
                            <div className="page-title">
                                <div className="overlay"></div>
                                <div className="slider-mask"></div>
                                <div className="bg" data-bg={bg_img}></div>
                                <h2 data-top-bottom="transform: translateY(-150px);" data-bottom-top="transform: translateY(150px);">{productDetail.name}</h2>
                                <div className="page-title-inner">
                                    <div className="container">
                                        <div className="page-title-decor">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- page-title end--> */}
                            {/* <!-- container --> */}
                            <div className="container">
                                <section  className="no-padding">
                                    <div className="details-box">
                                        {/* <!-- custom-slider-holder --> */}
                                        <div className="custom-slider-holder-not mr-bottom">
                                            <div className="custom-slider-not">
                                                {/* <!-- 1 --> */}
                                                <div className="item">
                                                    <img src={imageData} alt="" className="respimg" />
                                                    <a className="intense slider-zoom" href={imageData}><i className="fa fa-expand"></i></a>
                                                </div>
                                                {/* <!-- 1 end--> */}
                                                {/* <!-- 2 --> */}
                                                {/* <div className="item">
                                                    <img src={product_detail_img_2} alt="" className="respimg" />
                                                    <a className="intense slider-zoom" href={product_detail_img_2}><i className="fa fa-expand"></i></a>
                                                </div> */}
                                                {/* <!-- 2 end--> */}
                                                {/* <!-- 3 --> */}
                                                {/* <div className="item">
                                                    <img src={product_detail_img_3} alt="" className="respimg" />
                                                    <a className="intense slider-zoom" href={product_detail_img_3}><i className="fa fa-expand"></i></a>
                                                </div> */}
                                                {/* <!-- 3 end--> */}
                                            </div>
                                            {/* <div className="panel-dots-holder"><div className="panel-dots-inner"><div className="panel-dots"></div></div></div>
                                            <div className="customNavigation">
                                                <a className="next-slide transition"><i className="fa fa-long-arrow-right"></i></a>
                                                <a className="prev-slide transition"><i className="fa fa-long-arrow-left"></i></a>
                                            </div> */}
                                        </div>
                                        {/* <!-- custom-slider-holder end --> */}
                                        <div className="row">
                                            <div className="col-md-8">
                                                <h3>Product Name</h3>
                                                <p className="big-parag">{productDetail.name}</p>
                                                <p dangerouslySetInnerHTML={{ __html: productDetail.description }}></p>
                                                <a href="#" className="btn flat-btn float-btn ">launch project</a>
                                            </div>
                                            <div className="col-md-4">
                                                <ul className="det-list">
                                                    <li><span>Date :</span> 26.05.2015 </li>
                                                    <li><span>Client :</span>  House Big </li>
                                                    <li><span>Status :</span> Completed </li>
                                                    <li><span>Location : </span>  <a href="https://goo.gl/maps/UzN5m" target="_blank"> Kharkiv Ukraine  </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-nav">
                                        <ul>
                                            <li><a href="portfolio-single.html" className="ajax ln"><i className="fa fa fa-angle-left"></i><span className="tooltip">Prev - Project Title</span></a></li>
                                            <li>
                                                <div className="list">
                                                    <Link to="/" className="ajax">
                                                        <span>
                                                            <i className="b1 c1"></i><i className="b1 c2"></i><i className="b1 c3"></i>
                                                            <i className="b2 c1"></i><i className="b2 c2"></i><i className="b2 c3"></i>
                                                            <i className="b3 c1"></i><i className="b3 c2"></i><i className="b3 c3"></i>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </li>
                                            <li><a href="portfolio-single2.html" className="ajax rn"><i className="fa fa fa-angle-right"></i><span className="tooltip">Next - Project Title</span></a></li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                            {/* <!-- container end--> */}
                        </div>
                        {/* <!-- wrapper-inner end--> */}
                    </div>
                    {/* <!-- content end--> */}
                </div>
                {/* <!-- content-holder end --> */}
            </div>
            {/* <!-- wrapper end --> */}
        </>
    );
}

export default ProductDetail;