scene.setBackgroundColor(8)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c c c c c . . . 
    . . . . . . c 5 5 5 5 5 c c . . 
    . . . . . c 5 5 5 5 5 5 5 5 c . 
    . . . . c b b b b b b 5 5 5 c . 
    . . . . c b b b b 1 b b c c . . 
    . . . . c 1 1 b b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 b b c c 
    . . c c d 1 1 1 b 1 b 1 5 5 5 c 
    . . c c d 1 c 1 1 1 b 1 b b 5 c 
    . c c d d 1 1 1 1 1 b 1 f b 5 c 
    f d d d 1 1 1 1 1 b b b f . c c 
    f f f f f 1 1 1 b b 5 5 5 f . . 
    . . . . . f f f 5 5 5 5 5 f . . 
    . . . . . . . . f f f f f f . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
let isLeft = false
game.onUpdate(function () {
    isLeft = mySprite.x < 80
    if (isLeft) {
        mySprite.say("left", 200)
    }
})
