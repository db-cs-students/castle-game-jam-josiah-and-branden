/** 
Title:Castle Jump
Creators:Josiah Blevins, 
Description:Castle Platformer

 */
//  Set Up Tilemap
scene.setTileMap(img`
    222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222.88...88...88...88...88...88...88...88...88...88...88..22222228...88...88...88...88...88...882222222228...88...88...88...88...88...88...88...88...8822222
    222222222222222222222222222.88...88...88...88...88...88...88...88...88...88...88...2222228...88...88...88...88...88...88..22222228...88...88...88...88...88...88...88...88...8822222
    .5.88.5.88.5.88.5.88.5.88.5.88...88...88...88...88...88...88...88...88...88...88...8222228...88...88...88...88...88...88...8222228...88...88...88...88...88...88...88...88...8822222
    ...88...88...88...88...88...88...88...88...88...88...6666668...88...88...88...88...8822228...88...88...88...88...88...88...88.2228...8666668...88...88...88...88...88...88...8822222
    ...88...88...88...88...88...88...88...666..88...88...88...88...88...88...88...88...885..88...88...88...88...88...88...88...88..588...88...88...88...88...88...88...88...88...8822222
    222222222222222222222222222.88...88...88...88...88...88...88...88..66666666...88...88...88...88...88...88...88...88...88...88...88...88...88...88...88...88.6668...88...88...8822222
    222222222222222222222222222.8866688...88...88...88...88...88...88...88...88...88...88...88...88...88...88..666...88...88...88...88...88...88...88...88...88...88...88...88...8822222
    222222222222222222222222222.88...88...88...8666668...88...88...88...88...88...88...88...88...8866688...88...88...88...88...88...88...88...88...8866688...88...88...88...88...8822222
    222222222222222222222222222.88...88...88...88...88...88...88...88...6666666...88...88...88...88...8866.886..88...88...88...88...88...88...88...88...88...88...88...88...88...88.2222
    ......................22222.88...88...88...88...88...88...88...88...88...88...882222222288..668...88...88...88.6668.6.866..88...88...88...88...88...88...88...88...88...88...88.2222
    ......................22222.88...88.66666..88...88...886666666688...88...88...822222222288...88...88...88...88...88...88...2222228...88...88...88...88...88...88...88...88...88.2222
    .....2...2............22222.8866.88...88...88...866..88...88...88...88...88...822222222288...88...88...88...88...88...88.222222228..66666.88...88...88...88...88...88...88...88.2222
    .....2...2............22222.88...88...88...88...88...88...88...88...88...88..42222222222884448844488444884448844488444822222222228...88...88...88...8866.88...88...88...88...88.2222
    .....2...2............22222.88...88...88...88...88...88...88...88...88...88..22222222222222222222222222222222222222222222222222228...88...88...88...88...88...88...88...88...88.2222
    ..2.........22........22222.88...88...88...88...88...88...88...88...88.44884422222222222222222222222222222222222222222222222222228...88...88...88...88...88..6666..88...88...88.2222
    ..222......22.........222224884448844488444884448844488444884448844488422222222222222222222222222222222222222222222222222222222228...88...88...88...88...88...88..488...88..488.2222
    ....22222222..........222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222228...884..88.4.88...88...822222222222222222222222222
    ......................22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    ......................22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
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
controller.B.onEvent(ControllerButtonEvent.Pressed, function on_jump() {
    my_sprite.vy = -75
})
//  Set Up Lives/Score
info.setScore(0)
info.setLife(3)
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
let enemy2 = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . f f f f f f . .
    . . . . . f f f b f b b b b f .
    . . . . f b b b f b b b b b f .
    . . . . f 9 b 9 f b f b f f f .
    . . . . f b b b f f b f b b f .
    . . . . . f f f f f f f f f f .
    . . . . . . . f . . f . f . f .
    . . . . . . . f . . f . f . f .
    . . . . . . . . . . . . f . f .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`)
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
let boss = sprites.create(img`
    .............ffffff...........
    .........ffff......fff........
    .....ffff.............fff.....
    ...ff...........fffff....ff...
    ..f.............f...f......f..
    ...f....fffff...f...f.....f...
    ...f....f...f...f...f.....f...
    ...f....f...f...fffff.....f...
    ...f....f...f.............f...
    ...f....fffff.............f...
    ...f......................f...
    ....f....................f....
    ....f....................f....
    ....f....................f....
    ....f....................f....
    ....f....................f....
    ....f....................f....
    .....f..................f.....
    .....f..................f.....
    .....f..................f.....
    .....f..................f.....
    .....f..................f.....
    .....f..................f.....
    ....f....................f....
    ...f......................f...
    ..f........................f..
    .f..........................f.
    f............................f
    f............................f
    .fff......................fff.
`)
//  Set Up Collision/Death
scene.onHitTile(SpriteKind.Player, 4, function on_hit_tile(sprite: Sprite) {
    info.changeLifeBy(-1)
    pause(1000)
    my_sprite.y = my_sprite.y + -150
})
//  Gravity
my_sprite.ay = 100
