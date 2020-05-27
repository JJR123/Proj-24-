class Paper{ 
    constructor(x,y,d){ 
        var options={ 
        'isStatic':false, 
        'restitution':1.5, 
        'friction':0.5, 
        'density':1.2

    } 
    this.body= Bodies.circle(x,y,d,options); 
    World.add(world, this.body)
}  
display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("pink");
    ellipse(pos.x, pos.y, this.width, this.height);
  }

}  

