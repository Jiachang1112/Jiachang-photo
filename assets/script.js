// Mobile nav toggle
const hamburger=document.querySelector('.hamburger');const menu=document.querySelector('.menu');
hamburger?.addEventListener('click',()=>{const open=menu.classList.toggle('open');hamburger.setAttribute('aria-expanded',String(open));});
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const id=a.getAttribute('href');if(!id||id==='#')return;const target=document.querySelector(id);if(!target)return;e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});menu.classList.remove('open');hamburger.setAttribute('aria-expanded','false');});});
// Year
document.getElementById('year')?.appendChild(document.createTextNode(String(new Date().getFullYear())));
