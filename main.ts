input.onButtonPressed(Button.B, function () {
    if (sprite.isTouching(sprite2)) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
let sprite2: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
sprite2 = game.createSprite(2, 2)
sprite2.turn(Direction.Right, 90)
basic.forever(function () {
    basic.pause(100)
    sprite.move(1)
    if (sprite.isTouchingEdge()) {
        sprite.ifOnEdgeBounce()
    }
    sprite2.move(1)
    basic.pause(100)
    if (sprite2.isTouchingEdge()) {
        sprite2.ifOnEdgeBounce()
    }
})
