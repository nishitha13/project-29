class Box{
    constructor(x,y,width,height){
        var options = {
            'restitiution':0.8,
            'friction':0.1,
            'density':0.1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        var position = this.body.position;
        rectMode(CENTER);
        rect(position.x,position.y,this.width,this.height);
        fill("white");
    }
}