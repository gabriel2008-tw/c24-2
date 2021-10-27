class Iron{

	constructor(x,y){
		
	var options = {
		
		restitution:0.8,
		friction:3,
        density:30,
     
	}
		this.x=x;
		this.y=y;
        this.width = 100;
        this.height = 100;
        this.body = Bodies.rectangle(x,y,width,height,options);
		World.add(world, this.body);

	}
	display()
	{

			var ironpos=this.body.position;		
			push();
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill("black");
			rect(0,0,this.width, this.height)
			pop();

	}

}