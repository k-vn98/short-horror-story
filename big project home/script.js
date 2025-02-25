let rnd = (l,u) => Math.random() * (u-l) + l
let scene, p1, goalGot, jumpscare, touchgate, cover;
let colors = ["red","blue","green","yellow","purple","orange","pink","brown","white"];
let heights = [0.886,1.419,1.952];

window.onload = function(){
  scene = document.querySelector("a-scene");
  p1 = document.querySelector("#cameraRig");
  jumpscare = document.querySelector("#jumpscare");
  touchgate = document.querySelector("#touchgate");
  cover = document.querySelector("#cover");
  let goal = document.querySelector("#goal");
  let park = document.querySelector("#park");
  let item = document.querySelector(".dupe");

  goal.addEventListener("click", ()=>{
    if (distance(p1,goal)<4){
      //console.log("Interacted with goal");
      goalGot = true;
      goal.setAttribute("visible",false);
    }
  });

  for(let i=0; i<4; i++){
    let park2 = park.cloneNode(true);
    park2.setAttribute("position","0 0 "+ (i*20) );
    scene.appendChild(park2);
  }

  for(let ii=0; ii<3; ii++){
    let z = -50.5;
    for(let i=0; i<6; i++){
      z+= 0.75;
      let item2 = item.cloneNode(true);
      item2.setAttribute("position",`${-3.759+4.164*ii} ${heights[Math.floor(rnd(0,heights.length))]} ${z}`);
      item2.setAttribute("color",colors[Math.floor(rnd(0,colors.length))]);
      scene.appendChild(item2);
    }
  }

  for(let ii=0; ii<3; ii++){
    let z = -50.5;
    for(let i=0; i<6; i++){
      z+= 0.75;
      let item2 = item.cloneNode(true);
      item2.setAttribute("rotation","0 0 -75");
      item2.setAttribute("position",`${-4.571+4.164*ii} ${heights[Math.floor(rnd(0,heights.length))]} ${z}`);
      item2.setAttribute("color",colors[Math.floor(rnd(0,colors.length))]);
      scene.appendChild(item2);
    }
  }
  
  this.aptdoor = new door(1.3,-10.3,34.1,1,2.3,0.1,0,0,65,3);
  this.st1door = new door(-4.25,0.9,-41.85,3.5,3.35,0.1,-4.25,0.35,-43,3);
  this.st2door = new door(4.25,0.9,-41.85,3.5,3.35,0.1,4.25,0.35,-43,3);
  this.st3door = new door(-4.25,0.9,-42.25,3.5,3.35,0.1,-4.25,0.35,-41,3);
  this.st4door = new door(4.25,0.9,-42.25,3.5,3.35,0.1,4.25,0.35,-41,3);
  loop();
}

function loop(){
  if(distance(p1,touchgate)<2 && goalGot){
    jumpscare.setAttribute("visible",true);
    cover.setAttribute("visible",true);
  }
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