const c = document.querySelector("canvas");
const ctx = c.getContext("2d");


let data = {
    x:10,
    y:10,
    width:30,
    height:30
}

let xDelta = 1;
let yDelta = 1;
let y2Delta = -1;

function update() {
    if(data.x + data.width > c.width) {
        xDelta = 3;
    } else if(0 > data.x) {
        xDelta = 3;
    }

    if(data.y + data.height > c.height) {
        yDelta = 3;
    } else if(0 > data.y) {
        yDelta = 3;
    }
}

function draw() {
    ctx.clearRect(0,0,c.width,c.height);
    ctx.fillStyle = "Green";
    ctx.fillRect(data.x,data.y,data.width,data.height);
}

function loop() {
    requestAnimationFrame(loop)
    

    update()    
    draw()
}

loop()

let h1 = document.querySelector(".h1");
let h11 = document.querySelector("#h1");
let x = "X:"
let y = "Y:"

h1.innerHTML = x + data.x;
h11.innerHTML = y + data.y;


addEventListener("keydown", function(evt) {
    if(evt.code === "ArrowRight") {
        data.x += xDelta;
        h1.innerHTML = x + data.x;
        console.log(data.x);

    } else if(evt.code === "ArrowLeft") {
        data.x -= xDelta;
        h1.innerHTML = x + data.x;
        console.log(data.x);

    } else if(evt.code === "ArrowDown") {
        data.y += yDelta;
        h11.innerHTML = y + data.y;
        console.log(data.y);

    } else if(evt.code === "ArrowUp") {
        data.y += y2Delta;
        h11.innerHTML = y + data.y;
        console.log(data.y);

    }
    if(data.x === 500 && data.y === 250) {
        alert("This is center of the canvas");
        alert("Սա կտավի կենտրոն է");
        alert("Это центр холста");

    }
});

const up = document.querySelector(".up");
const dw = document.querySelector(".down");
const lf = document.querySelector(".left");
const rg = document.querySelector(".right");

up.addEventListener("click", function(evt) {
    data.y -= 5;
    h11.innerHTML = y + data.y;
    console.log(data.y);
    if(data.x === 500 && data.y === 250) {
        alert("This is center of the canvas");
        alert("Սա կտավի կենտրոն է");
        alert("Это центр холста");

    }
})

dw.addEventListener("click", function(evt) {
    data.y += 5;
    h11.innerHTML = y + data.y;
    console.log(data.y);
    if(data.x === 500 && data.y === 250) {
        alert("This is center of the canvas");
        alert("Սա կտավի կենտրոն է");
        alert("Это центр холста");

    }
})

lf.addEventListener("click", function(evt) {
    data.x -= 5;
    h1.innerHTML = x + data.x;
    console.log(data.x);
    if(data.x === 500 && data.y === 250) {
        alert("This is center of the canvas");
        alert("Սա կտավի կենտրոն է");
        alert("Это центр холста");

    }
})

rg.addEventListener("click", function(evt) {
    data.x += 5;
    h1.innerHTML = x + data.x;
    console.log(data.x);
    if(data.x === 500 && data.y === 250) {
        alert("This is center of the canvas");
        alert("Սա կտավի կենտրոն է");
        alert("Это центр холста");

    }
})

