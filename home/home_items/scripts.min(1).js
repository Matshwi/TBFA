!function(a,e){"use strict";var t={init:function(){e.hooks.addAction("frontend/element_ready/section",t.elementorSection),new WOW({animateClass:"animated",offset:100,mobile:!1,duration:1e3}).init()},elementorSection:function(a){Boolean(e.isEditMode()),new l(a).init()}},l=function(a){var _=this,e=a.data("id"),t=a.data("dl_parallax"),l=a.data("dl_move"),o=document.querySelector("#dl_parallax_ele-"+e);a.data("dl_parallax")||o&&(t=JSON.parse(o.getAttribute("data-dl_parallax")),l=JSON.parse(o.getAttribute("data-dl_move"))),o||(a.prepend('<div id="dl_parallax_ele-'+e+'" class="dl_parallax_ele-wrapper"></div>'),o=document.querySelector("#dl_parallax_ele-"+e)),_.init=function(){Array.isArray(t)&&o&&(t.forEach(function(a,e){var t=a._id,l=a.item_source,d=document.createElement("div");d.setAttribute("class","dl_parallax_element elementor-repeater-item-"+t),d.setAttribute("style","position: absolute;"),"hidden-tablet"==a.dl_hide_tablet&&(d.classList.add("dl-hidden-tablet"),t=window.matchMedia("(max-width: 1024px) and (min-width: 768px)"),_.tablateMedia(t),t.addListener(_.tablateMedia)),"hidden-phone"==a.dl_hide_mobile&&(d.classList.add("dl-hidden-mobile"),i=window.matchMedia("(max-width: 767px)"),_.mobileMedia(i),i.addListener(_.mobileMedia)),a.dl_wow_enable&&(d.classList.add("wow"),null!==a.dl_animation&&d.classList.add(a.dl_animation),""!==a.dl_animation_delay&&d.setAttribute("data-wow-delay",a.dl_animation_delay+"s"),""!==a.dl_animation_duration&&d.setAttribute("data-wow-duration",a.dl_animation_duration+"s"));var i=document.createElement("div");i.setAttribute("class","layer"),i.classList.add("layer"+e),a.dl_item_depth&&i.setAttribute("data-depth",a.dl_item_depth);var n,e={};a.dl_parallax_data_popup&&(""!==a.dl_translate_x_axix&&(e.x=a.dl_translate_x_axix),""!==a.dl_translate_y_axix&&(e.y=a.dl_translate_y_axix),""!==a.dl_rotate_x_axix&&(e.rotateX=a.dl_rotate_x_axix),""!==a.dl_rotate_y_axix&&(e.rotateY=a.dl_rotate_y_axix),""!==a.dl_rotate_z_axix&&(e.rotateZ=a.dl_rotate_z_axix),""!==a.dl_scale_x_axix&&(e.scaleX=a.dl_scale_x_axix),""!==a.dl_scale_y_axix&&(e.scaleX=a.dl_scale_y_axix),""!==a.dl_scale_x_axix&&(e.scaleX=a.dl_scale_x_axix),""!==a.dl_scale_y_axix&&(e.scaleX=a.dl_scale_y_axix),""!==a.dl_scale_z_axix&&(e.scaleZ=a.dl_scale_z_axix)),"text"==l||"icon"==l||((n=document.createElement("img")).setAttribute("src",a.image.url),n.setAttribute("alt","")),n.setAttribute("data-parallax",JSON.stringify(e)),i.appendChild(n),d.appendChild(i),o.appendChild(d)}),"yes"==l.dl_parallaxmove_enable&&a.parallax({scalarX:l.dl_scalar_x_axix,scalarY:l.dl_scalar_y_axix}))},_.tablateMedia=function(a){a.matches?document.querySelectorAll(".dl-hidden-tablet").forEach(function(a){a.style.display="none"}):document.querySelectorAll(".dl-hidden-tablet").forEach(function(a){a.style.display="block"})},_.mobileMedia=function(a){a.matches?document.querySelectorAll(".dl-hidden-mobile").forEach(function(a){a.style.display="none"}):document.querySelectorAll(".dl-hidden-mobile").forEach(function(a){a.style.display="block"})}};a(window).on("elementor/frontend/init",t.init)}(jQuery,window.elementorFrontend);