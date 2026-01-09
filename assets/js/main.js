document.addEventListener('DOMContentLoaded',()=>{
  const btn = document.querySelector('#menuBtn');
  const list = document.querySelector('#menuList');
  if(!btn) return;
  btn.addEventListener('click', ()=>{ list.classList.toggle('open'); });
});