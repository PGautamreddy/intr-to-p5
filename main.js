function preload(){
}

function setup(){
    canvas = createCanvas (600,550);
    canvas.position(150,200);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video,0,0,600,550);
    tint(tint_color);
}

function take_snapshot(){
    save("MyPic.png");
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}