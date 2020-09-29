"""
Title:
Creators:
Description:
"""
# Set Up Tilemap
scene.set_tile_map(img("""
    3333333333333333333333333333333333333333333.....
    .5....5....5....5....5.....5....5....5....5.....
    ................................................
    ................................................
    ................................................
    ................................................
    2222222222222222222222222222222222222222222.....
    4444444444444444444444444444444444444444444.....
"""))
scene.set_tile(2, img("""
    c c c c c c c c c c c c c c c c
    c b b b c b b c d b b b b b c c
    c b b c b b b c d b b b c c b c
    c c c c b b b c d b c c b b b c
    c b b c c b b c c c b b b b b c
    c b b b b c c c d b b b b b b c
    c b b b b c c c d b b b b b b c
    c c c c c c c a c c c c c c b c
    c b d d d c d d c c d d d d d c
    c d b b c b b b c d c b b b b c
    c d c c b b b b c d c b b b b c
    c c b b b b b b c b b c b b b c
    c d b b b b b c d b b c b b b c
    c d b b b b b c d b b b c b b c
    c d b b b b b c b b b b c b b c
    c c c c c c c c c c c c c c c c
"""))
scene.set_tile(4, img("""
    b d d d d c d d d d d d d d c c
    d b b b b b c b b b b b b c c c
    d b b b b b c b b b b b c c b c
    d b b b b b b c b b b b c b b c
    c b b b b b b c b b b c b b b c
    c c b b b b b c b b c b b b b c
    d b c c c b b b c c c b b b b c
    d b b c b c c c c c b b b b b c
    d b c c b b b b c c b b b b b c
    d b c b b b b b c d c c b b b c
    d b c b b b b b c d b b c c b c
    d c b b b b b c d b b b b b c c
    c c b b b b c c d b b b b b b c
    c b b b b b c d b b b b b b b c
    c b b b b c c d b b b b b b b c
    c c c c c c c c c c c c c c c c
"""))
# Set Up Background
