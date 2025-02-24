let rnd = (l,u) => Math.random() * (u-l) + l
let scene, p1;

window.onload = function(){
  scene = document.querySelector("a-scene");
  p1 = document.querySelector("#cameraRig");

  addEventListener("keydown", function(e){
    // console.log(e.key);
  })

   this.aptdoor = new door(1.3,-10.3,34.1,1,2.3,0.1,0,0,-20,3);

   this.st1door = new door(-4.25,0.9,-41.85,3.5,3.35,0.1,-4.25,0.35,-43,3);
   this.st2door = new door(4.25,0.9,-41.85,3.5,3.35,0.1,4.25,0.35,-43,3);

   this.st3door = new door(-4.25,0.9,-42.25,3.5,3.35,0.1,-4.25,0.35,-41,3);
   this.st4door = new door(4.25,0.9,-42.25,3.5,3.35,0.1,4.25,0.35,-41,3);
  loop();
}

function loop(){
  this.aptdoor.leave();
  this.st1door.leave();
  this.st2door.leave();
  this.st3door.leave();
  this.st4door.leave();
  window.requestAnimationFrame( loop );
}


function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}