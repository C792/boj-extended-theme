"use strict";const Utils={requestAjax:function(a,b){const c=new XMLHttpRequest;return c?void(c.onreadystatechange=function(){if(4==c.readyState&&200==c.status)try{b(c.responseText,null)}catch(a){console.error(a.message+" in "+c.responseText),b(null,a.message)}},c.open("GET",a),c.send()):(console.error("Can not create XMLHTTP instance."),!1)},loadCSS:function(a){const b=chrome.extension.getURL(a),c=document.createElement("link");c.setAttribute("rel","stylesheet"),c.setAttribute("type","text/css"),c.setAttribute("href",b),document.getElementsByTagName("head")[0].appendChild(c)},loadScript:function(a){const b=chrome.extension.getURL(a),c=document.createElement("script");c.setAttribute("type","text/javascript"),c.setAttribute("src",b),document.getElementsByTagName("body")[0].appendChild(c)}};function progressTimer(){function a(a){let b="";return a=parseInt(a/1e3),0<a%60&&(b=a%60+"\uCD08 "+b),a=parseInt(a/60),0<a%60&&(b=a%60+"\uBD84 "+b),a=parseInt(a/60),0<a%24&&(b=a%24+"\uC2DC\uAC04 "+b),a=parseInt(a/24),0<a&&(b=a+"\uC77C "),b?b:"1\uCD08 \uBBF8\uB9CC"}function b(e,f,g){const h=f-new Date().getTime()+1,i=100*h/(f-e);if(0>h)d.setAttribute("style","float:left; transition-duration: .2s; width: 100%; background-color:#dc3545;"),d.innerText=a(-h)+" \uC9C0\uB0A8";else{let b="";50>=i?b="background-color:#ffc107;":10>=i&&(b="background-color:#dc3545;"),d.setAttribute("style","float:right; transition-duration: .2s; width:"+i+"%;"+b),d.innerText=a(h)+" \uB0A8\uC74C"}"running"===c.getAttribute("state")?window.requestAnimationFrame(b.bind(null,e,f,g)):g()}const c=document.createElement("div");c.setAttribute("class","progress");const d=document.createElement("div");return d.setAttribute("class","progress-bar"),d.innerText="Loading...",c.appendChild(d),{element:function(){return c},start:function(a,d,e){return"running"===c.getAttribute("state")?void console.error("already started"):void(c.setAttribute("state","running"),b(a,d,e))},stop:function(){c.setAttribute("state","stop")},text:function(a){return a&&(d.innerText=a),a},show:function(){c.style.display="block"},hide:function(){c.style.display="none"}}}