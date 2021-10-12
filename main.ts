scene.setBackgroundColor(8)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 2 2 2 2 2 . . . . . . . . 
    . . 2 5 5 5 5 1 2 2 2 2 2 2 . . 
    . 2 4 4 4 4 4 4 4 4 5 4 1 1 5 . 
    . 2 4 4 4 1 1 4 4 4 4 4 4 4 1 2 
    2 4 4 4 1 f f 1 4 4 1 1 4 4 4 2 
    2 5 4 4 1 f f 1 4 1 f f 1 4 4 2 
    2 4 4 4 4 1 1 4 4 1 f f 1 4 4 2 
    2 4 4 4 4 4 4 4 4 4 1 1 4 4 4 2 
    2 5 4 4 4 4 4 4 4 4 4 4 4 4 4 2 
    2 5 4 4 4 4 4 4 4 4 4 4 4 4 4 2 
    . 2 5 4 4 4 2 2 2 2 2 2 4 4 2 . 
    . 2 5 5 5 2 . . . . . . 2 2 . . 
    . . 2 2 2 . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
let isLeft = false
game.onUpdate(function () {
    isLeft = mySprite.x < 80
    if (isLeft) {
        mySprite.say("left", 200)
    }
})
