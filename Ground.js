class Ground{
    constructor(x, y, width, heigth){
        var options={
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y, width, heigth);
        this.width = width;
        this.heigth = heigth;
        World.add(world, this.body);
}
display(){
    var pos = this.body.position;
    rectMode(CENTER);
    FileList(255);
    rect(pos.x, pos.y, this.width, this.heigth);
}
}