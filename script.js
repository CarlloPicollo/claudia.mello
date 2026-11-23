(function(){
var q=function(s){return document.querySelectorAll(s)},L='pt',store=window.localStorage;
var M={pt:'Olá, Claudia! Vim pelo seu site.',es:'¡Hola, Claudia! Vine por tu sitio web.'};
function wa(){q('a[data-n]').forEach(function(a){a.href='https://wa.me/'+a.dataset.n+'?text='+encodeURIComponent(M[L])})}
function set(l){L=l;document.documentElement.lang=l=='es'?'es':'pt-BR';
q('[data-es]').forEach(function(e){if(e.dataset.pt==null)e.dataset.pt=e.innerHTML;e.innerHTML=l=='es'?e.dataset.es:e.dataset.pt});
q('[data-l]').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.l==l)});
try{store.setItem('lang',l)}catch(x){}wa()}
var s;try{s=store.getItem('lang')}catch(x){}
set(s||((navigator.language||'').toLowerCase().indexOf('es')==0?'es':'pt'));
q('[data-l]').forEach(function(b){b.onclick=function(){set(b.dataset.l)}});
var p=document.getElementById('wap'),b=document.getElementById('wab');
function tog(){p.hidden=!p.hidden;b.setAttribute('aria-expanded',!p.hidden)}
b.onclick=tog;q('[data-wa]').forEach(function(x){x.onclick=function(){if(p.hidden)tog()}});
var f=document.getElementById('cf');
if(f)f.onsubmit=function(e){e.preventDefault();var d=f.elements,
t=M[L]+'\n\n'+(L=='es'?'Nombre: ':'Nome: ')+d.n.value+'\n'+d.m.value;
window.open('https://wa.me/'+d.c.value+'?text='+encodeURIComponent(t),'_blank')}
})();