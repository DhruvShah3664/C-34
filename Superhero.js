class Superhero{
    constructor(x, y,r){
        var options={
            'frictionAir':1,
            'density':1
 };
    this.x=x;
    this.y=y;
    this.r=r
    this.image = loadImage("images/superhero-01.png");
    this.body = Bodies.rectangle(this.x, this.y, (this.r)/2, options);
    World.add(world, this.body);
}
display(){
    var angle = this.body.angle;
    var pos = this.body.pos;

    push();
    translate(this.body.position.x, this.body.position.y);;
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
}
}