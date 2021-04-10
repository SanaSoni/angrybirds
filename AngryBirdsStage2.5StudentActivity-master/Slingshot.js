class Slingshot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA:bodyA, 
            bodyB:bodyB,
            length:20,
            stiffness:0.1
        }
        this.slingshot = Matter.Constraint.create(options);

        World.add(world, this.slingshot);

    }
    display(){
        strokeWeight(3.2);
        stroke("brown");
        line(this.slingshot.bodyA.position.x,this.slingshot.bodyA.position.y,this.slingshot.bodyB.position.x,this.slingshot.bodyB.position.y);
    }
}