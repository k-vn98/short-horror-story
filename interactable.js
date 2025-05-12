class door{
  constructor(x,y,z,sx,sy,sz,px,py,pz,r){
    this.x = x; // x position
    this.y = y; // y position
    this.z = z; // z position
    this.sx = sx; // x scale
    this.sy = sy; // y scale
    this.sz = sz; // z scale
    this.px = px; // x position to go to
    this.py = py; // y position to go to
    this.pz = pz; // z position to go to

    this.r = r; // radius to interact
    
    this.obj = document.createElement("a-box");
    this.interact = false;
    this.obj.addEventListener("click", ()=>{
		  //console.log("Interacted with object");
      if (distance(p1,this.obj)<this.r){this.interact = true;}
	  })
    this.obj.setAttribute("visible",false); // hide object, toggle for debugging

    this.obj.setAttribute("width",sx);
    this.obj.setAttribute("height",sy);
    this.obj.setAttribute("depth",sz);
    this.obj.setAttribute("position",{x:this.x, y:this.y+1, z:this.z});
    scene.append(this.obj);
  }
  leave(){
    if(this.interact){
      p1.setAttribute("position",{x:this.px, y:this.py, z:this.pz});
      p1.setAttribute("simple-navmesh-constraint","navmesh:.navmesh;fall:0.5;height:1;exclude:.navmesh-hole");
      //console.log("Object left");
      this.interact = false;
      p1.setAttribute("simple-navmesh-constraint","navmesh:.navmesh;fall:0.5;height:0;exclude:.navmesh-hole");
    }
  }
}