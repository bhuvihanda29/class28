class Chain{
    constructor(A, B){
        var options = {
            bodyA: A,
            pointB: B,
            stiffness: 0.04,
            length: 10
        }

        this.chain = Constraint.create(options);
        World.add(world, this.chain);

        this.p = B
    }
    fly(){
        this.chain.bodyA=null;
    }
    
    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.p;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    
}