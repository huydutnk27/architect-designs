export {};
import $ from 'jquery';
// declare let global: any;
// global.jQuery = $;
// global.applyElevateZoom = applyElevateZoom;
// export {};
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

// declare function applyElevateZoom() {
//     alert('1234567890');
//     var bigimage = $(".js-qv-product-cover").attr("src");
//     // @ts-ignore
//     // $(".js-qv-product-cover").elevateZoom({
//     //     zoomType: zoom_type,
//     //     cursor: zoom_cursor_type,
//     //     zoomWindowFadeIn: zoom_fade_in,
//     //     zoomWindowFadeOut: zoom_fade_out,
//     //     zoomWindowPosition: zoom_window_pos,
//     //     scrollZoom: zoom_scroll,
//     //     easing: zoom_easing,
//     //     tint: zoom_tint,
//     //     tintColour: zoom_tint_color,
//     //     tintOpacity: zoom_tint_opacity,
//     //     lensShape: zoom_lens_shape,
//     //     lensSize: zoom_lens_size,
//     //     zoomImage: bigimage,
//     //     borderSize: 0,
//     //     borderColour: "",
//     //     zoomWindowWidth: 409,
//     //     zoomWindowHeight: 409,
//     //     zoomLevel: 0.8,
//     //     lensBorderSize: 0,
//     // });
// }

// declare global {
//     interface Window {
//         jQuery: typeof jQuery;
//         $: typeof jQuery;
//         applyElevateZoom: () => void;
//     }
// }

declare global {
	interface Window {
		applyElevateZoom: () => void;
	}
}