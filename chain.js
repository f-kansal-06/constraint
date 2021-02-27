class Chain {
constructor(bodyA,bodyB){
    var options = {
        bodyA : bodyA,
        bodyB : bodyB,
        stiffness : 0.3,
        length : 100
    }
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
}
display(){
   var apos =  this.chain.bodyA.position;
   var bpos =  this.chain.bodyB.position;

strokeWeight(3);
line(apos.x,apos.y,bpos.x,bpos.y);

}
}