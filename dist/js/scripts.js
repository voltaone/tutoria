$(document).ready(function(){"use strict";function e(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}function n(n){if(i[n.keyCode])return e(n),!1}function o(){window.addEventListener&&window.addEventListener("DOMMouseScroll",e,!1),window.onwheel=e,window.onmousewheel=document.onmousewheel=e,window.ontouchmove=e,document.onkeydown=n}function l(){window.removeEventListener&&window.removeEventListener("DOMMouseScroll",e,!1),window.onmousewheel=document.onmousewheel=null,window.onwheel=null,window.ontouchmove=null,document.onkeydown=null}$("#menu-trigger").click(function(e){e.preventDefault(),$(this).toggleClass("open"),$(".nav-panel").slideToggle(),$(this).hasClass("open")?o():l()});var i={37:1,38:1,39:1,40:1};window.matchMedia("(max-width: 767px)").matches&&$(".menu > li > a").click(function(){$(".nav-panel").slideToggle(),$("#menu-trigger").toggleClass("open"),l()})}),$(document).ready(function(){"use strict";$(".slider-full").slick({prevArrow:"<div class='arrow left'><img src='img/illus/icons/arrow-left.svg'></div>",nextArrow:"<div class='arrow right'><img src='img/illus/icons/arrow-right.svg'></div>",dots:!1}),$(".chosen-select").chosen({disable_search_threshold:10,no_results_text:"Нічого не знайдено"}),$(".inline").modaal(),$(function(){$("#accordion").accordion({collapsible:!0,heightStyle:"content"})}),$(function(){$("#tabs").tabs()}),$(window).scroll(function(){$(this).scrollTop()>67?$("nav").addClass("nav-scroll"):$("nav").removeClass("nav-scroll")}),$(".menu li a").mouseover(function(){$(this).hasClass("dropdown-link")?$(".dropdown-panel").addClass("visible"):$(".dropdown-panel").removeClass("visible")})}),$(window).on("load resize",function(){"use strict";window.matchMedia("(max-width: 1024px)").matches?skrollr.destroy():window.matchMedia("(min-width: 1024px)").matches&&skrollr.init(),$(window).scrollTop()>0?$("nav").addClass("nav-scroll"):$("nav").removeClass("nav-scroll")});