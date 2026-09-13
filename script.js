const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu(){navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open = navigation.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
// A dropdown closed on desktop should stay closed when returning to mobile.
window.matchMedia('(max-width: 1050px)').addEventListener('change',closeMenu);
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&navigation.classList.contains('open')){closeMenu();menu.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('.header'))closeMenu();});
document.querySelectorAll('[data-service]').forEach(link=>link.addEventListener('click',()=>{document.querySelector('#service').value=link.dataset.service;}));
document.querySelector('#quote-form').addEventListener('submit',event=>{
 event.preventDefault();
 const name=document.querySelector('#name');
 if(!name.value.trim()){name.setCustomValidity('Informe seu nome para continuar.');name.reportValidity();return;}
 const service=document.querySelector('#service').value;
 const details=document.querySelector('#message').value.trim();
 const message=`Olá, Valeriano! Meu nome é ${name.value.trim()}. Tenho interesse em ${service.toLowerCase()}.${details?'\n\nSobre meu projeto: '+details:''}`;
 window.location.assign(`https://wa.me/5561983756803?text=${encodeURIComponent(message)}`);
});
document.querySelector('#name').addEventListener('input',event=>event.target.setCustomValidity(''));
document.querySelector('#year').textContent=new Date().getFullYear();
if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});
 document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
 document.documentElement.classList.add('motion');
 // Keep all content visible when the visitor changes their motion preference.
 window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',event=>{if(event.matches){observer.disconnect();document.documentElement.classList.remove('motion');}});
}
