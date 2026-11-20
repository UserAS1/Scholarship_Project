/* Fold-out menu on the static pages (phone width). */
(function(){ var b=document.getElementById('menubtn'), n=document.getElementById('mainnav'); if(!b||!n) return;
  b.addEventListener('click',function(){ var o=n.classList.toggle('open'); b.setAttribute('aria-expanded',o?'true':'false') }); })();
