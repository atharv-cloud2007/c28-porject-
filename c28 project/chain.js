
 class Chain{
     constructor(bodya,pointB){
     var option={
         bodyA:bodya,
         pointB:pointB,
         length:55,
         stiffness:0.1
     }
     this.pointB=pointB
     this.chain=Constraint.create(option)
     World.add(world,this.chain)
     }
    
     display(){
     if(this.chain.bodyA!=null){
     line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.chain.pointB.y)
     }
    }
     fly(){
         this.chain.bodyA=null
     }
     attach(body){
         this.chain.bodyA=body
     }
 }

 