import AdminHeaderComponent from './Header';
import edit_item_img_2 from '../../assets/images/folio/thumbs/10.jpg';
import { TfiUpload } from "react-icons/tfi";
// import { useState } from 'react';

const CategoryDetail = () => {
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
    // const [categoryData, setCategoryData] = useState(category.category);
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
                                <div className="share-container"  data-share="['facebook','pinterest','googleplus','twitter','linkedin']"><a className="closeshare"><i className="fa fa-times"></i></a></div>
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
                                                    <img src={edit_item_img_2} className="respimg" alt="" />
                                                </div>
                                                <ul className="taglist">
                                                    <li style={{'float': 'right'}}>
                                                        <a href="#">Upload</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!--  blog-media  end--> */}
                                        {/* <!--  blog-text  --> */}
                                        <div className="blog-text">
                                            <h3>Cras sed rutrum lacus, eu eleifend sem. Proin faucibus consectetur</h3>
                                            <p>
                                                Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. Integer iaculis tellus nulla, quis imperdiet magna venenatis vitae
                                            </p>
                                            <p>Praesent sodales ante quam, eu dictum velit ornare quis. Aliquam elementum interdum elit, sollicitudin egestas libero bibendum a. Pellentesque blandit vel nisi et iaculis. Donec nec tristique arcu. Proin ac congue ante. Nunc in convallis metus. Donec luctus nisl augue, quis finibus lectus auctor nec. Cras sed rutrum lacus, eu eleifend sem. Proin faucibus consectetur metus in maximus. Donec sodales eros sed metus consectetur, ac dapibus felis gravida. Morbi vestibulum lorem non metus pulvinar tempus. Ut non ligula ut odio ultrices tincidunt. Morbi sed hendrerit nulla.</p>
                                            <p>Praesent sodales ante quam, eu dictum velit ornare quis. Aliquam elementum interdum elit, sollicitudin egestas libero bibendum a. Pellentesque blandit vel nisi et iaculis. Donec nec tristique arcu. Proin ac congue ante. Nunc in convallis metus. Donec luctus nisl augue, quis finibus lectus auctor nec. Cras sed rutrum lacus, eu eleifend sem. Proin faucibus consectetur metus in maximus. Donec sodales eros sed metus consectetur, ac dapibus felis gravida. Morbi vestibulum lorem non metus pulvinar tempus. Ut non ligula ut odio ultrices tincidunt. Morbi sed hendrerit nulla.</p>
                                            <ul className="taglist">
                                                <li><a href="#">Save</a></li>
                                            </ul>
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