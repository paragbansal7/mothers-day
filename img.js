class Imgg{
    constructor(x,y,width,height,image){
        var options={isStatic:true}

        this.body=Bodies.rectangle(x,y,width,height,options)
        this.height=height;
        this.width=width;
        this.image=loadImage(image);
        World.add(world,this.body);
    }

    display(){
        push();
        var pos=this.body.position;
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y, this.width, this.height);
        pop();
      }
}