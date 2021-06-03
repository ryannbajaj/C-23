class Box {

constructor(x, y, width, height){
    var options ={
        restitution: 1.5
    }

    this.box = Bodies.rectangle(x, y, width, height, options);
    World.add(world,this.box);
this.width = width
this.height = height

}


display(){


    fill('red')
    rectMode(CENTER);
    rect(this.box.position.x,this.box.position.y,this.width,this.height);
}

}