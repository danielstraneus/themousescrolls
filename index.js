let line1 = document.querySelector(".line-1");
let line2 = document.querySelector(".line-2");
let line3 = document.querySelector(".line-3");
let line4 = document.querySelector(".line-4");
let line5 = document.querySelector(".line-5");
let line6 = document.querySelector(".line-6");
let line7 = document.querySelector(".line-7");
let line8 = document.querySelector(".line-8");
let line9 = document.querySelector(".line-9");

window.onscroll = () => {
  let pos = window.scrollY - 10;
  line1.style.left = `${(pos * Math.PI) / 4}px`;
  line1.style.top = `${(pos * Math.PI) / 1}px`;
  line2.style.left = `${(pos * Math.PI) / 4}px`;
  line2.style.top = `${(pos * Math.PI) / 0.9}px`;
  line3.style.left = `${(pos * Math.PI) / 4}px`;
  line3.style.top = `${(pos * Math.PI) / 0.76}px`;
  line4.style.left = `${(pos * Math.PI) / 2}px`;
  line4.style.top = `${(pos * Math.PI) / 0.65}px`;
  line5.style.left = `${(pos * Math.PI) / 2}px`;
  line5.style.top = `${(pos * Math.PI) / 0.61}px`;
  line6.style.left = `${(pos * Math.PI) / 2}px`;
  line6.style.top = `${(pos * Math.PI) / 0.575}px`;
  line7.style.left = `${(pos * Math.PI) / 1.2}px`;
  line7.style.top = `${(pos * Math.PI) / 0.5}px`;
  line8.style.left = `${(pos * Math.PI) / 1.2}px`;
  line8.style.top = `${(pos * Math.PI) / 0.475}px`;
  line9.style.left = `${(pos * Math.PI) / 1.2}px`;
  line9.style.top = `${(pos * Math.PI) / 0.455}px`;

  line4.style.marginRight = `${(pos * Math.PI) / 1}px`;
  // line5.style.marginLeft = `${(pos * Math.PI) / 1.5}px`;

  // line8.style.marginLeft = `${(pos * Math.PI) / 2}px`;
  line7.style.marginRight = `${(pos * Math.PI) / 1}px`;
};

// line1.style.marginLeft = `${pos}px`;
