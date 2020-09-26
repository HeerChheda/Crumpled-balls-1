class Paper {
    constructor(x,y) {
        var ball_options = {
            restitution: 0.3,
            isStatic:false,
            friction:0.5,
            density: 1.2
          }
     this.body = Bodies.circle(x,y, 20, ball_options);
     World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("white");
      ellipseMode(RADIUS);
      ellipse(this.body.position.x, this.body.position.y,20,20);
     
    }
  };