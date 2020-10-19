class Box {
    constructor(x, y, width, height) {
     
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      rectMode(CENTER);

      fill("lightblue");
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
      
    }
  };  