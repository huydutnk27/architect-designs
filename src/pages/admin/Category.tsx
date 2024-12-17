import AdminHeaderComponent from './Header';
import box_item_img_1 from '../../assets/images/folio/thumbs/1.jpg';
import box_item_img_2 from '../../assets/images/folio/thumbs/2.jpg';
import box_item_img_3 from '../../assets/images/folio/thumbs/15.jpg';
import box_item_img_4 from '../../assets/images/folio/thumbs/3.jpg';
import box_item_img_5 from '../../assets/images/folio/thumbs/5.jpg';
import box_item_img_6 from '../../assets/images/folio/thumbs/6.jpg';
import box_item_img_7 from '../../assets/images/folio/thumbs/7.jpg';
import box_item_img_8 from '../../assets/images/folio/thumbs/8.jpg';
import box_item_img_9 from '../../assets/images/folio/thumbs/9.jpg';
import box_item_img_10 from '../../assets/images/folio/thumbs/10.jpg';
import box_item_img_11 from '../../assets/images/folio/thumbs/11.jpg';
import box_item_img_12 from '../../assets/images/folio/thumbs/12.jpg';
import box_item_img_13 from '../../assets/images/folio/thumbs/13.jpg';
import box_item_img_14 from '../../assets/images/folio/thumbs/18.jpg';
import box_item_img_15 from '../../assets/images/folio/thumbs/4.jpg';
import box_item_img_16 from '../../assets/images/folio/thumbs/16.jpg';
import box_item_img_17 from '../../assets/images/folio/thumbs/17.jpg';
import box_item_img_18 from '../../assets/images/folio/thumbs/20.jpg';
import category from '../../data/category.json';
import { TfiPencilAlt } from "react-icons/tfi";


import { useState } from 'react';

