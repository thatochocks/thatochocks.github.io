/*************************
jQuery Infinty Slider v.1.0
@Website: http://www.epeo.it/infinityslider/
@Author: Epeo
@Copyright: 10/03/2014
@Free Version
Infinity Slider Lite is a free resource available for personal and commercial projects.

You can use and modify it for your projects but we are not legally liable for any misuse of this resource.

If you like it, we only ask you to include the attribution or link back to epeo.it/infinityslider, remember: 
purchasing is not the only way to help us, you can simply share our link to the world. 

You cannot however redistribute, resell, lease, license, sub-license or offer our resources to any third party. 
This includes uploading our resources to another website, marketplace or media-sharing tool, and offering our 
resources as a separate attachment from any of your work. If you do plan to include one of our resource on an 
item or template that will be sold on a website or marketplace, we ask of you to contact us to determine the proper 
use of our resource before doing so.
************************/
function infinitySlider(){var c="",e=0;if("undefined"===typeof infinitySliderId||""==infinitySliderId)c="infinitySliderId Missing \n";if("undefined"===typeof infinitySliderCommandsClass||""==infinitySliderCommandsClass)c="infinitySliderCommandsClass Missing \n";if("undefined"===typeof infinitySliderPreviousButtonClass||""==infinitySliderPreviousButtonClass)e++;else var V=!0;if("undefined"===typeof infinitySliderNextButtonClass||""==infinitySliderNextButtonClass)e++;else var W=!0;if("undefined"===
typeof infinitySliderDotsClass||""==infinitySliderDotsClass)e++;else if("undefined"===typeof infinitySliderDotClass||""==infinitySliderDotClass)c+="infinitySliderDotClass Missing \n";else var X=!0;if("undefined"===typeof infinitySliderPlayButtonClass||""==infinitySliderPlayButtonClass)e++;else var ea=!0;if("undefined"===typeof infinitySliderStopButtonClass||""==infinitySliderStopButtonClass)e++;else var fa=!0;if("undefined"===typeof infinitySliderContentClass||""==infinitySliderContentClass)c="infinitySliderContentClass Missing \n";
if("undefined"===typeof infinitySliderItemsClass||""==infinitySliderItemsClass)c="infinitySliderItemsClass Missing \n";else if("undefined"===typeof infinitySliderItemClass||""==infinitySliderItemClass)c="infinitySliderItemClass Missing \n";var na="undefined"!=typeof infinitySliderKeyboardNavigation&&!0==infinitySliderKeyboardNavigation?!0:!1;6==e&&(c+="infinitySliderPreviousButtonClass Missing \n",c+="infinitySliderNextButtonClass Missing \n",c+="infinitySliderDotsClass Missing \n",c+="infinitySliderPlayButtonClass Missing \n",
c+="infinitySliderStopButtonClass Missing \n",c+="At least one command is required \n");if(""!=c)c="Error! \n"+c+"\nPlease read the Documentation at http://demo.epeo.it/infinityslider/",alert(c);else{var c="",e=0,s=$("#"+infinitySliderId);if(1==s.length){s.addClass("iS");var r=infinitySliderId,K=s.children("."+infinitySliderContentClass);if(0==K.length)c="infinitySliderItemsClass("+infinitySliderItemsClass+") does not exist \n";else{K.addClass("iS-Content");var m=K.children("."+infinitySliderItemsClass);
if(0==m.length)c="infinitySliderItemsClass("+infinitySliderItemsClass+") do not exist \n";else{m.addClass("iS-Items");var C=m.children("."+infinitySliderItemClass);0==C.length?c="infinitySliderItemClass("+infinitySliderItemClass+") do not exist \n":C.addClass("iS-Item")}}e=s.children("."+infinitySliderCommandsClass);if(0==e.length)c="infinitySliderCommandsClass("+infinitySliderCommandsClass+") does not exist \n";else{e.addClass("iS-Commands");if(!0==V){var L=e.children("."+infinitySliderPreviousButtonClass);
0==L.length?c=c+"infinitySliderPreviousButtonClass("+infinitySliderPreviousButtonClass+") do not exist \n":L.addClass("iS-Previous")}if(!0==W){var D=e.children("."+infinitySliderNextButtonClass);0==D.length?c=c+"infinitySliderNextButtonClass("+infinitySliderNextButtonClass+") do not exist \n":D.addClass("iS-Next")}s.append('<div class="isnomulti"></div>');if(!0==X){var E=e.children("."+infinitySliderDotsClass);if(0==E.length)c=c+"infinitySliderDotsClass("+infinitySliderDotsClass+") does not exist \n";
else{E.addClass("iS-Dots");var t=E.children("."+infinitySliderDotClass);if(0==t.length)c=c+"infinitySliderDotClass("+infinitySliderDotClass+") do not exist \n";else{t.addClass("iS-Dot");var F="undefined"!=typeof infinitySliderDotActiveClass&&""!=infinitySliderDotActiveClass?infinitySliderDotActiveClass+" iS-Dotactive":"iS-Dotactive"}}}if(!0==ea){var G=e.children("."+infinitySliderPlayButtonClass);if(0==G.length)c=c+"infinitySliderPlayButtonClass("+infinitySliderPlayButtonClass+") do not exist \n";
else{G.addClass("iS-Play");if(""!=infinitySliderLoopIndicator&&!w){var w=$("."+infinitySliderLoopIndicator);w.addClass("iS-Loopline")}var Y="undefined"!=typeof infinitySliderPlayButtonActive&&""!=infinitySliderPlayButtonActive?infinitySliderPlayButtonActive+" iS-Playactive":"iS-Playactive"}}if(!0==fa){var H=e.children("."+infinitySliderStopButtonClass);if(0==H.length)c=c+"infinitySliderStopButtonClass("+infinitySliderStopButtonClass+") do not exist \n";else{H.addClass("iS-Stop");var Z="undefined"!=
typeof infinitySliderStopButtonActive&&""!=infinitySliderStopButtonActive?infinitySliderStopButtonActive+" iS-Stopactive":"iS-Stopactive"}}}}else c="infinitySliderId("+infinitySliderId+") does not exist \n";if(""!=c)c="Error! \n"+c+"\nPlease read the Documentation at http://demo.epeo.it/infinityslider/",alert(c);else{var x="",c="",f=1;!0==X&&t.eq(0).addClass(F);var u=[" "],v=[" "],z=[" "],A=[" "],B=[" "],ga=[" "],l=[" "],n="<style>";1==$(".isnomulti").length&&m.addClass("iS-Notime iS-Preactive");
var p="",h="",q="",k="",M=!1,N=!1,O=!1,P=!1,Q=!1,R=!1,S=!1,T=!1,U=!1,g=function(b,a){for(var c=!1,d=0;d<b.length;d++)b[d]==a&&(c=!0);!1==c&&b.push(a)},ha=function(b,a,e,d){"slidetop"==b?!0==M?c=c+"The effect"+a+"("+b+") on the slide number: "+f+" can be inserted only once\n":!0==P?c=c+"The effect"+a+"("+b+") on the slide number: "+f+" can not be combinate with the effect"+a+"(slidebottom)\n":(p=p+"[data-effect"+a+'~="slidetop"]',h+=" translateY(-100%)",M=!0):"slidebottom"==b?!0==P?c=c+"The effect"+
a+"("+b+") on the slide number: "+f+" can be inserted only once\n":!0==M?c=c+"The effect"+a+"("+b+") on the slide number: "+f+" can not be combinate with the effect"+a+"(slidetop)\n":(p=p+"[data-effect"+a+'~="slidebottom"]',h+=" translateY(100%)",P=!0):"slideleft"==b?!0==N?c=c+"The effect"+a+"("+b+") on the slide number: "+f+" can be inserted only once\n":!0==O?c=c+"The effect"+a+"("+b+") on the slide number: "+f+" can not be combinate with the effect"+a+"(slideright)\n":(p=p+"[data-effect"+a+'~="slideleft"]',
h+=" translateX(-100%)",N=!0):"slideright"==b?!0==O?c=c+"The effect"+a+"("+b+") on the slide number: "+f+" can be inserted only once\n":!0==N?c=c+"The effect"+a+"("+b+") on the slide number: "+f+" can not be combinate with the effect"+a+"(slideleft)\n":(p=p+"[data-effect"+a+'~="slideright"]',h+=" translateX(100%)",O=!0):"zoomin"==b?g(l,"ZoomIn is not available on this version of Infinity Slider"):"zoomout"==b?g(l,"ZoomOut is not available on this version of Infinity Slider"):"fliptop"==b?g(l,"FlipTop is not available on this version of Infinity Slider"):
"flipbottom"==b?g(l,"FlipBottom is not available on this version of Infinity Slider"):"flipleft"==b?g(l,"FlipLeft is not available on this version of Infinity Slider"):"flipright"==b?g(l,"FlipLeft is not available on this version of Infinity Slider"):"spinleft"==b?g(l,"SpinLeft is not available on this version of Infinity Slider"):"spinright"==b?g(l,"SpinRight is not available on this version of Infinity Slider"):"slidetopscreen"==b?!0==R?c=c+"The effect"+a+"("+b+") on the slide number: "+f+" can be inserted only once\n":
!0==U?c=c+"The effect"+a+"("+b+") on the slide number: "+f+" can not be combinate with the effect"+a+"(slidebottomscreen)\n":(q=q+"[data-effect"+a+'~="slidetopscreen"]',k+=" translateY(-100%)",R=!0):"slidebottomscreen"==b?!0==U?c=c+"The effect"+a+"("+b+") on the slide number: "+f+" can be inserted only once\n":!0==R?c=c+"The effect"+a+"("+b+") on the slide number: "+f+" can not be combinate with the effect"+a+"(slidetopscreen)\n":(q=q+"[data-effect"+a+'~="slidebottomscreen"]',k+=" translateY(100%)",
U=!0):"slideleftscreen"==b?!0==S?c=c+"The effect"+a+"("+b+") on the slide number: "+f+" can be inserted only once\n":!0==T?c=c+"The effect"+a+"("+b+") on the slide number: "+f+" can not be combinate with the effect"+a+"(sliderightscreen)\n":(q=q+"[data-effect"+a+'~="slideleftscreen"]',k+=" translateX(-100%)",S=!0):"sliderightscreen"==b?!0==T?c=c+"The effect"+a+"("+b+") on the slide number: "+f+" can be inserted only once\n":!0==S?c=c+"The effect"+a+"("+b+") on the slide number: "+f+" can not be combinate with the effect"+
a+"(slideleftscreen)\n":(q=q+"[data-effect"+a+'~="sliderightscreen"]',k+=" translateX(100%)",T=!0):"fadein"==b?!0==Q?c=c+"The effect"+a+"("+b+") on the slide number: "+f+" can be inserted only once\n":Q=!0:c=c+"The effect"+a+"("+b+") on the slide number: "+f+" does not exist\n";!0==e&&(!0==Q&&("In"==a?(b="#"+infinitySliderId+' .iS-Preactive > .iS-Item[data-effectIn~="fadein"]{opacity: 0;}',g(u,b),!0==d&&(b="#"+infinitySliderId+' .iS-Pruactive > .iS-Item[data-effectIn~="fadein"]{opacity: 0;}',g(u,
b))):"Out"==a&&(b="#"+infinitySliderId+' .iS-Proactive > .iS-Item[data-effectOut~="fadein"]{opacity: 0;}',g(v,b),!0==d&&(b="#"+infinitySliderId+' .iS-Priactive > .iS-Item[data-effectOut~="fadein"]{opacity: 0;}',g(v,b)))),""!=h&&("In"==a?(b="#"+infinitySliderId+" .iS-Preactive > .iS-Item"+p+" > *{-webkit-transform: "+h+"; transform: "+h+";}",g(u,b),!0==d&&(b="#"+infinitySliderId+" .iS-Pruactive > .iS-Item"+p+" > *{-webkit-transform: "+h+"; transform: "+h+";}",g(u,b))):"Out"==a&&(b="#"+infinitySliderId+
" .iS-Proactive > .iS-Item"+p+" > *{-webkit-transform: "+h+"; transform: "+h+";}",g(v,b),!0==d&&(b="#"+infinitySliderId+" .iS-Priactive > .iS-Item"+p+" > *{-webkit-transform: "+h+"; transform: "+h+";}",g(v,b)))),""!=k&&("In"==a?(b="#"+infinitySliderId+" .iS-Preactive > .iS-Item"+q+"{-webkit-transform: "+k+"; transform: "+k+";}",g(u,b),!0==d&&(b="#"+infinitySliderId+" .iS-Pruactive > .iS-Item"+q+"{-webkit-transform: "+k+"; transform: "+k+";}",g(u,b))):"Out"==a&&(b="#"+infinitySliderId+" .iS-Proactive > .iS-Item"+
q+"{-webkit-transform: "+k+"; transform: "+k+";}",g(v,b),!0==d&&(b="#"+infinitySliderId+" .iS-Priactive > .iS-Item"+q+"{-webkit-transform: "+k+"; transform: "+k+";}",g(v,b)))),k=q=h=p="",U=T=S=R=Q=P=O=N=M=!1)};C.each(function(){var b=$(this);b.attr("data-effectinback")&&g(l,"effectInBack is not available on this version of Infinity Slider");(b.attr("data-effectintimeback")||0==b.attr("data-effectintimeback"))&&g(l,"effectInTimeBack is not available on this version of Infinity Slider");(b.attr("data-effectindelayback")||
0==b.attr("data-effectindelayback"))&&g(l,"effectInDelayBack is not available on this version of Infinity Slider");b.attr("data-effectoutback")?g(l,"effectOutBack is not available on this version of Infinity Slider"):noEffectOutBack=!0;(b.attr("data-effectouttimeback")||0==b.attr("data-effectouttimeback"))&&g(l,"effectOutTimeBack is not available on this version of Infinity Slider");(b.attr("data-effectoutdelayback")||0==b.attr("data-effectoutdelayback"))&&g(l,"effectOutDelayBack is not available on this version of Infinity Slider");
if(b.attr("data-effectin")){var a=$.trim(b.attr("data-effectin")).split(" "),e=a.length;if(0==e)c=c+"There is not any effectIn on the slide number: "+f+"\n";else if(-1==b.attr("data-effectin").indexOf("none"))for(var d=0;d<e;d++){var aa=a[d],ba="In",I=!1,ca=!0;d==e-1&&(I=!0);ha(aa,ba,I,ca)}}else c=c+"There is not any effectIn on the slide number: "+f+"\n";b.attr("data-effectintime")||0==b.attr("data-effectintime")?(d=b.attr("data-effectintime"),$.isNumeric(d)?(a=parseInt(d),0>a?c=c+"The effectInTime("+
d+") on the slide number: "+f+" is not a positive number!\n":0!=a&&(d="#"+infinitySliderId+' .iS-Activede > .iS-Item[data-effectInTime="'+a+'"],\n#'+infinitySliderId+' .iS-Activede > .iS-Item[data-effectInTime="'+a+'"] > *{-webkit-transition: -webkit-transform '+a+"ms ease-in-out, opacity "+a+"ms ease-in-out; transition: transform "+a+"ms ease-in-out, opacity "+a+"ms ease-in-out;}",g(z,d),d="#"+infinitySliderId+' .iS-Activedu > .iS-Item[data-effectInTime="'+a+'"],\n#'+infinitySliderId+' .iS-Activedu > .iS-Item[data-effectInTime="'+
a+'"] > *{-webkit-transition: -webkit-transform '+a+"ms ease-in-out, opacity "+a+"ms ease-in-out; transition: transform "+a+"ms ease-in-out, opacity "+a+"ms ease-in-out;}",g(z,d))):c=c+"The effectInTime("+d+") on the slide number: "+f+" is not a number!\n"):c=c+"There is not any effectInTime on the slide number: "+f+"\n";b.attr("data-effectindelay")||0==b.attr("data-effectindelay")?(a=b.attr("data-effectindelay"),$.isNumeric(a)?(a=parseInt(a),0!=a&&(d="#"+infinitySliderId+' .iS-Activede > .iS-Item[data-effectInDelay="'+
a+'"],\n#'+infinitySliderId+' .iS-Activede > .iS-Item[data-effectInDelay="'+a+'"] > *{-webkit-transition-delay: '+a+"ms; transition-delay: "+a+"ms;}",g(B,d),d="#"+infinitySliderId+' .iS-Activedu > .iS-Item[data-effectInDelay="'+a+'"],\n#'+infinitySliderId+' .iS-Activedu > .iS-Item[data-effectInDelay="'+a+'"] > *{-webkit-transition-delay: '+a+"ms; transition-delay: "+a+"ms;}",g(B,d))):c=c+"The effectInDelay("+a+") on the slide number: "+f+" is not a number!\n"):c=c+"There is not any effectInDelay on the slide number: "+
f+"\n";if(b.attr("data-effectout")){var a=$.trim(b.attr("data-effectout")).split(" "),e=a.length;if(0==e)c=c+"There is not any effectOut on the slide number: "+f+"\n";else if(-1==b.attr("data-effectout").indexOf("none"))for(d=0;d<e;d++)aa=a[d],ba="Out",I=!1,ca=!0,d==e-1&&(I=!0),ha(aa,ba,I,ca)}else c=c+"There is not any effectOut on the slide number: "+f+"\n";b.attr("data-effectouttime")||0==b.attr("data-effectouttime")?(d=b.attr("data-effectouttime"),$.isNumeric(d)?(a=parseInt(d),0>a?c=c+"The effectOutTime("+
d+") on the slide number: "+f+" is not a positive number!\n":0!=a&&(d="#"+infinitySliderId+' .iS-Proactive > .iS-Item[data-effectOutTime="'+a+'"],\n#'+infinitySliderId+' .iS-Proactive > .iS-Item[data-effectOutTime="'+a+'"] > *{-webkit-transition: -webkit-transform '+a+"ms ease-in-out, opacity "+a+"ms ease-in-out; transition: all "+a+"ms ease-in-out, opacity "+a+"ms ease-in-out;}",g(z,d),d="#"+infinitySliderId+' .iS-Priactive > .iS-Item[data-effectOutTime="'+a+'"],\n#'+infinitySliderId+' .iS-Priactive > .iS-Item[data-effectOutTime="'+
a+'"] > *{-webkit-transition: -webkit-transform '+a+"ms ease-in-out, opacity "+a+"ms ease-in-out; transition: all "+a+"ms ease-in-out, opacity "+a+"ms ease-in-out;}",g(z,d))):c=c+"The effectOutTime("+d+") on the slide number: "+f+" is not a number!\n"):c=c+"There is not any effectOutTime on the slide number: "+f+"\n";b.attr("data-effectoutdelay")||0==b.attr("data-effectoutdelay")?(b=b.attr("data-effectoutdelay"),$.isNumeric(b)?(a=parseInt(b),0!=a&&(b="#"+infinitySliderId+' .iS-Proactive > .iS-Item[data-effectOutDelay="'+
a+'"],\n#'+infinitySliderId+' .iS-Proactive > .iS-Item[data-effectOutDelay="'+a+'"] > *{-webkit-transition-delay: '+a+"ms;\ttransition-delay: "+a+"ms;}",g(B,b),b="#"+infinitySliderId+' .iS-Priactive > .iS-Item[data-effectOutDelay="'+a+'"],\n#'+infinitySliderId+' .iS-Priactive > .iS-Item[data-effectOutDelay="'+a+'"] > *{-webkit-transition-delay: '+a+"ms;\ttransition-delay: "+a+"ms;}",g(B,b))):c=c+"The effectOutDelay("+b+") on the slide number: "+f+" is not a number!\n"):c=c+"There is not any effectOutDelay on the slide number: "+
f+"\n";f++});if(""!=c)c="Error! \n"+c+"\nPlease read the Documentation at http://demo.epeo.it/infinityslider/",alert(c);else if(1!=l.length){A="";for(e=1;e<l.length;e++)A=A+"\n"+l[e];alert(A+"\nPlease check the complete version on \nhttp://demo.epeo.it/infinityslider/")}else if(1<$(".isnomulti").length)$(".isnomulti").remove(),alert("Multi Instance Slider is not available on this version of Infinity Slider");else if(0<$(".iS-IE9").length){var J=!0;m.css({zIndex:0,opacity:0});m.eq(0).css({zIndex:1,
opacity:1})}else{J=!1;for(e=1;e<u.length;e++)n=n+"\n"+u[e];for(e=1;e<v.length;e++)n=n+"\n"+v[e];for(e=1;e<z.length;e++)n=n+"\n"+z[e];for(e=1;e<A.length;e++)n=n+"\n"+A[e];for(e=1;e<B.length;e++)n=n+"\n"+B[e];for(e=1;e<ga.length;e++)n=n+"\n"+ga[e];n='<div class="iS-Style">'+n+".iS-Active {z-index: 2!important;}.iS-Notime > .iS-Item, .iS-Notime > .iS-Item > * {-webkit-transition: all 0s!important;\ttransition: all 0s!important;-webkit-transition-delay: 0s!important;transition-delay: 0s!important;}.iS-Items {-webkit-perspective: 1000px;perspective: 1000px;}.iS-Item > * {-webkit-backface-visibility: hidden;backface-visibility: hidden;}@-webkit-keyframes looplineactive {0% {-webkit-transform: scaleX(0);}100% {-webkit-transform: scaleX(1);}}@keyframes looplineactive {0% {transform: scaleX(0);}100% {transform: scaleX(1);}}.iS-Loopline {\t-webkit-transform: scaleX(0);transform: scaleX(0);}.iS-Looplineactive {-webkit-animation: looplineactive infinite;animation: looplineactive infinite;\t-webkit-animation-timing-function: ease-in-out;animation-timing-function: ease-in-out;-webkit-transform-origin: left;transform-origin: left;}</style></div>";
0!=s.children(".iS-Style").length&&s.children(".iS-Style").remove();s.append(n)}var ia=function(b,a,c){function d(b){switch(b){case "slidetop":e="-100%";break;case "slidebottom":e="100%";break;case "slideleft":g="-100%";break;case "slideright":g="100%";break;case "slidetopscreen":e="-100%";break;case "slidebottomscreen":e="100%";break;case "slideleftscreen":g="-100%";break;case "sliderightscreen":g="100%";break;case "fadein":f=0}}m.css({opacity:0});a.css({zIndex:1,opacity:1});b.css({zIndex:0,opacity:1});
var e="0%",g="0%",f=1;a.children(".iS-Item").each(function(){var b=$(this),a=b.attr("data-effectin"),c=parseInt(b.attr("data-effectintime")),h=parseInt(b.attr("data-effectindelay"));0>h&&(h=0);h+=25;if(-1==a.indexOf("none"))for(var a=$.trim(a).split(" "),k=0;k<a.length;k++)d(a[k]);var a=e,k=g,l=f;g=e="0%";f=1;b.css({top:a,left:k,opacity:l});setTimeout(function(){b.stop().animate({top:"0%",left:"0%",opacity:1},c)},h)});b.children(".iS-Item").each(function(){var b=$(this),a=b.attr("data-effectout"),
c=parseInt(b.attr("data-effectouttime")),h=parseInt(b.attr("data-effectoutdelay"));0>h&&(h=0);h+=25;if(-1==a.indexOf("none"))for(var a=$.trim(a).split(" "),k=0;k<a.length;k++)d(a[k]);var l=e,m=g,n=f;g=e="0%";f=1;setTimeout(function(){b.stop().animate({top:l,left:m,opacity:n},c)},h)})},y=function(){""!=x&&(w&&w.removeClass("iS-Looplineactive"),clearInterval(x),x="")},ja=function(b,a,c){!0==J&&ia(b,a,!1);a.addClass("iS-Notime iS-Preactive").removeClass("iS-Proactive iS-Priactive");setTimeout(function(){b.removeClass("iS-Active iS-Activedu iS-Activede").addClass("iS-Proactive");
a.removeClass("iS-Notime iS-Priactive iS-Preactive").addClass("iS-Active iS-Activede");t.removeClass(F);c.addClass(F)},25);""!=x&&(y(),setTimeout(function(){da()},25));var d=b.children(".iS-Item").children(".iS-VimeoVideo").children("iframe"),e=a.children(".iS-Item").children(".iS-VimeoVideo.iS-VideoAutoPlay").children("iframe"),g=b.children(".iS-Item").children(".iS-YoutubeVideo").children("iframe"),f=a.children(".iS-Item").children(".iS-YoutubeVideo.iS-VideoAutoPlay").children("iframe");0!=d.length&&
$f(d[0]).api("pause");if(0!=e.length){var d=e.parent().parent().attr("data-effectintime"),h=e.parent().parent().attr("data-effectindelay"),d=parseInt(d)+parseInt(h);setTimeout(function(){$f(e[0]).api("play")},d);setTimeout(function(){y()},30)}if(0!=g.length)if($("#"+r+"ytbvout").attr("id",""),$("#"+r+"ytbvin").attr("id",""),g.parent(".iS-YoutubeVideo").attr("id")){var k=g.parent(".iS-YoutubeVideo").attr("id");callPlayer(k,"pauseVideo")}else{var l=r+"ytbvout";g.parent(".iS-YoutubeVideo").attr("id",
l);callPlayer(l,"pauseVideo")}0!=f.length&&(d=f.parent().parent().attr("data-effectintime"),h=f.parent().parent().attr("data-effectindelay"),d=parseInt(d)+parseInt(h),$("#"+r+"ytbvout").attr("id",""),$("#"+r+"ytbvin").attr("id",""),f.parent(".iS-YoutubeVideo").attr("id")?(k=f.parent(".iS-YoutubeVideo").attr("id"),setTimeout(function(){callPlayer(k,"playVideo")},d)):(l=r+"ytbvin",f.parent(".iS-YoutubeVideo").attr("id",l),setTimeout(function(){callPlayer(l,"playVideo")},d)),setTimeout(function(){y()},
30))},ka=function(b,a,c){!0==J&&ia(b,a,!0);a.addClass("iS-Notime iS-Pruactive").removeClass("iS-Proactive iS-Priactive");setTimeout(function(){b.removeClass("iS-Active iS-Activedu iS-Activede").addClass("iS-Priactive");a.removeClass("iS-Notime iS-Pruactive iS-Preactive").addClass("iS-Active iS-Activedu");t.removeClass(F);c.addClass(F)},25);""!=x&&(y(),setTimeout(function(){da()},25));var d=b.children(".iS-Item").children(".iS-VimeoVideo").children("iframe"),e=a.children(".iS-Item").children(".iS-VimeoVideo.iS-VideoAutoPlay").children("iframe"),
g=b.children(".iS-Item").children(".iS-YoutubeVideo").children("iframe"),f=a.children(".iS-Item").children(".iS-YoutubeVideo.iS-VideoAutoPlay").children("iframe");0!=d.length&&$f(d[0]).api("pause");if(0!=e.length){var d=e.parent().parent().attr("data-effectintime"),h=e.parent().parent().attr("data-effectindelay"),d=parseInt(d)+parseInt(h);setTimeout(function(){$f(e[0]).api("play")},d);setTimeout(function(){y()},30)}if(0!=g.length)if($("#"+r+"ytbvout").attr("id",""),$("#"+r+"ytbvin").attr("id",""),
g.parent(".iS-YoutubeVideo").attr("id")){var k=g.parent(".iS-YoutubeVideo").attr("id");callPlayer(k,"pauseVideo")}else{var l=r+"ytbvout";g.parent(".iS-YoutubeVideo").attr("id",l);callPlayer(l,"pauseVideo")}0!=f.length&&(d=f.parent().parent().attr("data-effectintime"),h=f.parent().parent().attr("data-effectindelay"),d=parseInt(d)+parseInt(h),$("#"+r+"ytbvout").attr("id",""),$("#"+r+"ytbvin").attr("id",""),f.parent(".iS-YoutubeVideo").attr("id")?(k=f.parent(".iS-YoutubeVideo").attr("id"),setTimeout(function(){callPlayer(k,
"playVideo")},d)):(l=r+"ytbvin",f.parent(".iS-YoutubeVideo").attr("id",l),setTimeout(function(){callPlayer(l,"playVideo")},d)),setTimeout(function(){y()},30))},da=function(){""==x&&(K.children(".iS-Active"),w&&(w.addClass("iS-Looplineactive"),w.css({webkitAnimationDuration:"5000ms",AnimationDuration:"5000ms"})),x=setTimeout(function(){D.click()},5E3))},la=function(){C.children("img.iS-ImageAutofit").each(function(){var b=$(this);b.css({width:"auto",height:"auto",marginLeft:"",marginTop:""});var a=
b.width(),c=b.height(),d=b.parent(),e=d.width(),d=d.height();e/d>=a/c?(b.css({width:"100%"}),b.css({marginTop:-(0.5*(b.height()-d))+"px"})):(b.css({height:"100%"}),b.css({marginLeft:-(0.5*(b.width()-e))+"px"}))})},ma=function(){C.children(".iS-TextCenter").each(function(){$(this).css({left:"auto",right:"auto",marginLeft:($(this).parent().width()-$(this).outerWidth())/2})})};!0==W&&D.click(function(){var b=m.length,a=s.children(".iS-Content").children(".iS-Active").index(),c=m.eq(a);a<b-1?a++:a=0;
b=m.eq(a);a=t.eq(a);ja(c,b,a)});!0==V&&L.click(function(){var b=m.length,a=s.children(".iS-Content").children(".iS-Active").index(),c=m.eq(a);0<a?a--:a=b-1;b=m.eq(a);a=t.eq(a);ka(c,b,a)});!0==ea&&G.click(function(){if(""!=infinitySliderLoopIndicator&&!b){var b=$("."+infinitySliderLoopIndicator);b.addClass("iS-Loopline")}da();0!=$("."+Z).length&&H.removeClass(Z);G.addClass(Y)});!0==fa&&H.click(function(){y();0!=$("."+Y).length&&G.removeClass(Y);H.addClass(Z)});!0==X&&t.click(function(){var b=m.eq(E.children(".iS-Dotactive").index()),
a=m.eq($(this).index()),c=$(this),d=$(this).index()-E.children(".iS-Dotactive").index();0<d?ja(b,a,c):0>d&&ka(b,a,c)});!0==na&&$("body").keydown(function(b){37==b.keyCode&&!0==V?L.click():39==b.keyCode&&!0==W&&D.click()});!0==J&&0!=$(".iS-Loopline").length&&$(".iS-Loopline").css({display:"none"});$(window).load(function(){ma();0!=$(".iS-TextMiddle").length&&alert("TextMiddle is not available in this version of Infinity Slider\nPlease check the complete version on \nhttp://demo.epeo.it/infinityslider/");
la();$(".iS-Commands").animate({opacity:1},500);$(".iS-Content").delay(500).animate({opacity:1},500);setTimeout(function(){m.eq(0).addClass("iS-Active iS-Activede").removeClass("iS-Preactive iS-Notime")},1E3)});$(window).resize(function(){ma();la()})}}""==c&&!1==J&&console.log('\nSlide "'+infinitySliderId+'" succefully loaded!\n')};