let rnd = (l,u) => Math.random() * (u-l) + l
let scene, p1;
let ac = false;
window.onload = function(){
  scene = document.querySelector("a-scene");
  p1 = document.querySelector("#head1");

  
  loop();
}
function loop(){
  if(ac){
    p1.setAttribute("camera","active:false");
    console.log("active");
  }
  
  window.requestAnimationFrame( loop );
}

