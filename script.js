(function(){const y=document.getElementById('year');if(y)y.textContent=String(new Date().getFullYear());
const h=document.getElementById('hamburger');const m=document.getElementById('mobileNav');
function setMobile(o){if(!h||!m)return;h.setAttribute('aria-expanded',o?'true':'false');m.hidden=!o}
if(h&&m){h.addEventListener('click',()=>{const o=h.getAttribute('aria-expanded')!=='true';setMobile(o)});m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMobile(false)));document.addEventListener('keydown',e=>{if(e.key==='Escape')setMobile(false)})}
const planSel=document.getElementById('plan');document.querySelectorAll('[data-plan]').forEach(b=>{b.addEventListener('click',()=>{const p=b.getAttribute('data-plan');if(planSel)planSel.value=p;})});
const form=document.getElementById('leadForm');if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);
const name=String(d.get('name')||'');const email=String(d.get('email')||'');const vertical=String(d.get('vertical')||'');const plan=String(d.get('plan')||'');const msg=String(d.get('msg')||'');
const subject=encodeURIComponent(`Lead LinkReel — ${plan} — ${name}`);const body=encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\nVertical: ${vertical}\nPlan: ${plan}\n\nMensaje:\n${msg}\n\n(Generado desde la landing MVP - sin backend)`);
const to='hola@linkreel.app';window.location.href=`mailto:${to}?subject=${subject}&body=${body}`;})}})();