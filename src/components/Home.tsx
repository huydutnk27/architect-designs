import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeComponent = () => {
    const [categoryData, setCategoryData] = useState([]);
    const navigation = useNavigate();

    useEffect(() => {
        const categories = JSON.parse(window.sessionStorage.getItem("categories"));
        setCategoryData(categories);
    }, []);

    /**
     * Redirect to category detail
     * @param cateId 
     */
    const onDetailClick = (cateId: string) => {
        const params = {_id: cateId};
        navigation('detail', {replace: true, state: params});
        navigation(0);
    };
    return (
        <>
            {/* <!--=============== wrapper ===============--> */}
            <div id="wrapper">
                {/* <!-- content-holder  --> */}
                <div className="content-holder scale-bg2">
                    {/* <!-- top-bar-holder  --> */}
                    <div className="top-bar-holder pdtb">
                        <div className="top-bar">
                            <div className="top-bar-title">
                                <h2><span>Page</span> : <a href="portfolio.html" className="ajax">Category</a></h2>
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
                        {
                            categoryData.map((item, index) => 
                                <div className={"gallery-item " + item.categoryType} key={index}>
                                    <div className="grid-item-holder">
                                        <div className="box-item">
                                            <img src={item.imageBase64Data} alt="" />
                                            <div className="overlay"></div>
                                            <a href={item.imageBase64Data} className="image-popup popup-image"><i className="fa fa-arrows-alt" aria-hidden="true"></i></a>
                                        </div>
                                        <div className="grid-item">
                                            <h3><a href="javascript:void(0)" className="ajax portfolio-link" onClick={() => onDetailClick(item.cateId)}>{item.name}</a></h3>
                                            <span>{item.subTitle}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        </div>
                        
                        {/* <!-- end gallery items --> */}
                        <section className="no-padding mr-bottom no-bg  pr-not">
                            {/* <!-- container --> */}
                            <div className="container">
                                <div className="notifer">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h3>Ready to order your project ? </h3>
                                        </div>
                                        <div className="col-md-4"><a href="contact.html" className="ajax btn flat-btn">Get in Touch</a></div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- container end--> */}
                        </section>
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

export default HomeComponent;
