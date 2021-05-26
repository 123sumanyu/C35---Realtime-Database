var ball;
var hytoticBall,database;
var position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);

    hytoticBall=createSprite(250,250,10,10);
    hytoticBall.shapeColor="yellow";
    
    var hytoticBallPosition=database.ref('ball/position');
    hytoticBallPosition.on("value",readPosition,showError);


   // ball = createSprite(250,250,10,10);
  //  ball.shapeColor = "red";

}

function draw(){
    if(position!== undefined){

    
    background("white");
    
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
}

/*function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}*/

function readPosition(data){
    position=data.val();
    console.log(position.x);
    hytoticBall.x=position.x;
    hytoticBall.y=position.y;
    
}
function showError(){
    console.log("Error writing to database");

}
function writePosition(x,y){
    database.ref("ball/position").set({
        'x': position.x+x,
        'y':position.y+y
    

})
}