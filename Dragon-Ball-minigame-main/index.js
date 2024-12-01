
// finds the <canvas> tag and store inaide the canvas variable
const canvas = document.querySelector('canvas');

// gives c the tools to draw 2d images os the canvas
const c = canvas.getContext('2d');

// sets height and width of the canvas
canvas.width = 1024
canvas.height = 576

// using c "the drawing tool" to fill the rectangle (canvas)
c.fillRect(0, 0, canvas.width, canvas.height);

// gravity
const gravity = 0.7

// class used to create objects
class Sprite {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
        this.height = 150
        this.lastKey
    }

    // draws a red rectangle on the object position 
    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 50, this.height)
    }

    // function to draw players and create gravity
    update(){
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y 
        
        if (this.position.y + this.height + this.velocity.y >= canvas.height){
            this.velocity.y = 0
         }
        else{
            this.velocity.y += gravity
        }
    }
}

//using class Sprite to create player
const player = new Sprite({
    position: {
        x:0,
        y:0
    }, 
    velocity: {
        x:0,
        y:10
    }
})

//using class Sprite to create enemy
const enemy = new Sprite({
    position: {
        x:400,
        y:0
    }, 
    velocity: {
        x:0,
        y:10
    }
})

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    }
}





// function for an infinite loop that calls itself when a new frame is available
function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()

    player.velocity.x = 0
    enemy.velocity.x = 0

    if (keys.a.pressed && player.lastKey === 'a') {
        player.velocity.x = -5
    }
    else if (keys.d.pressed && player.lastKey === 'd') {
        player.velocity.x = 5
    }

    if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
        enemy.velocity.x = -5
    }
    else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
        enemy.velocity.x = 5
    }
}
animate();

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = true
            player.lastKey = 'd'
            break
        case 'a':
            keys.a.pressed = true
            player.lastKey = 'a'
            break
        case 'w':
            player.velocity.y = -10
            break    

        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            enemy.lastKey = 'ArrowRight'
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            enemy.lastKey = 'ArrowLeft'
            break
        case 'ArrowUp':
            enemy.velocity.y = -10
            break   
    }
    console.log(event.key);
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 'w':
            keys.w.pressed = false
            break

        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break
        case 'ArrowUp':
            keys.ArrowUp.pressed = false
            break
    }
    console.log(event.key);
})