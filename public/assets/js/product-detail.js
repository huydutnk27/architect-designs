var zoom_type = "window";
var zoom_fade_in = 400;
var zoom_fade_out = 550;
var zoom_cursor_type = "default";
var zoom_window_pos = 1;
var zoom_scroll = true;
var zoom_easing = true;
var zoom_tint = true;
var zoom_tint_color = "#333";
var zoom_tint_opacity = 0.4;
var zoom_lens_shape = "round";
var zoom_lens_size = 345;
var fieldspecialpsl_maxitem = 1;
var fieldspecialpsl_mediumitem = 1;
var fieldspecialpsl_minitem = 1;
var fieldspecialpsl_autoscroll = false;
var fieldspecialpsl_pauseonhover = false;
var fieldspecialpsl_pagination = false;
var fieldspecialpsl_navigation = false;

var fieldtabcatepsl_2_maxitem = 4;
var fieldtabcatepsl_2_mediumitem = 2;
var fieldtabcatepsl_2_minitem = 1;
var fieldtabcatepsl_2_autoscroll = false;
var fieldtabcatepsl_2_pauseonhover = false;
var fieldtabcatepsl_2_pagination = false;
var fieldtabcatepsl_2_navigation = false;

function applyElevateZoom() {
    var bigimage = $(".js-qv-product-cover").attr("src");
    $(".js-qv-product-cover").elevateZoom({
        zoomActivation:"hover",// Can also be click (PLACEHOLDER FOR NEXT VERSION)
        zoomEnabled:true,//false disables zoomwindow from showing
        preloading: 1,//by default, load all the images, if 0, then only load images after activated (PLACEHOLDER FOR NEXT VERSION)
        zoomLevel: 1,//default zoom level of image
        scrollZoom:false,//allow zoom on mousewheel, true to activate
        scrollZoomIncrement: 0.1, //steps of the scrollzoom
        minZoomLevel:false,
        maxZoomLevel:false,
        easing:false,
        easingAmount: 12,
        lensSize: 200,
        zoomWindowWidth: 400,
        zoomWindowHeight: 400,
        zoomWindowOffetx: 0,
        zoomWindowOffety: 0,
        zoomWindowPosition: 1,
        zoomWindowBgColour:"#fff",
        lensFadeIn:false,
        lensFadeOut:false,
        debug:false,
        zoomWindowFadeIn:false,
        zoomWindowFadeOut:false,
        zoomWindowAlwaysShow:false,
        zoomTintFadeIn:false,
        zoomTintFadeOut:false,
        borderSize: 2,
        showLens:true,
        borderColour:"#888",
        lensBorderSize: 1,
        lensBorderColour:"#000",
        lensShape:"square",//can be "round"
        zoomType:"window",//window is default,  also "lens" available -
        containLensZoom:false,
        lensColour:"white",//colour of the lens background
        lensOpacity: 0.4,//opacity of the lens
        lenszoom:false,
        tint:false,//enable the tinting
        tintColour:"#333",//default tint color, can be anything, red, #ccc, rgb(0,0,0)
        tintOpacity: 0.4,//opacity of the tint
        gallery:false,
        galleryActiveClass:"zoomGalleryActive",
        imageCrossfade:false,
        constrainType:false, //width or height
        constrainSize:false, //in pixels the dimensions you want to constrain on
        loadingIcon:false,//http://www.example.com/spinner.gif
        cursor:"default",// user should set to what they want the cursor as, if they have set a click function
        responsive:true,
        onComplete: $.noop,
        onDestroy:function() {},
        onZoomedImageLoaded:function() {},
        onImageSwap: $.noop,
        onImageSwapComplete: $.noop
    });

    $(".product-images-33650576").owlCarousel({
        itemsCustom: [
            [0, 2],
            [320, 2],
            [568, 3],
        ],
        responsiveRefreshRate: 50,
        slideSpeed: 200,
        paginationSpeed: 500,
        rewindSpeed: 600,
        autoPlay: false,
        stopOnHover: false,
        rewindNav: true,
        pagination: false,
        navigation: true,
        navigationText: [
            '<div className="carousel-previous disable-select"><span className="fa fa-angle-left"></span></div>',
            '<div className="carousel-next disable-select"><span className="fa fa-angle-right"></span></div>',
        ],
    });

    $(".special_block_right .special_products").each(function () {
        $(this).owlCarousel({
            itemsCustom: [
                [0, 1],
                [320, 1],
                [480, fieldspecialpsl_minitem],
                [768, fieldspecialpsl_mediumitem],
                [992, fieldspecialpsl_maxitem],
                [1200, fieldspecialpsl_maxitem],
            ],
            responsiveRefreshRate: 50,
            slideSpeed: 200,
            paginationSpeed: 500,
            rewindSpeed: 600,
            autoPlay: fieldspecialpsl_autoscroll,
            stopOnHover: fieldspecialpsl_pauseonhover,
            rewindNav: true,
            pagination: fieldspecialpsl_pagination,
            navigation: fieldspecialpsl_navigation,
            navigationText: [
                '<div className="carousel-previous disable-select"><span className="fa fa-angle-left"></span></div>',
                '<div className="carousel-next disable-select"><span className="fa fa-angle-right"></span></div>',
            ],
        });
    });

    $("#field-slideshow-home").nivoSlider({
        effect: "random",
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: "1000",
        pauseTime: "4800",
        startSlide: 0,
        directionNav: false,
        controlNav: 1,
        controlNavThumbs: false,
        pauseOnHover: true,
        manualAdvance: false,
        prevText: "Prev",
        nextText: "Next",
        afterLoad: function () {
            $(".field-loading").css("display", "none");
        },
        beforeChange: function () {
            $(".field-slideshow-title, .field-slideshow-des").css("left", "-100%");
            $(".field-slideshow-readmore").css("left", "-100%");
        },
        afterChange: function () {
            $(".field-slideshow-title, .field-slideshow-des, .field-slideshow-readmore").css("left", "0");
        },
    });

    $(".tab_category_slider_2").hide();
    $(".tab_category_slider_2:first").show();
    $(".tab-category-container-slider_2 ul.tab_cates li").click(function () {
        $(".tab-category-container-slider_2 ul.tab_cates li").removeClass("active");
        $(this).addClass("active");
        $(".tab_category_slider_2").hide();
        $(".tab_category_slider_2").removeClass("animate1");
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).addClass("animate1");
        $("#" + activeTab).fadeIn();
    });

    $(".tab-category-container-slider_2 #tab_2_14 .tabcate_content").owlCarousel({
        itemsCustom: [
            [0, 1],
            [320, 1],
            [480, fieldtabcatepsl_2_minitem],
            [600, fieldtabcatepsl_2_mediumitem],
            [768, 3],
            [992, fieldtabcatepsl_2_maxitem],
            [1200, fieldtabcatepsl_2_maxitem],
        ],
        responsiveRefreshRate: 50,
        slideSpeed: 200,
        paginationSpeed: 500,
        rewindSpeed: 600,
        autoPlay: fieldtabcatepsl_2_autoscroll,
        stopOnHover: fieldtabcatepsl_2_pauseonhover,
        rewindNav: true,
        pagination: fieldtabcatepsl_2_pagination,
        navigation: fieldtabcatepsl_2_navigation,
        navigationText: [
            '<div className="carousel-previous disable-select"><span className="fa fa-angle-left"></span></div>',
            '<div className="carousel-next disable-select"><span className="fa fa-angle-right"></span></div>',
        ],
    });

    $(".tab-category-container-slider_2 #tab_2_15 .tabcate_content").owlCarousel({
        itemsCustom: [
            [0, 1],
            [320, 1],
            [480, fieldtabcatepsl_2_minitem],
            [600, fieldtabcatepsl_2_mediumitem],
            [768, 3],
            [992, fieldtabcatepsl_2_maxitem],
            [1200, fieldtabcatepsl_2_maxitem],
        ],
        responsiveRefreshRate: 50,
        slideSpeed: 200,
        paginationSpeed: 500,
        rewindSpeed: 600,
        autoPlay: fieldtabcatepsl_2_autoscroll,
        stopOnHover: fieldtabcatepsl_2_pauseonhover,
        rewindNav: true,
        pagination: fieldtabcatepsl_2_pagination,
        navigation: fieldtabcatepsl_2_navigation,
        navigationText: [
            '<div className="carousel-previous disable-select"><span className="fa fa-angle-left"></span></div>',
            '<div className="carousel-next disable-select"><span className="fa fa-angle-right"></span></div>',
        ],
    });

    $(".tab-category-container-slider_2 #tab_2_16 .tabcate_content").owlCarousel({
        itemsCustom: [
            [0, 1],
            [320, 1],
            [480, fieldtabcatepsl_2_minitem],
            [600, fieldtabcatepsl_2_mediumitem],
            [768, 3],
            [992, fieldtabcatepsl_2_maxitem],
            [1200, fieldtabcatepsl_2_maxitem],
        ],
        responsiveRefreshRate: 50,
        slideSpeed: 200,
        paginationSpeed: 500,
        rewindSpeed: 600,
        autoPlay: fieldtabcatepsl_2_autoscroll,
        stopOnHover: fieldtabcatepsl_2_pauseonhover,
        rewindNav: true,
        pagination: fieldtabcatepsl_2_pagination,
        navigation: fieldtabcatepsl_2_navigation,
        navigationText: [
            '<div className="carousel-previous disable-select"><span className="fa fa-angle-left"></span></div>',
            '<div className="carousel-next disable-select"><span className="fa fa-angle-right"></span></div>',
        ],
    });

    $(".tab-category-container-slider_2 #tab_2_17 .tabcate_content").owlCarousel({
        itemsCustom: [
            [0, 1],
            [320, 1],
            [480, fieldtabcatepsl_2_minitem],
            [600, fieldtabcatepsl_2_mediumitem],
            [768, 3],
            [992, fieldtabcatepsl_2_maxitem],
            [1200, fieldtabcatepsl_2_maxitem],
        ],
        responsiveRefreshRate: 50,
        slideSpeed: 200,
        paginationSpeed: 500,
        rewindSpeed: 600,
        autoPlay: fieldtabcatepsl_2_autoscroll,
        stopOnHover: fieldtabcatepsl_2_pauseonhover,
        rewindNav: true,
        pagination: fieldtabcatepsl_2_pagination,
        navigation: fieldtabcatepsl_2_navigation,
        navigationText: [
            '<div className="carousel-previous disable-select"><span className="fa fa-angle-left"></span></div>',
            '<div className="carousel-next disable-select"><span className="fa fa-angle-right"></span></div>',
        ],
    });

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }

    $(".click-product-grid").click(function (e) {
        $("#wrapper").removeClass("active_list");
        $("#wrapper").addClass("active_grid");
        setCookie("status_list_product", "active_grid", 1);
    });
    $(".click-product-list").click(function (e) {
        $("#wrapper").removeClass("active_grid");
        $("#wrapper").addClass("active_list");
        setCookie("status_list_product", "active_list", 1);
    });
    if (getCookie("status_list_product") !== "" && getCookie("status_list_product") !== "active_grid") {
        $("#wrapper").removeClass("active_grid");
        $("#wrapper").addClass("active_list");
    }
}

function restartElevateZoom() {
    $(".zoomContainer").remove();
    applyElevateZoom();
}

if ($(".zoomContainer").length) {
    $(".zoomContainer").remove();
}
// applyElevateZoom();
$(document).on("click", ".input-color", function (e) {
    restartElevateZoom();
});
$(document).on("click", ".js-qv-mask img.thumb", function (e) {
    restartElevateZoom();
});



