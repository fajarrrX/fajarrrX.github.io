    let counter = 0;
    let images = ["assets/images/cat.png", "assets/images/dog.png", "assets/images/elephant.png", "assets/images/giraffe.png", "assets/images/panda.png", "assets/images/chicken.png", "assets/images/lion.png", "assets/images/monkey.png", "assets/images/snake.png", "assets/images/zebra.png"];
    
next.onclick = function(){
        document.getElementById("currentImage").src = images[counter++];
        if(counter == 10){
            counter = 0;
        };
}
