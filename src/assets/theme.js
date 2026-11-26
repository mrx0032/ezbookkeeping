// Theme switcher: setTheme('luxury'|'classic'|'glass'), setGlass(0..30), works offline (localStorage, wrapped in try/catch)
(function(){
  var K='ezb_theme',G='ezb_glass',root=document.documentElement;
  function get(k,d){try{return localStorage.getItem(k)||d}catch(e){return d}}
  function put(k,v){try{localStorage.setItem(k,v)}catch(e){}}
  window.setTheme=function(n){root.setAttribute('data-theme',n);put(K,n)};
  window.setGlass=function(px){root.style.setProperty('--glass-blur',px+'px');root.style.setProperty('--glass-alpha',(0.06+px/150).toFixed(2));put(G,px)};
  root.setAttribute('dir','rtl');root.setAttribute('lang','fa');
  window.setTheme(get(K,'luxury'));window.setGlass(+get(G,14));
})();
