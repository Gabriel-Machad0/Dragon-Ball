
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
const gravity = 0.2

// class used to create objects
class Sprite {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
        this.height = 150
    }

    // draws a red rectangle on the object position 
    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 50, this.height)
    }

    // function to draw players and create gravity
    update(){
        this.draw()
        this.position.y += this.velocity.y 
        
        if (this.position.y + this.height + this.velocity.y >= canvas.height){
            this.velocity.y = 0
         }
        else    this.velocity.y += gravity
        
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

// drawing the player and enemy objects



// function for an infinite loop that calls itself when a new frame is available
function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()
}
animate();