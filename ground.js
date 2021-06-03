class Ground {

    constructor(x, y, width, height){
        var ground_options ={
            isStatic: true
        }
    
        this.ground = Bodies.rectangle(200,390,200,20, ground_options);
        World.add(world,this.ground);
    

    this.width = width
    this.height = height
    }
    
    
    display(){
    
    
        fill('green')
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
    }
}