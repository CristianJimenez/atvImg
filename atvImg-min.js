function atvImg(){function e(e,t,a,r,l){var n=s.scrollTop,i=s.scrollLeft,d=t.getBoundingClientRect(),o=t.clientWidth||t.offsetWidth||t.scrollWidth,c=t.clientHeight||t.offsetHeight||t.scrollHeight,m=.52-(e.pageX-d.left-i)/o,f=.52-(e.pageY-d.top-n)/c,v=e.pageY-d.top-n-c/2,g=e.pageX-d.left-i-o/2,h=.07*(m-g),p=.1*(v-f),u="rotateX("+p+"deg) rotateY("+h+"deg)",y=Math.atan2(v,g),C=180*y/Math.PI-90;0>C&&(C+=360),-1!=t.firstChild.className.indexOf(" over")&&(u+=" scale3d(1.07,1.07,1.07)"),t.firstChild.style.transform=u,l.style.background="linear-gradient("+C+"deg, rgba(255,255,255,"+e.pageY/c*.25+") 0%,rgba(255,255,255,0) 80%)",l.style.transform="translateX("+m*r-.1+"px) translateY("+f*r-.1+"px)";for(var I=r,E=0;r>E;E++)a[E].style.transform="translateX("+m*I*(2.5*E)+"px) translateY("+f*r*(2.5*E)+"px)",I--}function t(e,t){t.firstChild.className+=" over"}function a(e,t,a,r,l){var s=t.firstChild;s.className=s.className.replace(" over",""),s.style.transform="",l.style.cssText="";for(var n=0;r>n;n++)a[n].style.transform=""}var r=document,l=r.documentElement,s=r.getElementsByTagName("body")[0],n=window,i=r.querySelectorAll(".atvImg"),d=i.length;if(!(0>=d))for(var o=0;d>o;o++){var c=i[o],m=c.querySelectorAll(".atvImg-layer"),f=m.length;if(!(0>=f)){for(;c.firstChild;)c.removeChild(c.firstChild);var v=r.createElement("div"),g=r.createElement("div"),h=r.createElement("div"),p=r.createElement("div"),u=[];c.id="atvImg__"+o,v.className="atvImg-container",g.className="atvImg-shine",h.className="atvImg-shadow",p.className="atvImg-layers";for(var y=0;f>y;y++){var C=r.createElement("div"),I=m[y].getAttribute("data-img");C.className="atvImg-rendered-layer",C.setAttribute("data-layer",y),C.style.backgroundImage="url("+I+")",p.appendChild(C),u.push(C)}v.appendChild(h),v.appendChild(p),v.appendChild(g),c.appendChild(v);var E=c.clientWidth||c.offsetWidth||c.scrollWidth;c.style.transform="perspective("+3*E+"px)",function(r,l,s,n){c.addEventListener("mousemove",function(t){e(t,r,l,s,n)}),c.addEventListener("mouseenter",function(e){t(e,r)}),c.addEventListener("mouseleave",function(e){a(e,r,l,s,n)})}(c,u,f,g)}}}