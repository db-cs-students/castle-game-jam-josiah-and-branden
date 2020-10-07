/** 
Title:Castle Jump
Creators:Josiah Blevins, Brandon White
Description:Castle Platformer

 */
//  Opening Text
game.splash("Get a score of 4 to win!")
//  Set Up Tilemap
scene.setTileMap(img`
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222....................
    222222222222222222222222222.88...88...88...88...88...88...88...88...88...88...88..22222228...88...88...88...88...88...88222222222222288...88...88...88...88...882...................
    222222222222222222222222222.88...88...88...88...88...88...88...88...88...88...88...2222228...88...88...88...88...88...88..2222222222288...88...88...88...88...882...................
    .5.88.5.88.5.88.5.88.5.88.5.88...88...88...88...88...88...88...88...88...88...88...8222228...88...88...88...88...88...88...822222222288...88...88...88...88...88....................
    ...88...88...88...88...88...88...88...88...88...88...6666668...88...88...88...88...8822228...88...88...88...88...88...88...88.22222228666668...88...88...88...88....................
    ...88...88...88...88...88...88...88...666..88...88...88...88...88...88...88...88...885..88...88...88...88...88...88...88...88.222222288...88...88...88...88...88....................
    222222222222222222222222222.88...88...88...88...88...88...88...88..66666666...88...88...88...88...88...88...88...88...88...88.222222288...88...88...88...88.6668....................
    222222222222222222222222222.8866688...88...88...88...88...88...88...88...88...88...88...88...88...88...88..666...88...88...88.222222288...88...88...88...88...88....................
    222222222222222222222222222.88...88...88...8666668...88...88...88...88...88...88...88...88...8866688...88...88...88...88...88.222222288...88...8866688...88...88....................
    222222222222222222222222222.88...88...88...88...88...88...88...88...6666666...88...88...88...88...8866.886..88...88...88...88.222222288...88...88...88...88...88....................
    ......................22222.88...88...88...88...88...88...88...88...88...88...882222222288..668...88...88...88.6668.6.866..88.222222288...88...88...88...88...88....................
    ......................22222.88...88.66666..88...88...886666666688...88...88...822222222288...88...88...88...88...88...88...222222222288...88...88...88...88...88....................
    .....2...2............22222.8866.88...88...88...866..88...88...88...88...88...822222222288...88...88...88...88...88...88.2222222222226666.88...88...88...88...88....................
    .....2...2............22222.88...88...88...88...88...88...88...88...88...88..4222222222288444884448844488444884448844482222222222222288...88...88...8866.88...88....................
    .....2...2............22222.88...88...88...88...88...88...88...88...88...88..2222222222222222222222222222222222222222222222222222222288...88...88...88...88...88....................
    ..2.........22........22222.88...88...88...88...88...88...88...88...88.4488442222222222222222222222222222222222222222222222222222222288...88...88...88...88..666....................
    ..222......22.........22222488444884448844488444884448844488444884448842222222222222222222222222222222222222222222222222222222222222288...88...88...88...88...88....................
    ....22222222..........222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222884..88.4.88...88...8222222....................
    ......................222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222....................
    ......................222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222....................
`)
scene.setTile(2, img`
    c c c c c c c c c c c c c c c c
    b b b c c b b b b b b c c b b b
    d d b c c b d d d d b c c b d d
    d d b c c b d d d d b c c b d d
    d d b c c b d d d d b c c b d d
    d d b c c b d d d d b c c b d d
    d d b c c b d d d d b c c b d d
    b b b c c b b b b b b c c b b b
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    b b b b b b b c c b b b b b b b
    b b d d d d b c c b d d d d d b
    b b d d d d b c c b d d d d d b
    b b b d d d b c c b b d d d b b
    b b b b b b b c c b b b b b b b
    b b b b b b b c c b b b b b b b
`, true)
scene.setTile(5, img`
    . . . . . . . c b c . . . . . .
    . . . . . . c b c . . . . . . .
    . . . . . . . c b c . . . . . .
    . . . . . . c b c . . . . . . .
    . . . . . . . f f . . . . . . .
    . . . . . . f 5 5 f . . . . . .
    . . . . f f 5 5 5 5 f f . . . .
    . . . f 5 5 5 5 5 5 5 5 f . . .
    . . . . f 5 5 5 5 5 5 f . . . .
    . . . . . f 5 5 5 5 f . . . . .
    . . . . . . f 5 5 f . . . . . .
    . . . . . . . f f . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, true)
scene.setTile(4, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . f f . . . . . . .
    . . . . . . f f f f . . . . . .
    . . . . . . f d d f . . . . . .
    . . . . . f d d d d f . . . . .
    . . . . . f d b b d f . . . . .
    . . . . f d b b b b d f . . . .
    . . . f c b b b b b b c f . . .
    . . f c b b b c c b b b c f . .
    . f c b b b c c c c b b b c f .
    . f c b b c c d d c c b b c f .
    f c b b c c d d d d c c b b c f
`, true)
scene.setTile(6, img`
    f f f f f f f f f f f f f f f f
    f a c c a c a a a a c a c c a f
    f a c c a a c a a c a a c c a f
    f a c c a a a c c a a a c c a f
    f a c c a a c a a c a a c c a f
    f a c c a c a a a a c a c c a f
    f a c c c a a a a a a c c c a f
    f c c c c c c c c c c c c c c f
    f c c c c c c c c c c c c c c f
    f a a a a a c c c c a a a a a f
    f c a a a c a c c a c a a a c f
    f a c a c a a c c a a c a c a f
    f a a c a a a c c a a a c a a f
    f a c a c a a c c a a c a c a f
    f c a a a c a c c a c a a a c f
    f f f f f f f f f f f f f f f f
`, true)
scene.setTile(7, img`
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
`)
scene.setTile(8, img`
    d d d b b d d d d d d b b d d d
    d c c b b d c c c c c b b d c f
    d c c b b d c c c c c b b d c f
    d c c b b d c c c c c b b c c f
    d c c b b d c c c c c b b c c f
    d c c b b d c c c c c b b c c f
    d c c b b d c c c c c b b c c f
    b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b
    d d d d d d d b b d d d d d d d
    d c c d d d d b b d c c c c c f
    d c c c c c c b b d c c c c c f
    d c c c c c c b b d c c c c c f
    d c c c c c c b b d c c c c c f
    d c c c c c c b b d c c c c c f
    d f f f f f f b b d f f f f f f
`)
//  Set Up Background
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff1ffffffffff
    fffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffff1fffff11fffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffff11111fffffffffff1fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff1ffffffffffff1111111ffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff11111111fffffffffffffffffffff1fffffffffffffff
    ffffffffffffffffffffffffffffffff7777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111ffffff1fff1ffffffffffffffffffffffffff
    ffffffffffff1ffffffffffffffff7777777777777777788ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff77777777777777777788888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffffffff1ffffffffffffffffffffffff
    ffff1fffffffffffffffffffff7777777777777777888888779fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111fffffffffffffffffffffffffffffffffffff
    ffffffffff1fffffffffffff77777777777777777777788877778fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff7777777777777777777777788777788ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff111111111fffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffff777777777777777777777778887788888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff77777777777777777777778888878888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffff1fffffffffffffffffffffffffffff
    ffffffffffffffffffff7777777777777777777777788888788888888fffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff7777777777777777777777788888888888887ffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff777777777777777777777778888888888888777fffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffffffffffffffffffff1fffffffffffffff
    ffffffffffffffffff77777777777777777777777888888888888887777ffffffffffffffffffff1ffffffffffffffffffffffffffffff111111111fffffffffff1fffffffffffffffffffffffffffff
    ffffffffffffffffff77777777777777777777777888888888888877777fffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff7777777777777777777788888888888888888777777ffffffffffffffffffffffffffffffffffffffffffffff1111111111111fffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff7777777777777777777788888888888888887777777fffffff1fffffffffffffffffffffffffffffffffff111111111111111ffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff7777777777777777777788888888888888887777777ffffffffffffffffffffffffffffffff1ffff11111111111111111111fffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff777777777777777777778888888888888888877777778fffffffffffffffffffffffffffffffffffff111111111111111111ffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff777777777777777777778888888888888887777777788ffffffffffffffffffffffffffffffffffffff1111111111111111fffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff777777777777777777788888888888888877777777788fffffffffffffffffffffffffffffffffffffff1111111111111fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff777777777777777777888888888888888877777777888ffffffffffffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff777777777777777778888888888888888877777777888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff777777777777777788888888888888888887777777888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff777777777777777788888888888888888888777777888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff777777777777777788888888888888888888777777888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff1ffffff777777777777777778888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffff
    ffffffffffffffff777777777888777778888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffff
    ffffffffffffffff777777778888777778888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff777777888888877778888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff777777888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff7777788888888888888888888888888888888877777ffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff7777788888888888888888888888888888888777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff7777788888888888888888888888888888887777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff77778888877778888888888888888888888777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff77778888777777888888888888888888888777777fffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff777778777777788888888888888888888877777fffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff7777777777777888888888888888888887777fffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff7777777777778888888888888888888887777ffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff77777777777888888888888888888888777fff1ffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff1ffff777777777788888888888888888888877fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff7777777778888887777778888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffff77777777788888777777788888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff7777777777777777777888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff77777777777777777778888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff7777777777777777888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff7777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff1ffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffff1ffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