const Category = () => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const { login } = useAuth();
    // const handleLogin = async (e: any) => {
    //     e.preventDefault();
    //     // Here you would usually send a request to your backend to authenticate the user
    //     // For the sake of this example, we're using a mock authentication
    //     if (username === "user" && password === "password") {
    //     // Replace with actual authentication logic
    //     await login({ username });
    //     } else {
    //     alert("Invalid username or password");
    //     }
    // };
    const [categoryData, setCategoryData] = useState(category.category);
    return (
        <>
            <AdminHeaderComponent />
            {/* <!--=============== wrapper ===============--> */}
            <div id="wrapper">
                {/* <!-- content-holder  --> */}
                <div className="content-holder scale-bg2">
                    {/* <!-- top-bar-holder  --> */}
                    <div className="top-bar-holder pdtb">
                        <div className="top-bar">
                            <div className="top-bar-title">
                                <h2><span>Admin Page</span> : <a href="portfolio.html" className="ajax">Category</a></h2>
                            </div>
                            <div className="show-share">
                                <span>Share</span>
                                <i className="fa fa-chain-broken"></i>
                            </div>
                            <div className="share-container"  data-share="['facebook','pinterest','googleplus','twitter','linkedin']"><a className="closeshare"><i className="fa fa-times"></i></a></div>
                        </div>
                    </div>
                    {/* <!-- top-bar-holder  end--> */}
                    {/* <!-- content --> */}
                    <div className="content pad-con">
                        {/* <!-- filter --> */}
                        <div className="filter-holder inline-filter">
                            <div className="filter-button"><span>Filter</span></div>
                            <div className="gallery-filters vis-filter">
                                <a href="#" className="gallery-filter gallery-filter-active"  data-filter="*">All</a>
                                <a href="#" className="gallery-filter " data-filter=".houses">Houses</a>
                                <a href="#" className="gallery-filter" data-filter=".apartments">Apartments</a>
                                <a href="#" className="gallery-filter" data-filter=".interior">Interior</a>
                                <a href="#" className="gallery-filter" data-filter=".design">Design</a>
                            </div>
                            <div className="count-folio">
                                <div className="num-album"></div>
                                <div className="all-album"></div>
                            </div>
                        </div>
                        {/* <!-- filter --> */}
                        {/* <!-- gallery-items   --> */}
                        <div className="gallery-items grid-small-pad det-vis">
                            {/* {
                                categoryData.map((item, index) => 
                                    <div className={"gallery-item " + item.categoryType} key={index}>
                                        <div className="grid-item-holder">
                                            <div className="box-item">
                                                <img src={item.imgUrl} alt="" />
                                                <div className="overlay"></div>
                                                <a href={item.imgUrl} className="image-popup popup-image"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                                            </div>
                                            <div className="grid-item">
                                                <h3><a href="portfolio-single.html" className="ajax portfolio-link">{item.name}</a></h3>
                                                <span>{item.subTitle}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } */}
                            {/* <!-- 1 --> */}
                            <div className="gallery-item houses apartments">
                                <div className="grid-item-holder">
                                    <div className="box-item">
                                        <img src={box_item_img_1} alt="" />
                                        <div className="overlay"></div>
                                        <a href={box_item_img_1} className="image-popup popup-image"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="grid-item">
                                        <h3><a href="portfolio-single.html" className="ajax portfolio-link">Trinity River Audubon Centre</a></h3>
                                        <span>Hoses / Apartments</span>
                                        <TfiPencilAlt />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 1 end --> */}
                            {/* <!-- 2 --> */}
                            <div className="gallery-item houses interior">
                                <div className="grid-item-holder">
                                    <div className="box-item">
                                        <img src={box_item_img_2} alt="" />
                                        <div className="overlay"></div>
                                        <a href={box_item_img_2} className="image-popup popup-image"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="grid-item">
                                        <h3><a href="portfolio-single.html" className="ajax portfolio-link">Theatre de Stoep</a></h3>
                                        <span>Hoses  / Interior</span>
                                        <TfiPencilAlt />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 2 end --> */}
                            {/* <!-- 3 --> */}
                            <div className="gallery-item apartments interior">
                                <div className="grid-item-holder">
                                    <div className="box-item">
                                        <img src={box_item_img_3} alt="" />
                                        <div className="overlay"></div>
                                        <a href={box_item_img_3} className="image-popup popup-image"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="grid-item">
                                        <h3><a href="portfolio-single.html" className="ajax portfolio-link">Theatre Agora</a></h3>
                                        <span>Apartments / Interior</span>
                                        <TfiPencilAlt />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 3 end --> */}
                            {/* <!-- 4 --> */}
                            <div className="gallery-item interior design">
                                <div className="grid-item-holder">
                                    <div className="box-item">
                                        <img src={box_item_img_4} alt="" />
                                        <div className="overlay"></div>
                                        <a href={box_item_img_4} className="image-popup popup-image"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                                        <div className="overlay"></div>
                                    </div>
                                    <div className="grid-item">
                                        <h3><a href="portfolio-single.html" className="ajax portfolio-link">New Acropolis Museum</a></h3>
                                        <span>Interior / Design</span>
                                        <TfiPencilAlt />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 4 end --> */}
                            {/* <!-- 5 --> */}
                            <div className="gallery-item houses design">
                                <div className="grid-item-holder">
                                    <div className="box-item">
                                        <img src={box_item_img_5} alt="" />
                                        <div className="overlay"></div>
                                        <a href={box_item_img_5} className="image-popup popup-image"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                                        <div className="overlay"></div>
                                    </div>
                                    <div className="grid-item">
                                        <h3><a href="portfolio-single.html" className="ajax portfolio-link">Alesia Museum</a></h3>
                                        <span>Hoses Design</span>
                                        <TfiPencilAlt />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 5 end --> */}
                            {/* <!-- 6 --> */}
                            <div className="gallery-item houses">
                                <div className="grid-item-holder">
                                    <div className="box-item">
                                        <img src={box_item_img_6} alt="" />
                                        <div className="overlay"></div>
                                        <a href={box_item_img_6} className="image-popup popup-image"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="grid-item">
                                        <h3><a href="portfolio-single.html" className="ajax portfolio-link">Beach and Howe</a></h3>
                                        <span>Hoses Design</span>
                                        <TfiPencilAlt />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 6 end --> */}
                            {/* <!-- 7 --> */}
                            <div className="gallery-item interior design">
                                <div className="grid-item-holder">
                                    <div className="box-item">
                                        <img src={box_item_img_7} alt="" />
                                        <div className="overlay"></div>
                                        <a href={box_item_img_7} className="image-popup popup-image"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="grid-item">
                                        <h3><a href="portfolio-single.html" className="ajax portfolio-link">West 57th Street</a></h3>
                                        <span>Interior /  Design</span>
                                        <TfiPencilAlt />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 7 end --> */}
                            {/* <!-- 8 --> */}
                            <div className="gallery-item apartments interior">
                                <div className="grid-item-holder">
                                    <div className="box-item">
                                        <img src={box_item_img_8} alt="" />
                                        <div className="overlay"></div>
                                        <a href={box_item_img_8} className="image-popup popup-image"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="grid-item">
                                        <h3><a href="portfolio-single.html" className="ajax portfolio-link">Petronas Tower</a></h3>
                                        <span>Apartments / Interior</span>
                                        <TfiPencilAlt />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 8 end --> */}
                            {/* <!-- 9 --> */}
                            <div className="gallery-item houses design">
                                <div className="grid-item-holder">
                                    <div className="box-item">
                                        <img src={box_item_img_9} alt="" />
                                        <div className="overlay"></div>
                                        <a href={box_item_img_9} className="image-popup popup-image"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="grid-item">
                                        <h3><a href="portfolio-single.html" className="ajax portfolio-link">BOK Centre</a></h3>
                                        <span>Hoses  / Design</span>
                                        <TfiPencilAlt />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 9 end --> */}
                            {/* <!-- 10 --> */}
                            <div className="gallery-item design">
                                <div className="grid-item-holder">
                                    <div className="box-item">
                                        <img src={box_item_img_10} alt="" />
                                        <div className="overlay"></div>
                                        <a href={box_item_img_10} className="image-popup popup-image"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="grid-item">
                                        <h3><a href="portfolio-single.html" className="ajax portfolio-link">Art Cultural Centre</a></h3>
                                        <span>Design / Interior</span>
                                        <TfiPencilAlt />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 10 end --> */}
                            {/* <!-- 11 --> */}
                            <div className="gallery-item apartments interior">
                                <div className="grid-item-holder">
                                    <div className="box-item">
                                        <img src={box_item_img_11} alt="" />
                                        <div className="overlay"></div>
                                        <a href={box_item_img_11} className="image-popup popup-image"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="grid-item">
                                        <h3><a href="portfolio-single.html" className="ajax portfolio-link">One World Trade Centre</a></h3>
                                        <span>Apartments / Interior</span>
                                        <TfiPencilAlt />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 11 end --> */}
                            {/* <!-- 12 --> */}
                            <div className="gallery-item houses">
                                <div className="grid-item-holder">
                                    <div className="box-item">
                                        <img src={box_item_img_12} alt="" />
                                        <div className="overlay"></div>
                                        <a href={box_item_img_12} className="image-popup popup-image"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="grid-item">
                                        <h3><a href="portfolio-single.html" className="ajax portfolio-link">Spire Edge</a></h3>
                                        <span>Hoses Design</span>
                                        <TfiPencilAlt />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 12 end --> */}
                            {/* <!-- 13 --> */}
                            <div className="gallery-item design interior">
                                <div className="grid-item-holder">
                                    <div className="box-item">
                                        <img src={box_item_img_13} alt="" />
                                        <div className="overlay"></div>
                                        <a href={box_item_img_13} className="image-popup popup-image"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="grid-item">
                                        <h3><a href="portfolio-single.html" className="ajax portfolio-link">Perez Art Museum</a></h3>
                                        <span>Interior /  Design</span>
                                        <TfiPencilAlt />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 13 end --> */}
                            {/* <!-- 14 --> */}
                            <div className="gallery-item apartments">
                                <div className="grid-item-holder">
                                    <div className="box-item">
                                        <img src={box_item_img_14} alt="" />
                                        <div className="overlay"></div>
                                        <a href={box_item_img_14} className="image-popup popup-image"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="grid-item">
                                        <h3><a href="portfolio-single.html" className="ajax portfolio-link">White Walls</a></h3>
                                        <span>Apartments</span>
                                        <TfiPencilAlt />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 14 end --> */}
                            {/* <!-- 15 --> */}
                            <div className="gallery-item design apartments">
                                <div className="grid-item-holder">
                                    <div className="box-item">
                                        <img src={box_item_img_15} alt="" />
                                        <div className="overlay"></div>
                                        <a href={box_item_img_15} className="image-popup popup-image"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="grid-item">
                                        <h3><a href="portfolio-single.html" className="ajax portfolio-link">Aqua Tower</a></h3>
                                        <span>Apartments /  Design</span>
                                        <TfiPencilAlt />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 15 end --> */}
                            {/* <!-- 16 --> */}
                            <div className="gallery-item houses apartments">
                                <div className="grid-item-holder">
                                    <div className="box-item">
                                        <img src={box_item_img_16} alt="" />
                                        <div className="overlay"></div>
                                        <a href={box_item_img_16} className="image-popup popup-image"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="grid-item">
                                        <h3><a href="portfolio-single.html" className="ajax portfolio-link">Arcus Center </a></h3>
                                        <span>Hoses Design / Apartments</span>
                                        <TfiPencilAlt />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 16 end --> */}
                            {/* <!-- 17 --> */}
                            <div className="gallery-item houses apartments">
                                <div className="grid-item-holder">
                                    <div className="box-item">
                                        <img src={box_item_img_17} alt="" />
                                        <div className="overlay"></div>
                                        <a href={box_item_img_17} className="image-popup popup-image"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="grid-item">
                                        <h3><a href="portfolio-single.html" className="ajax portfolio-link">Business District</a></h3>
                                        <span>Hoses Design / Apartments</span>
                                        <TfiPencilAlt />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 17 end --> */}
                            {/* <!-- 18 --> */}
                            <div className="gallery-item apartments">
                                <div className="grid-item-holder">
                                    <div className="box-item">
                                        <img src={box_item_img_18} alt="" />
                                        <div className="overlay"></div>
                                        <a href={box_item_img_18} className="image-popup popup-image"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="grid-item">
                                        <h3><a href="portfolio-single.html" className="ajax portfolio-link">National Library</a></h3>
                                        <span>Apartments</span>
                                        <TfiPencilAlt />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 18 end --> */}
                        </div>
                        {/* <!-- end gallery items --> */}
                    </div>
                    {/* <!-- content end--> */}
                </div>
                {/* <!-- content-holder end --> */}
            </div>
            {/* <!-- wrapper end --> */}
            {/* <!--to top    --> */}
            <div className="to-top">
                <i className="fa fa-long-arrow-up"></i>
            </div>
            {/* <!-- to top  end --> */}
        </>
    );
};

export default Category;