import { useEffect, useState } from 'react';

const SliderShowComponent = (props) => {
    const [slider, setSlider] = useState(props.data);
    useEffect(() => {

    });
    return (
        <>
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
                                    <img className="img-slider" src={slider[0].imageData} alt="" data-u="image" />
                                </a>
                                <div className="box-slider">
                                    <div className="large-slide-title title_font" data-u="caption" data-t="T-*IB" data-t2="ZML|TR" data-d="-300">
                                        {slider[0].lineText1}
                                    </div>
                                    <div className="big-slide-title title_font" data-u="caption" data-t="ZM*WVR|LB" data-t2="WVC|R" data-d="-300">
                                        {slider[0].lineText2}
                                    </div>
                                    <div className="small-slide-title" data-u="caption" data-t="TORTUOUS|HL" data-t2="JDN|B" data-d="-300">
                                        <p>{slider[0].lineText3}</p>
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
                                    <img className="img-slider" src={slider[1].imageData} alt="" data-u="image" />
                                </a>
                                <div className="box-slider">
                                    <div className="large-slide-title title_font" data-u="caption" data-t="ZM*JUP1|T" data-t2="FLTTRWN|LT">
                                        {slider[1].lineText1}
                                    </div>
                                    <div className="big-slide-title title_font" data-u="caption" data-t="ZM*JUP1|T" data-t2="FLTTRWN|LT">
                                        {slider[1].lineText2}
                                    </div>
                                    <div className="small-slide-title" data-u="caption" data-t="ZM*JUP1|L" data-t2="TORTUOUS|HL">
                                        <h3>{slider[1].lineText3}</h3>
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
                                    <img className="img-slider" src={slider[2].imageData} alt="" data-u="image" />
                                </a>
                                <div className="box-slider">
                                    <div className="large-slide-title title_font" data-u="caption" data-t="ZM*WVR|RT" data-t2="WVC|B" data-d="-300">
                                        {slider[2].lineText1}
                                    </div>
                                    <div className="big-slide-title title_font" data-u="caption" data-t="ZM*WVR|LB" data-t2="WVC|T" data-d="-300">
                                        {slider[2].lineText2}
                                    </div>
                                    <div className="small-slide-title" data-u="caption" data-t="DDGDANCE|RB" data-t2="WVC|T" data-d="-300">
                                        <h3>{slider[2].lineText3}</h3>
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
        </>
    );
}

export default SliderShowComponent;