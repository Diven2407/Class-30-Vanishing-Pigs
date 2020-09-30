class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255;
  }
  display() {
    var pos = this.body.position;
    console.log(this.body.speed);
    if (this.body.speed < 3) {
      super.display();
    }else {
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility-5;
      tint(255,this.visibility);
      image(this.image,pos.x,pos.y,50,50);
      pop();
    }
  }
};