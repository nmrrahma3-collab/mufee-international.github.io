function openMenu(){
  document.getElementById("menu").classList.add("show");
}
function closeMenu(){
  document.getElementById("menu").classList.remove("show");
}

/* Header show after scroll */
window.addEventListener("scroll",()=>{
  const header=document.querySelector(".header");
  if(window.scrollY>80){header.classList.add("show")}
  else{header.classList.remove("show")}
});

/* Scroll reveal */
const obs=new IntersectionObserver(e=>{
  e.forEach(x=>x.isIntersecting&&x.target.classList.add("show"))
},{threshold:.15});
document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));  );

  reveals.forEach((el) => observer.observe(el));
});
