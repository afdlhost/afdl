!function(){function n(t,e){var i,n={};for(i in t)n[i]=t[i];for(i in e)n[i]=e[i];return n}function t(t){return t}var o,l,a=(o={duration:300,action:"close",startTime:null,startHeight:null,endHeight:null,easing:t},l=function(t,e,i){e.startTime||(e.startTime=i);var n=i-e.startTime;n<e.duration?(t.style.height=((e.endHeight-e.startingHeight)*e.easing(n/e.duration)+e.startingHeight).toFixed(2)+"px",r(t,e)):("close"===e.action&&(t.style.display="none"),"open"===e.action&&(t.style.display="block"),function(t){t.style.height=null,t.style.overflow=null}(t))},function(t,e){if(window.requestAnimationFrame){var i=n(o,{});i.action=e,t.style.height?i.startingHeight=parseFloat(t.style.height):i.startingHeight="close"===e?t.scrollHeight:0,function(t){t.style.display="block",t.style.overflow="hidden"}(t),"close"===e?i.endHeight=0:(t.style.height="0px",i.endHeight=t.scrollHeight),r(t,i)}else t.style.display="close"===e?"none":"block"});function r(e,i){cancelAnimationFrame(e.getAttribute("data-lwptoc-animation-request-id")),e.setAttribute("data-lwptoc-animation-request-id",window.requestAnimationFrame(function(t){l(e,i,t)}))}function s(t){for(var e,i=document.querySelectorAll('[id="'+t+'"]'),n=0;n<i.length;n++)if((e=i[n]).offsetWidth||e.offsetHeight||e.getClientRects().length)return i[n];return null}var e,i=(e={offset:0,duration:500,easing:t,onComplete:function(t,e){}},function(o,t){var l,a=n(e,t);if(window.requestAnimationFrame&&"smooth"!==window.getComputedStyle(document.getElementsByTagName("HTML")[0]).scrollBehavior){var r,s,c=window.pageYOffset,u=null,d=function(t){l=f(o,a.offset),r=l-c;var e=window.pageYOffset;if(!s||!(0<r&&e<s||r<0&&s<e)){s=e;var i=t-(u=u||t-1),n=((l-c)*a.easing(i/a.duration)+c).toFixed();window.scroll(0,n),i<a.duration?window.requestAnimationFrame(d):(window.scroll(0,l),a.onComplete(0,l))}};window.requestAnimationFrame(d)}else l=f(o,a.offset),window.scroll(0,l),a.onComplete(0,l)});function f(t,e){var i=t.getBoundingClientRect().top+window.pageYOffset-e;return i<0?0:i}var c={scrollTo:function(t,e){i(t,e)},registerScrollTrigger:function(t,i){for(var e=0;e<t.length;e++)t[e].addEventListener("click",function(t){t.preventDefault();var e=this.getAttribute("href"),a=e.substring(1),r=s(a);r&&(e!==document.location.hash&&(i.onComplete=function(t,e){var i,n,o,l;r.setAttribute("id",""),i=a,n=t,o=e,(l=document.createElement("a")).setAttribute("id",i),l.setAttribute("style","position:absolute;visibility:hidden;left:"+n+"px;top:"+o+"px;"),function(t,e){t.prepend?t.prepend(e):t.insertBefore(e,t.firstChild)}(document.body,l),document.location.hash=i,function(t){t.remove?t.remove():t.parentNode.removeChild(t)}(l),r.setAttribute("id",a)}),c.scrollTo(r,i))})},init:function(t){if("1"!==t.getAttribute("data-lwptoc-initialized")){t.setAttribute("data-lwptoc-initialized","1");var e,i=t.getElementsByClassName("lwptoc_toggle_label")[0],n=t.getElementsByClassName("lwptoc_items")[0];if(i)i.addEventListener("click",function(t){t.preventDefault(),e=i.getAttribute("data-label"),i.setAttribute("data-label",i.innerHTML),i.innerHTML=e,function(t,e){return-1<(" "+t.className+" ").indexOf(" "+e+" ")}(n,"lwptoc_items-visible")?(function(t,e){t.className=(" "+t.className+" ").replace(" "+e+" ","").trim()}(n,"lwptoc_items-visible"),a(n,"close")):(function(t,e){t.className=t.className.trim()+" "+e}(n,"lwptoc_items-visible"),a(n,"open"))});"1"===t.getAttribute("data-smooth-scroll")&&c.registerScrollTrigger(n.getElementsByTagName("A"),{offset:t.getAttribute("data-smooth-scroll-offset")})}},globalInit:function(){for(var t=document.getElementsByClassName("lwptoc"),e=0;e<t.length;e++)c.init(t[e])}};window.lwptoc=c,"loading"===document.readyState?document.addEventListener("DOMContentLoaded",c.globalInit):c.globalInit()}();