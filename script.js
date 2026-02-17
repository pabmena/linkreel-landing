(function(){const y=document.getElementById('year');if(y)y.textContent=String(new Date().getFullYear());
const h=document.getElementById('hamburger');const m=document.getElementById('mobileNav');
function setMobile(o){if(!h||!m)return;h.setAttribute('aria-expanded',o?'true':'false');m.hidden=!o}
if(h&&m){h.addEventListener('click',()=>{const o=h.getAttribute('aria-expanded')!=='true';setMobile(o)});m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMobile(false)));document.addEventListener('keydown',e=>{if(e.key==='Escape')setMobile(false)})}
const planSel=document.getElementById('plan');document.querySelectorAll('[data-plan]').forEach(b=>{b.addEventListener('click',()=>{const p=b.getAttribute('data-plan');if(planSel)planSel.value=p;})});
)();