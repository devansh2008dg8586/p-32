class Block{
    constructor(x,y,width,height){
        var options={
        isStatic:false,
        restitution:0,
        friction:1
        }
        this.body= Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body)
        this.width=width;
        this.height=height;
        this.image=loadImage("pink.jpg")
        this.visibility=255;
    }
    display(){
        console.log(this.body.speed);
        if(this.body.speed<7){
            var angle=this.body.angle;
            var pos=this.body.position;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER)
            image(this.image,0,0,this.width,this.height);
            pop();
        
        }
        else{
            World.remove(world,this.body)
            push()
            this.visibility=this.visibility-5;
            tint(255,this.visibility)
            image(this.image,this.body.position.x,this.body.position.y,50,50);
            pop();
        }
    }
score(){
    if(this.visibility<0 && this.visibility>-1500){
        score++;
    }
}
}











