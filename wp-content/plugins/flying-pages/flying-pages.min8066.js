"use strict";function flyingPages(){var a=new Set,b=new Set,c=document.createElement("link"),d=c.relList&&c.relList.supports&&c.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype,e=navigator.connection&&(navigator.connection.saveData||(navigator.connection.effectiveType||"").includes("2g"));if(!e&&d){var f=function(a){return new Promise(function(b,c){var d=document.createElement("link");d.rel="prefetch",d.href=a,d.onload=b,d.onerror=c,document.head.appendChild(d)})},g=function(a){var b=setTimeout(function(){return p()},5e3);f(a).catch(function(){return p()}).finally(function(){return clearTimeout(b)})},h=function(c){var d=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1];if(!(b.has(c)||a.has(c))){var e=window.location.origin;if(c.substring(0,e.length)===e&&window.location.href!==c){for(var f=0;f<window.FPConfig.ignoreKeywords.length;f++)if(c.includes(window.FPConfig.ignoreKeywords[f]))return;d?(g(c),b.add(c)):a.add(c)}}},i=new IntersectionObserver(function(a){a.forEach(function(a){if(a.isIntersecting){var b=a.target.href;h(b,!window.FPConfig.maxRPS)}})}),j=function(){return setInterval(function(){Array.from(a).slice(0,window.FPConfig.maxRPS).forEach(function(c){g(c),b.add(c),a.delete(c)})},1e3)},k=null,l=function(a){var c=a.target.closest("a");c&&c.href&&!b.has(c.href)&&(k=setTimeout(function(){h(c.href,!0)},window.FPConfig.hoverDelay))},m=function(a){var c=a.target.closest("a");c&&c.href&&!b.has(c.href)&&h(c.href,!0)},n=function(a){var c=a.target.closest("a");c&&c.href&&!b.has(c.href)&&clearTimeout(k)},o=window.requestIdleCallback||function(a){var b=Date.now();return setTimeout(function(){a({didTimeout:!1,timeRemaining:function c(){var a=Math.max;return a(0,50-(Date.now()-b))}})},1)},p=function(){document.querySelectorAll("a").forEach(function(a){return i.unobserve(a)}),a.clear(),document.removeEventListener("mouseover",l,!0),document.removeEventListener("mouseout",n,!0),document.removeEventListener("touchstart",m,!0)};window.FPConfig=Object.assign({delay:0,ignoreKeywords:[],maxRPS:3,hoverDelay:50},window.FPConfig),j(),o(function(){return setTimeout(function(){return document.querySelectorAll("a").forEach(function(a){return i.observe(a)})},1e3*window.FPConfig.delay)});var q={capture:!0,passive:!0};document.addEventListener("mouseover",l,q),document.addEventListener("mouseout",n,q),document.addEventListener("touchstart",m,q)}}flyingPages();
