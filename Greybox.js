class Greybox extends Box{
    constructor(x,y){
       super(x,y,20,30);
    }

    display(){
        fill("grey");
        super.display();
    }
}