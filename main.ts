/** 
Title:Castle Jump
Creators:Josiah Blevins, 
Description:Castle Platformer

 */
//  Set Up Tilemap
scene.setTileMap(img`
    22222222222222222222222222222222222222222222222222222222222222222222222222222222222222................................................................
    222222222222222222222222222.......................................................2222222.............................................................
    222222222222222222222222222........................................................222222.............................................................
    .5....5....5....5....5....5.........................................................22222.............................................................
    .....................................................666666..........................2222.............................................................
    ......................................666............................................5................................................................
    222222222222222222222222222........................................66666666...........................................................................
    222222222222222222222222222...666.....................................................................................................................
    222222222222222222222222222.................66666.....................................................................................................
    222222222222222222222222222.........................................6666666...........................................................................
    ......................22222.....................................................22222222..............................................................
    ......................22222.........66666..............66666666................222222222..............................................................
    ......................22222......................66...........................4222222222..............................................................
    ......................22222..................................................42222222222..............................................................
    ......................22222..................................................22222222222..............................................................
    ......................22222............................................44444422222222222..............................................................
    ......................222224444444444444444444444444444444444444444444422222222222222222..............................................................
    ......................222222222222222222222222222222222222222222222222222222222222222222..............................................................
    ......................222222222222222222222222222222222222222222222222222222222222222222..............................................................
    ......................222222222222222222222222222222222222222222222222222222222222222222..............................................................
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
//  Set Up Background
scene.setBackgroundImage(img`
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbb
`)
//  Set Up Player
let my_sprite = sprites.create(img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 9 9 f f f . . . .
    . . . f f 9 9 9 9 9 9 f f . . .
    . . f f 9 9 9 9 9 9 9 9 f f . .
    . . f 9 9 9 f 9 9 f 9 9 9 f . .
    . . f 9 9 9 f 9 9 f 9 9 9 f . .
    . . f 9 9 9 f 9 9 f 9 9 9 f . .
    . f f 9 9 9 9 9 9 9 9 9 9 f f .
    . f 9 9 9 9 f f f f 9 9 9 9 f .
    . f 9 9 9 9 9 9 9 9 9 9 9 9 f .
    . f 9 9 9 9 9 9 9 9 9 9 9 9 f .
    . f 9 9 9 9 9 9 9 9 9 9 9 9 f .
    . f 8 8 9 9 8 8 8 9 9 8 8 9 f .
    f f 8 8 8 9 8 8 8 8 9 8 8 8 f f
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f
`)
controller.moveSprite(my_sprite)
scene.cameraFollowSprite(my_sprite)
//  Set Up Jump
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_jump() {
    my_sprite.vy = -75
})
//  Set Up Lives/Score
info.setScore(0)
info.setLife(3)
//  Set Up Enemies
//  Set Up Collision/Death
//  Gravity
my_sprite.ay = 100
