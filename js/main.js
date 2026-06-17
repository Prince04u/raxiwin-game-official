document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.querySelector('.nav-toggle');const nav=document.getElementById('primary-nav');
  if(btn&&nav){btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)})}
  const y=document.getElementById('y');if(y)y.textContent=new Date().getFullYear();
});