`)
//  Set Up Player
let my_sprite = sprites.create(img`
    ....................
    ....................
    ........dddd........
    .......dddddd.......
    .......dddddd.......
    ........dddd........
    ......222dd222......
    ......22222222......
    ......d222222d......
    ......d222222d......
    ......d222222d......
    ......d222222d......
    .......cccccc.......
    .......cccccc.......
    .......c....c.......
    .......c....c.......
    .......c....c.......
    .......c....c.......
    ......cc....cc......
    ....................
`)
controller.moveSprite(my_sprite, 100, 0)
scene.cameraFollowSprite(my_sprite)
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_event_pressed() {
    let projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . 2 2 . . . . . . f f . . . .
        . . . 2 2 . . . . . f 7 f f . .
        . . . . 2 f f f f f f 7 7 7 f .
        . . . 2 2 . . . . . f 7 f f . .
        . . 2 2 . . . . . . f f . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, my_sprite, 135, 0)
})
my_sprite.setKind(SpriteKind.Player)
//  Set Up Jump
let candoublejump = true
controller.B.onEvent(ControllerButtonEvent.Pressed, function on_jump() {
    
    if (candoublejump) {
        my_sprite.vy = -75
        candoublejump = my_sprite.isHittingTile(CollisionDirection.Bottom)
    }
    
})
//  Set Up Lives/Score
info.setScore(0)
info.setLife(1)
//  Set Up Enemies
let enemy1 = sprites.create(img`
    . . . . . f f f f f f . . . . .
    . . . . f b d d d d b f . . . .
    . . . f b d d d d d d b f . . .
    . . . f b a f d d f a b f . . .
    . . . f b a f d d f a b f . . .
    . . . f b d d d d d d b f . . .
    . . . . f d d b b d d f . . . .
    . . . f d f b b b b f d f . . .
    . . f d f d f f f f d f d f . .
    . f d d f c c d d c c f d d f .
    . f b b f d d c c d d f b b f .
    . . f f . f c d d c f . f f . .
    . . . . . f d d d d f . . . . .
    . . . . f d b f f b d f . . . .
    . . . . f f f . . f f f . . . .
    . . . . . . . . . . . . . . . .
