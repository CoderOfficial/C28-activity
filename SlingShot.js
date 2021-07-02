class SlingShot{
    constructor(bodyA,pointB){
        var options ={
         bodyA:bodyA,
         pointB:pointB,
         length:10,
         stiffness:0.04

        }
        this.pointB=pointB
    this.Slingshot = Constraint.create(options)
World.add(world, this.Slingshot)

    }
    fly(){
        this.Slingshot.bodyA = null;
    }
    display(){
        if(this.Slingshot.bodyA){
            var pointa = this.Slingshot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(8)
            line(pointa.x ,pointa.y, pointB.x, pointB.y )
        }
       
        
    }

}