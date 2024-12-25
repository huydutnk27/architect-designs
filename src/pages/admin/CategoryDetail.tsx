import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import AdminHeaderComponent from './Header';
import DragNdrop from '../../components/drag-drop/DragDrop';
import TextEditor from '../../components/text-editor/TextEditor';
import { CategoryEntity } from '../../model/category';

// Async function to fetch category data by id
const loadCategoryById = async (id: string) => {
    return await axios.get('/api/getCategoryById', {
        params: {
          _id: id
        }
    });
};

// Async function to fetch categories data
const updateCategory = async (_category: CategoryEntity) => {
    return await axios.post('/api/updateCategory', {
        category: _category
    });
};

const CategoryDetail = () => {
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
    const cateEntity: CategoryEntity = {
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
    const [categoryDetail, setCategoryDetail] = useState(cateEntity);
    const {state} = useLocation();
    const [files, setFiles] = useState([]);
    const [imageData, setImageData] = useState(null);
    const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
    const [textEditor, setTextEditor] = useState("");

    useEffect(() => {
        loadCategoryById(state._id).then(res => {
            Object.assign(cateEntity, res.data.category);
            setCategoryDetail(cateEntity);
            if(categoryDetail) {
                console.log(categoryDetail);
                setImageData(categoryDetail.imageBase64Data);
                setTextEditor(categoryDetail.description);
            }
        });
    }, []);

    const handleImageLoad = (event) => {
        const { naturalHeight, naturalWidth } = event.target;
        setDimensions({ height: naturalHeight, width: naturalWidth });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCategoryDetail((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSave = (event) => {
        if(categoryDetail) {
            categoryDetail.imageBase64Data = imageData;
            categoryDetail.description = textEditor;
        }
        updateCategory(categoryDetail).then(res => {
            if (res.status === 200) {
                showSuccessMessage();
            } else {
                showErrorMessage();
            }
        });
    };
    
    return (
        <>
            <AdminHeaderComponent />
            
            {/* <!--=============== wrapper ===============--> */}
            <div id="wrapper">
                {/* <!-- content-holder  --> */}
                <div className="content-holder scale-bg2">
                    {/* <!-- top-bar-holder  --> */}
                    <div className="top-bar-holder">
                        <div className="container">
                            <div className="top-bar">
                                <div className="top-bar-title">
                                    <h2><span>Admin Page</span> : <a href="portfolio-single.html" className="ajax">Edit Categor</a></h2>
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
                    {/* <!-- top-bar-holder end  --> */}
                    {/* <!-- wrapper-inner  --> */}
                    <div className="wrapper-inner">
                        {/* <!-- content  --> */}
                        <div className="content mr-bottom">
                            {/* <!-- container  --> */}
                            <div className="container">
                                {/* <!-- section  --> */}
                                <section  className="no-padding">
                                    {/* <!-- article --> */}
                                    <article className="sinnle-post">
                                        <div className="container small-container">
                                            <h2>Blog Post title</h2>
                                            <ul className="blog-title">
                                                <li><a href="#" className="tag">12 may 2013</a></li>
                                                <li> - </li>
                                                <li><a href="#" className="tag">Interviews </a></li>
                                            </ul>
                                        </div>
                                        {/* <!--  blog-media  --> */}
                                        <div className="blog-media">
                                            <div className="custom-slider-holder">
                                                <div className="item">
                                                    <img src={imageData} onLoad={handleImageLoad} className="respimg" alt="" style={{width: dimensions.width + "px", 'height': dimensions.height + "px"}}/>
                                                </div>
                                                <ul className="det-list">
                                                    <li><span>Image Height:</span> {dimensions.height}px </li>
                                                    <li><span>Image Width :</span> {dimensions.width}px </li>
                                                </ul>
                                            </div>
                                            <DragNdrop onFilesSelected={setFiles} onSetImageData={setImageData} width="100%" height='100%'/>
                                        </div>
                                        {/* <!--  blog-media  end--> */}
                                        {/* <!--  blog-text  --> */}
                                        <div className="details-box">
                                            <section className="get-in-touch">
                                                <form className="contact-form row">
                                                    <div className="form-field col-lg-12">
                                                        <input id="categoryType" name="categoryType" className="input-text js-input" type="text" value={categoryDetail.categoryType} onChange={handleChange} />
                                                        <label className="label" htmlFor="categoryType">Category Type</label>
                                                    </div>
                                                    <div className="form-field col-lg-12">
                                                        <input id="name" name="name" className="input-text js-input" type="text" value={categoryDetail.name} onChange={handleChange} />
                                                        <label className="label" htmlFor="name">Title</label>
                                                    </div>
                                                    <div className="form-field col-lg-12">
                                                        <input id="subTitle" name="subTitle" className="input-text js-input" type="text" value={categoryDetail.subTitle} onChange={handleChange}/>
                                                        <label className="label" htmlFor="subTitle">Sub Title</label>
                                                    </div>
                                                </form>
                                            </section>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <TextEditor editorStateData={categoryDetail.description} onSetTextEditor={setTextEditor}/>
                                                    <button type="button" className="btn flat-btn float-btn" onClick={handleSave}>SAVE</button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--  blog-text end --> */}
                                    </article>
                                </section>
                                {/* <!--  section end --> */}
                            </div>
                            {/* <!--  container end --> */}
                        </div>
                        {/* <!--  content end --> */}
                    </div>
                    {/* <!--  wrapper-inner end --> */}
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

export default CategoryDetail;