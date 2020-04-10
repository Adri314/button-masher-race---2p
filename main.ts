namespace SpriteKind {
    export const Goal = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
b d d b b b b b b b b b b b b b 
b d d b b b b b b b b b b b b b 
b d d b b b b b b b b b b b b d 
b d d b b b b b b b b b b b b d 
b d d b b b b b b b b b b b b d 
b d d b b b b b b b b b b b b d 
b d d b b b b b b b b b b b b b 
b d d b b b b b b b b b b b b b 
b d d b b b b b b b b b b b b b 
b d d b b b b b b b b b b b b b 
b d d b b b b b b b b b b b b d 
b d d b b b b b b b b b b b b d 
b d d b b b b b b b b b b b b d 
b d d b b b b b b b b b b b b d 
b d d b b b b b b b b b b b b b 
b d d b b b b b b b b b b b b b 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
b b b b b b b b b b b b b d d b 
b b b b b b b b b b b b b d d b 
d b b b b b b b b b b b b d d b 
d b b b b b b b b b b b b d d b 
d b b b b b b b b b b b b d d b 
d b b b b b b b b b b b b d d b 
b b b b b b b b b b b b b d d b 
b b b b b b b b b b b b b d d b 
b b b b b b b b b b b b b d d b 
b b b b b b b b b b b b b d d b 
d b b b b b b b b b b b b d d b 
d b b b b b b b b b b b b d d b 
d b b b b b b b b b b b b d d b 
d b b b b b b b b b b b b d d b 
b b b b b b b b b b b b b d d b 
b b b b b b b b b b b b b d d b 
`
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    car2.vy += acceleration
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goal, function (sprite, otherSprite) {
    if (info.player1.score() > info.player2.score()) {
        info.setScore(info.player1.score())
    } else {
        info.setScore(info.player2.score())
    }
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    car1.vy += acceleration
})
let car2: Sprite = null
let car1: Sprite = null
let acceleration = 0
tiles.setTilemap(tiles.createTilemap(
            hex`0a0050000101010102030101010101050105020301010501010401010203010101010101010102030104010505010501020301010101010101050203010105010101040102030501010101010101020301010501050101050203010101050101050102030104010101050105020301010101010104010203010501050101010102030105040101050101020301010101010105010203050105010101010102030101010105010105020301010105010401010203010501010101010502030501040101010501020301050101010501010203010105010105010102030101010501010105020301050101010105010203050101050501040102030104010105010101020301010105010105010203010105010501010102030105010101010505020305010105050101010203010101010104010102030501010101010101020301010501050501010203010101050101050102030105010101010101020301010101010105050203050401050105010502030101010101050101020301010505010105010203050101050505010502030105010101010101020305010105010105010203010105010101040502030501010101010101020301010105010105010203010501040501010102030501050105010105020301010501010501010203010501050101050102030101050101010101020301050105010501050203010101050504010102030501010101050105020301010505010101010203050101010101010502030501040501010101020301010101010501050203010501010104010102030101050505010101020305010101010105010203050101050101050102030104050105010105020301010101010504010203010105010101010102030501010105010501020301040501050101050203050101050105040102030105010501010101020301010501050101050203050501040504010102030105050501010501020301010105010101050203010401050105010102030501050105010401020301050101010501010203010501050101010502030101040104010501020305010105010501010203010105010501010502030101040505050405020305010105`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,myTiles.tile1,myTiles.tile3,sprites.castle.tileGrass2,sprites.castle.tileGrass3],
            TileScale.Sixteen
        ))
acceleration = -5
let friction = 1
car1 = sprites.create(img`
. . . . . . e e c c e e . . . . 
. . . . . e 2 2 2 2 2 2 e . . . 
. . . . 2 c 2 2 2 2 2 2 c 2 . . 
. . . e 2 c 4 2 2 2 2 2 c 2 e . 
. . . f 2 2 4 2 2 2 2 2 c 2 f . 
. . . f 2 2 4 2 2 2 2 2 2 2 f . 
. . . f 2 2 4 2 2 2 2 2 2 2 f . 
. . . f 2 c 2 4 4 2 2 2 c 2 f . 
. . . e 2 c e c c c c e c 2 e . 
. . . e 2 e c b b b b c e 2 e . 
. . . e 2 e b b b b b b e 2 e . 
. . . e e e e e e e e e e e e . 
. . . f e d e e e e e e d e f . 
. . . f e 2 d e e e e d 2 e f . 
. . . f f e e e e e e e e f f . 
. . . . f f . . . . . . f f . . 
`, SpriteKind.Player)
tiles.placeOnTile(car1, tiles.getTileLocation(4, 79))
car2 = sprites.create(img`
. . . . 8 8 c c 8 8 . . . . . . 
. . . 8 6 6 6 6 6 6 8 . . . . . 
. . 6 c 6 6 6 6 6 6 c 6 . . . . 
. 8 6 c 9 6 6 6 6 6 c 6 8 . . . 
. f 6 6 9 6 6 6 6 6 c 6 f . . . 
. f 6 6 9 6 6 6 6 6 6 6 f . . . 
. f 6 6 9 6 6 6 6 6 6 6 f . . . 
. f 6 c 6 9 9 6 6 6 c 6 f . . . 
. 8 6 c 8 c c c c 8 c 6 8 . . . 
. 8 6 8 c b b b b c 8 6 8 . . . 
. 8 6 8 b b b b b b 8 6 8 . . . 
. 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
. f 8 d 8 8 8 8 8 8 d 8 f . . . 
. f 8 6 d 8 8 8 8 d 6 8 f . . . 
. f f 8 8 8 8 8 8 8 8 f f . . . 
. . f f . . . . . . f f . . . . 
`, SpriteKind.Player)
tiles.placeOnTile(car2, tiles.getTileLocation(5, 79))
let end = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
e e . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e 
e 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f e 
e 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f e 
e 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f e 
e f f f 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f 1 1 1 e 
e f f f 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f 1 1 1 e 
e f f f 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f 1 1 1 e 
e 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f e 
e 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f e 
e 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f 1 1 1 f f f e 
e e . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e 
e e . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e 
e e . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e 
e e . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e 
e e . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e 
`, SpriteKind.Goal)
end.setPosition(80, 8)
game.splash("Button Masher Race!")
game.splash("P1: Press A", "P2: Press B")
game.onUpdateInterval(200, function () {
    if (!(controller.A.isPressed()) && car1.vy < 0) {
        car1.vy += friction
    }
    if (!(controller.B.isPressed()) && car2.vy < 0) {
        car2.vy += friction
    }
})
game.onUpdate(function () {
    info.player1.setScore(car2.y - car1.y)
    info.player2.setScore(car1.y - car2.y)
    if (info.player1.score() > info.player2.score()) {
        scene.cameraFollowSprite(car1)
    } else {
        scene.cameraFollowSprite(car2)
    }
})