`)
enemy1.x = 510
enemy1.y = 108
enemy1.ay = 100
enemy1.setKind(SpriteKind.Enemy)
let enemy2 = sprites.create(img`
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
`)
enemy2.x = 1000
enemy2.ay = 100
enemy2.setKind(SpriteKind.Enemy)
let enemy3 = sprites.create(img`
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
`)
enemy3.x = 1500
enemy3.ay = 100
enemy3.setKind(SpriteKind.Enemy)
let enemy4 = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
`)
enemy4.x = 2000
enemy4.ay = 100
enemy4.setKind(SpriteKind.Enemy)
let enemy5 = sprites.create(img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
`)
enemy5.x = 2200
enemy5.ay = 100
enemy5.setKind(SpriteKind.Enemy)
//  Set Up Collision/Death
scene.onHitTile(SpriteKind.Player, 4, function on_hit_tile(sprite: Sprite) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function on_overlap(sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(1)
    pause(1000)
    otherSprite.destroy()
})
//  Gravity
my_sprite.ay = 100
//  Win Condition
game.onUpdate(function on_update() {
    
    if (info.score() == 4) {
        game.over(true)
    }
    
    if (my_sprite.isHittingTile(CollisionDirection.Bottom)) {
        candoublejump = true
    }
    
})
