class roof{
    constructor(x,y,w,h){
     var options = {
         isStatic: false,
         restitution: 1,
         friction: 0,
         density: 0.8

     }
     this.x = x;
     this.y = y;
     this.w = w;
     this.h = h;
     this.body = Bodies.rectangle(x,y,w,h,options);
     World.add(world,this.body);
    }
    display(){
        var groundPos = this.body.position;

        push();
        translate(groundPos.x,groundPos.y);
        //rotate(angle);
        rectMode(CENTER);
        fill(128,128,128);
        //ellipse(0,0,this.r,this.r);
        rect(0,0,this.w,this.h);
        pop();
    }
}