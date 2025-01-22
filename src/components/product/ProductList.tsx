import background from '../../assets/img/front/bg/back-1-1.jpg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmptyProduct } from '../../model/product';

// Async function to fetch product list
const loadProductList = async () => {
    return await axios.get('/api/loadAllProduct');
};

const ProductList = () => {
    const [productList, setProductList] = useState([EmptyProduct]);
    const navigation = useNavigate();

    /**
     * Redirect to category detail
     * @param e
     * @param link 
     */
    const onDetailClick = (cateId: string) => {
        const params = {_id: cateId};
        navigation('edit', {replace: true, state: params});
        navigation(0);
    };

    useEffect(() => {
        setTimeout(function () { 
            window?.applyElevateZoom();
        }, 500);
        loadProductList().then(res => {
            setProductList(res.data.products);
        });
    }, []);
    return (
        <>
            <section id="wrapper" className="active_grid">
                <div className="back_ct" style={{ backgroundImage: `url(${background})` }}>
                    <div className="container">
                        <nav data-depth="3" className="breadcrumb hidden-sm-down">
                            <ol itemScope itemType="http://schema.org/BreadcrumbList">
                                <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                                    <a itemProp="item" href="https://demo.fieldthemes.com/decor/home3/en/">
                                        <span itemProp="name">Home</span>
                                    </a>
                                    <meta itemProp="position" content="1" />
                                </li>
                                <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                                    <a itemProp="item" href="https://demo.fieldthemes.com/decor/home3/en/12-categories">
                                        <span itemProp="name">Categories</span>
                                    </a>
                                    <meta itemProp="position" content="2" />
                                </li>
                                <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                                    <a itemProp="item" href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing">
                                        <span itemProp="name">Home Brewing</span>
                                    </a>
                                    <meta itemProp="position" content="3" />
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div id="left-column" className="col-xs-12 col-sm-4 col-md-3">
                            <div className="block-categories">
                                <ul className="category-top-menu">
                                    <li><a className="text-uppercase h6" href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing">Category</a></li>
                                    <li>
                                        <ul className="category-sub-menu">
                                            <li data-depth="0"><a href="https://demo.fieldthemes.com/decor/home3/en/33-utensils-gadgets">Utensils &amp; Gadgets</a></li>
                                            <li data-depth="0"><a href="https://demo.fieldthemes.com/decor/home3/en/34-coffee">Coffee</a></li>
                                            <li data-depth="0"><a href="https://demo.fieldthemes.com/decor/home3/en/35-brand">Brand</a></li>
                                            <li data-depth="0"><a href="https://demo.fieldthemes.com/decor/home3/en/36-hats-and-gloves">Hats and Gloves</a></li>
                                            <li data-depth="0"><a href="https://demo.fieldthemes.com/decor/home3/en/37-lifestyle">Lifestyle</a></li>
                                            <li data-depth="0"><a href="https://demo.fieldthemes.com/decor/home3/en/38-shrot-sleeved">Shrot Sleeved</a></li>
                                            <li data-depth="0"><a href="https://demo.fieldthemes.com/decor/home3/en/39-long-sleeved">Long Sleeved</a></li>
                                            <li data-depth="0"><a href="https://demo.fieldthemes.com/decor/home3/en/40-tanks-and-camis">Tanks and Camis</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div id="search_filters_wrapper">
                                <div id="search_filters">
                                    <h4 className="text-uppercase h6 hidden-sm-down">Filter By</h4>
                                    <div id="_desktop_search_filters_clear_all" className="hidden-sm-down clear-all-wrapper">
                                        <button data-search-url="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing" className="btn btn-tertiary js-search-filters-clear-all">
                                            <i className="material-icons">&#xE14C;</i>
                                            Clear all
                                        </button>
                                    </div>
                                    <section className="facet clearfix">
                                        <h1 className="h6 facet-title hidden-sm-down">Price</h1>
                                        <div className="title hidden-md-up" data-target="#facet_57963" data-toggle="collapse">
                                            <h1 className="h6 facet-title">Price</h1>
                                            <span className="pull-xs-right">
                                                <span className="navbar-toggler collapse-icons">
                                                    <i className="material-icons add">&#xE313;</i>
                                                    <i className="material-icons remove">&#xE316;</i>
                                                </span>
                                            </span>
                                        </div>

                                        <ul id="facet_57963" className="collapse">
                                            <li>
                                                <label className="facet-label">
                                                    <span className="custom-checkbox">
                                                        <input data-search-url="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Price-%24-16-17" type="radio" name="filter Price" />
                                                        <span className="ps-shown-by-js"></span>
                                                    </span>

                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Price-%24-16-17" className="_gray-darker search-link js-search-link" rel="nofollow">
                                                        $16.00 - $17.00
                                                        <span className="magnitude">(2)</span>
                                                    </a>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="facet-label">
                                                    <span className="custom-checkbox">
                                                        <input data-search-url="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Price-%24-25-28" type="radio" name="filter Price" />
                                                        <span className="ps-shown-by-js"></span>
                                                    </span>

                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Price-%24-25-28" className="_gray-darker search-link js-search-link" rel="nofollow">
                                                        $25.00 - $28.00
                                                        <span className="magnitude">(3)</span>
                                                    </a>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="facet-label">
                                                    <span className="custom-checkbox">
                                                        <input data-search-url="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Price-%24-28-32" type="radio" name="filter Price" />
                                                        <span className="ps-shown-by-js"></span>
                                                    </span>

                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Price-%24-28-32" className="_gray-darker search-link js-search-link" rel="nofollow">
                                                        $28.00 - $32.00
                                                        <span className="magnitude">(2)</span>
                                                    </a>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="facet-label">
                                                    <span className="custom-checkbox">
                                                        <input data-search-url="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Price-%24-50-53" type="radio" name="filter Price" />
                                                        <span className="ps-shown-by-js"></span>
                                                    </span>

                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Price-%24-50-53" className="_gray-darker search-link js-search-link" rel="nofollow">
                                                        $50.00 - $53.00
                                                        <span className="magnitude">(1)</span>
                                                    </a>
                                                </label>
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="facet clearfix">
                                        <h1 className="h6 facet-title hidden-sm-down">Size</h1>
                                        <div className="title hidden-md-up" data-target="#facet_1023" data-toggle="collapse">
                                            <h1 className="h6 facet-title">Size</h1>
                                            <span className="pull-xs-right">
                                                <span className="navbar-toggler collapse-icons">
                                                    <i className="material-icons add">&#xE313;</i>
                                                    <i className="material-icons remove">&#xE316;</i>
                                                </span>
                                            </span>
                                        </div>

                                        <ul id="facet_1023" className="collapse">
                                            <li>
                                                <label className="facet-label">
                                                    <span className="custom-checkbox">
                                                        <input data-search-url="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Size-S" type="checkbox" />
                                                        <span className="ps-shown-by-js"><i className="material-icons checkbox-checked">&#xE5CA;</i></span>
                                                    </span>

                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Size-S" className="_gray-darker search-link js-search-link" rel="nofollow">
                                                        S
                                                        <span className="magnitude">(8)</span>
                                                    </a>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="facet-label">
                                                    <span className="custom-checkbox">
                                                        <input data-search-url="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Size-M" type="checkbox" />
                                                        <span className="ps-shown-by-js"><i className="material-icons checkbox-checked">&#xE5CA;</i></span>
                                                    </span>

                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Size-M" className="_gray-darker search-link js-search-link" rel="nofollow">
                                                        M
                                                        <span className="magnitude">(8)</span>
                                                    </a>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="facet-label">
                                                    <span className="custom-checkbox">
                                                        <input data-search-url="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Size-L" type="checkbox" />
                                                        <span className="ps-shown-by-js"><i className="material-icons checkbox-checked">&#xE5CA;</i></span>
                                                    </span>

                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Size-L" className="_gray-darker search-link js-search-link" rel="nofollow">
                                                        L
                                                        <span className="magnitude">(8)</span>
                                                    </a>
                                                </label>
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="facet clearfix">
                                        <h1 className="h6 facet-title hidden-sm-down">Color</h1>
                                        <div className="title hidden-md-up" data-target="#facet_97053" data-toggle="collapse">
                                            <h1 className="h6 facet-title">Color</h1>
                                            <span className="pull-xs-right">
                                                <span className="navbar-toggler collapse-icons">
                                                    <i className="material-icons add">&#xE313;</i>
                                                    <i className="material-icons remove">&#xE316;</i>
                                                </span>
                                            </span>
                                        </div>

                                        <ul id="facet_97053" className="collapse">
                                            <li>
                                                <label className="facet-label">
                                                    <span className="custom-checkbox">
                                                        <input data-search-url="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Color-Beige" type="checkbox" />
                                                        <span className="color" style={{backgroundColor: "#f5f5dc"}}></span>
                                                    </span>

                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Color-Beige" className="_gray-darker search-link js-search-link" rel="nofollow">
                                                        Beige
                                                        <span className="magnitude">(1)</span>
                                                    </a>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="facet-label">
                                                    <span className="custom-checkbox">
                                                        <input data-search-url="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Color-White" type="checkbox" />
                                                        <span className="color" style={{backgroundColor: "#ffffff"}}></span>
                                                    </span>

                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Color-White" className="_gray-darker search-link js-search-link" rel="nofollow">
                                                        White
                                                        <span className="magnitude">(2)</span>
                                                    </a>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="facet-label">
                                                    <span className="custom-checkbox">
                                                        <input data-search-url="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Color-Black" type="checkbox" />
                                                        <span className="color" style={{backgroundColor: "#434a54"}}></span>
                                                    </span>

                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Color-Black" className="_gray-darker search-link js-search-link" rel="nofollow">
                                                        Black
                                                        <span className="magnitude">(2)</span>
                                                    </a>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="facet-label">
                                                    <span className="custom-checkbox">
                                                        <input data-search-url="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Color-Orange" type="checkbox" />
                                                        <span className="color" style={{backgroundColor: "#f39c11"}}></span>
                                                    </span>

                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Color-Orange" className="_gray-darker search-link js-search-link" rel="nofollow">
                                                        Orange
                                                        <span className="magnitude">(4)</span>
                                                    </a>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="facet-label">
                                                    <span className="custom-checkbox">
                                                        <input data-search-url="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Color-Blue" type="checkbox" />
                                                        <span className="color" style={{backgroundColor: "#5d9cec"}}></span>
                                                    </span>

                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Color-Blue" className="_gray-darker search-link js-search-link" rel="nofollow">
                                                        Blue
                                                        <span className="magnitude">(2)</span>
                                                    </a>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="facet-label">
                                                    <span className="custom-checkbox">
                                                        <input data-search-url="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Color-Green" type="checkbox" />
                                                        <span className="color" style={{backgroundColor: "#a0d468"}}></span>
                                                    </span>

                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Color-Green" className="_gray-darker search-link js-search-link" rel="nofollow">
                                                        Green
                                                        <span className="magnitude">(1)</span>
                                                    </a>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="facet-label">
                                                    <span className="custom-checkbox">
                                                        <input data-search-url="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Color-Yellow" type="checkbox" />
                                                        <span className="color" style={{backgroundColor: "#f1c40f"}}></span>
                                                    </span>

                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Color-Yellow" className="_gray-darker search-link js-search-link" rel="nofollow">
                                                        Yellow
                                                        <span className="magnitude">(3)</span>
                                                    </a>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="facet-label">
                                                    <span className="custom-checkbox">
                                                        <input data-search-url="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Color-Pink" type="checkbox" />
                                                        <span className="color" style={{backgroundColor: "#fccacd"}}></span>
                                                    </span>

                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Color-Pink" className="_gray-darker search-link js-search-link" rel="nofollow">
                                                        Pink
                                                        <span className="magnitude">(1)</span>
                                                    </a>
                                                </label>
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="facet clearfix">
                                        <h1 className="h6 facet-title hidden-sm-down">Compositions</h1>
                                        <div className="title hidden-md-up" data-target="#facet_3592" data-toggle="collapse">
                                            <h1 className="h6 facet-title">Compositions</h1>
                                            <span className="pull-xs-right">
                                                <span className="navbar-toggler collapse-icons">
                                                    <i className="material-icons add">&#xE313;</i>
                                                    <i className="material-icons remove">&#xE316;</i>
                                                </span>
                                            </span>
                                        </div>

                                        <ul id="facet_3592" className="collapse">
                                            <li>
                                                <label className="facet-label">
                                                    <span className="custom-checkbox">
                                                        <input data-search-url="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Compositions-Cotton" type="checkbox" />
                                                        <span className="ps-shown-by-js"><i className="material-icons checkbox-checked">&#xE5CA;</i></span>
                                                    </span>

                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Compositions-Cotton" className="_gray-darker search-link js-search-link" rel="nofollow">
                                                        Cotton
                                                        <span className="magnitude">(4)</span>
                                                    </a>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="facet-label">
                                                    <span className="custom-checkbox">
                                                        <input data-search-url="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Compositions-Polyester" type="checkbox" />
                                                        <span className="ps-shown-by-js"><i className="material-icons checkbox-checked">&#xE5CA;</i></span>
                                                    </span>

                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Compositions-Polyester" className="_gray-darker search-link js-search-link" rel="nofollow">
                                                        Polyester
                                                        <span className="magnitude">(2)</span>
                                                    </a>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="facet-label">
                                                    <span className="custom-checkbox">
                                                        <input data-search-url="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Compositions-Viscose" type="checkbox" />
                                                        <span className="ps-shown-by-js"><i className="material-icons checkbox-checked">&#xE5CA;</i></span>
                                                    </span>

                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Compositions-Viscose" className="_gray-darker search-link js-search-link" rel="nofollow">
                                                        Viscose
                                                        <span className="magnitude">(2)</span>
                                                    </a>
                                                </label>
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="facet clearfix">
                                        <h1 className="h6 facet-title hidden-sm-down">Styles</h1>
                                        <div className="title hidden-md-up" data-target="#facet_6837" data-toggle="collapse">
                                            <h1 className="h6 facet-title">Styles</h1>
                                            <span className="pull-xs-right">
                                                <span className="navbar-toggler collapse-icons">
                                                    <i className="material-icons add">&#xE313;</i>
                                                    <i className="material-icons remove">&#xE316;</i>
                                                </span>
                                            </span>
                                        </div>

                                        <ul id="facet_6837" className="collapse">
                                            <li>
                                                <label className="facet-label">
                                                    <span className="custom-checkbox">
                                                        <input data-search-url="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Styles-Casual" type="checkbox" />
                                                        <span className="ps-shown-by-js"><i className="material-icons checkbox-checked">&#xE5CA;</i></span>
                                                    </span>

                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Styles-Casual" className="_gray-darker search-link js-search-link" rel="nofollow">
                                                        Casual
                                                        <span className="magnitude">(3)</span>
                                                    </a>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="facet-label">
                                                    <span className="custom-checkbox">
                                                        <input data-search-url="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Styles-Dressy" type="checkbox" />
                                                        <span className="ps-shown-by-js"><i className="material-icons checkbox-checked">&#xE5CA;</i></span>
                                                    </span>

                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Styles-Dressy" className="_gray-darker search-link js-search-link" rel="nofollow">
                                                        Dressy
                                                        <span className="magnitude">(1)</span>
                                                    </a>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="facet-label">
                                                    <span className="custom-checkbox">
                                                        <input data-search-url="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Styles-Girly" type="checkbox" />
                                                        <span className="ps-shown-by-js"><i className="material-icons checkbox-checked">&#xE5CA;</i></span>
                                                    </span>

                                                    <a href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?q=Styles-Girly" className="_gray-darker search-link js-search-link" rel="nofollow">
                                                        Girly
                                                        <span className="magnitude">(4)</span>
                                                    </a>
                                                </label>
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                            <div className="text-center hover-banner">
                                <div className="bn-left block">
                                    <a href="#"> <img className="img-responsive" src="/decor/home3/modules/fieldstaticblocks/images/bn-left.jpg" alt="" /> </a>
                                </div>
                            </div>
                        </div>
                        <div id="content-wrapper" className="left-column col-xs-12 col-sm-8 col-md-9">
                            <section id="main">
                                <section id="products">
                                    <div id="" className="hidden-sm-down">
                                        <section id="js-active-search-filters" className="hide">
                                            <h1 className="h6 active-filter-title">Active filters</h1>
                                        </section>
                                    </div>
                                    <div id="">
                                        <div id="js-product-list-top" className="products-selection">
                                            <div className="click-product-list-grid">
                                                <div className="click-product-grid"><i className="fa fa-th"></i></div>
                                                <div className="click-product-list"><i className="fa fa-align-justify"></i></div>
                                            </div>
                                            <div className="total-products">
                                                <p>There are 8 products.</p>
                                            </div>
                                            <div className="box-sort-by">
                                                <span className="sort-by">Sort by:</span>
                                                <div className="products-sort-order dropdown">
                                                    <a className="select-title" rel="nofollow" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Relevance <i className="fa fa-caret-down"></i> </a>
                                                    <div className="dropdown-menu">
                                                        <a rel="nofollow" href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?order=product.position.asc" className="select-list current js-search-link">
                                                            Relevance
                                                        </a>
                                                        <a rel="nofollow" href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?order=product.name.asc" className="select-list js-search-link">
                                                            Name, A to Z
                                                        </a>
                                                        <a rel="nofollow" href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?order=product.name.desc" className="select-list js-search-link">
                                                            Name, Z to A
                                                        </a>
                                                        <a rel="nofollow" href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?order=product.price.asc" className="select-list js-search-link">
                                                            Price, low to high
                                                        </a>
                                                        <a rel="nofollow" href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?order=product.price.desc" className="select-list js-search-link">
                                                            Price, high to low
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="">
                                        <div id="js-product-list">
                                            <div className="products horizontal_mode">
                                                <div id="box-product-grid">
                                                    <div className="row">
                                                        {
                                                            productList.map((product, index) =>  
                                                                <div className="item col-xs-12 col-sm-6 col-md-4" key={index}>
                                                                    <div className="item-inner">
                                                                        <div className="product-miniature js-product-miniature" data-id-product="5" data-id-product-attribute="19" itemScope itemType="http://schema.org/Product">
                                                                            <div className="left-product">
                                                                                <a href="https://demo.fieldthemes.com/decor/home3/en/categories/5-19-printed-summer-dress.html#/1-size-s/16-color-yellow" className="thumbnail product-thumbnail">
                                                                                    <span className="cover_image">
                                                                                        <img src={product.imageData} data-full-size-image-url={product.imageData} alt="" width="270" height="270" />
                                                                                    </span>
                                                                                    <span className="hover_image">
                                                                                        <img src={product.imageHoverData} data-full-size-image-url={product.imageHoverData} alt="" width="270" height="270" />
                                                                                    </span>
                                                                                </a>
                                                                                <div className="conditions-box">
                                                                                    <span className="new_product"><span>New</span></span>
                                                                                    <span className="sale_product"><span>Sale</span></span>
                                                                                </div>
                                                                                <div className="button-action">
                                                                                    <form>
                                                                                        <input type="hidden" name="token" value="328b550320902db31ea20486f39ebb65" />
                                                                                        <input type="hidden" name="id_product" value="5" />
                                                                                        <button className="add-to-cart" data-button-action="add-to-cart" type="button">
                                                                                            <i className="fa fa-pencil-square-o"></i>
                                                                                        </button>
                                                                                    </form>
                                                                                </div>
                                                                            </div>
                                                                            <div className="right-product">
                                                                                <div className="product-description">
                                                                                    <div className="product_name">
                                                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/categories/5-19-printed-summer-dress.html#/1-size-s/16-color-yellow">
                                                                                            {product.name}
                                                                                        </a>
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
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                                <div id="box-product-list">
                                                    {
                                                        productList.map((product, index) =>
                                                            <div className="item-product-list" key={index}>
                                                                <div className="js-product-miniature" data-id-product="5" data-id-product-attribute="19" itemScope itemType="http://schema.org/Product">
                                                                    <div className="left-product">
                                                                        <a href="https://demo.fieldthemes.com/decor/home3/en/categories/5-19-printed-summer-dress.html#/1-size-s/16-color-yellow" className="thumbnail product-thumbnail">
                                                                            <span className="cover_image">
                                                                                <img className="img-responsive" src={product.imageData} data-full-size-image-url={product.imageData} alt="" width="270" height="270" />
                                                                            </span>
                                                                            <span className="hover_image">
                                                                                <img className="img-responsive" src={product.imageHoverData} data-full-size-image-url={product.imageHoverData} alt="" width="270" height="270" />
                                                                            </span>
                                                                        </a>
                                                                        <div className="conditions-box">
                                                                            <span className="new_product"><span>New</span></span>
                                                                            <span className="sale_product"><span>Sale</span></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="right-product">
                                                                        <div className="description-product">
                                                                            <div className="product_name">
                                                                                <a href="https://demo.fieldthemes.com/decor/home3/en/categories/5-19-printed-summer-dress.html#/1-size-s/16-color-yellow">
                                                                                    {product.name}
                                                                                </a>
                                                                            </div>
                                                                            <div className="product-price-and-shipping">
                                                                                <span className="price">$28.98</span>

                                                                                <span className="regular-price">$30.50</span>
                                                                                <span className="discount-percentage-product">-5%</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="decriptions-short">
                                                                            <p>{product.subTitle}</p>
                                                                        </div>
                                                                        <div className="product-availability-list">
                                                                            <i className="fa fa-check"></i>
                                                                            In stock
                                                                        </div>
                                                                        <div className="variant-links-list">
                                                                            <a href="https://demo.fieldthemes.com/decor/home3/en/categories/5-22-printed-summer-dress.html#/1-size-s/11-color-black"
                                                                            className="color" title="Black" style={{backgroundColor: "#434a54"}}>
                                                                                <span className="sr-only">Black</span>
                                                                            </a>
                                                                            <a href="https://demo.fieldthemes.com/decor/home3/en/categories/5-21-printed-summer-dress.html#/1-size-s/13-color-orange"
                                                                                className="color" title="Orange" style={{backgroundColor: "#f39c11"}}>
                                                                                <span className="sr-only">Orange</span>
                                                                            </a>
                                                                            <a href="https://demo.fieldthemes.com/decor/home3/en/categories/5-20-printed-summer-dress.html#/1-size-s/14-color-blue"
                                                                                className="color" title="Blue" style={{backgroundColor: "#5d9cec"}}>
                                                                                <span className="sr-only">Blue</span>
                                                                            </a>
                                                                            <a href="https://demo.fieldthemes.com/decor/home3/en/categories/5-23-printed-summer-dress.html#/2-size-m/16-color-yellow"
                                                                                className="color" title="Yellow" style={{backgroundColor: "#f1c40f"}}>
                                                                                <span className="sr-only">Yellow</span>
                                                                            </a>
                                                                        </div>

                                                                        <form action="https://demo.fieldthemes.com/decor/home3/en/cart" method="post">
                                                                            <input type="hidden" name="token" value="328b550320902db31ea20486f39ebb65" />
                                                                            <input type="hidden" name="id_product" value="5" />
                                                                            <button className="add-to-cart" data-button-action="add-to-cart" type="submit">
                                                                                <i className="fa fa-shopping-bag"></i>
                                                                            </button>
                                                                        </form>
                                                                        <div className="quick-view-product-list">
                                                                            <a href="javascript:void(0)" className="quick-view" data-link-action="quickview">
                                                                                <i className="fa fa-eye"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <nav className="pagination">
                                            <div className="col-md-6">
                                                <ul className="page-list clearfix text-xs-center">
                                                    <li>
                                                        <a rel="prev" href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?page=1" className="previous disabled js-search-link">
                                                            <i className="material-icons">&#xE314;</i>
                                                        </a>
                                                    </li>
                                                    <li className="current">
                                                        <a rel="nofollow" href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?page=1" className="disabled js-search-link">
                                                            1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a rel="next" href="https://demo.fieldthemes.com/decor/home3/en/31-home-brewing?page=1" className="next disabled js-search-link">
                                                            <i className="material-icons">&#xE315;</i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 text-align-left">
                                                Showing 1-8 of 8 item(s)
                                            </div>
                                        </nav>
                                    </div>
                                    <div id="js-product-list-bottom">
                                        <div id="js-product-list-bottom"></div>
                                    </div>
                                </section>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ProductList;