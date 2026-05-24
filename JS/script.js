function switchDay(id,btn){
  document.querySelectorAll('.day-content').forEach(d=>d.classList.remove('active'));
  document.querySelectorAll('.day-tab').forEach(b=>b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}
function switchTab(id,btn){
  document.querySelectorAll('.tab-pane').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}
function toggleMenu(){
  const links=document.querySelector('.nav-links');
  if(links.style.display==='flex'){links.style.display='none'}
  else{links.style.display='flex';links.style.flexDirection='column';links.style.position='absolute';links.style.top='100%';links.style.left='0';links.style.right='0';links.style.background='#fefefe';links.style.padding='16px';links.style.boxShadow='0 8px 30px rgba(0,0,0,.15)';links.style.zIndex='300'}
}
// Hide WA label after 6s
setTimeout(()=>{const l=document.querySelector('.wa-float-label');if(l){l.style.opacity='0';l.style.transition='opacity .5s';setTimeout(()=>l.remove(),500)}},6000);
// Smooth reveal on scroll
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)'}});
},{threshold:0.1});
document.querySelectorAll('.pkg-card,.why-card,.act-card,.review-card,.gallery-item').forEach(el=>{
  el.style.opacity='0';el.style.transform='translateY(20px)';el.style.transition='opacity .5s ease,transform .5s ease';
  observer.observe(el);
});

function switchDay(dayId, btn) {

    document.querySelectorAll('.day-content')
        .forEach(el => el.classList.remove('active'));

    document.querySelectorAll('.day-tab')
        .forEach(el => el.classList.remove('active'));

    document.getElementById(dayId)
        .classList.add('active');

    btn.classList.add('active');
}