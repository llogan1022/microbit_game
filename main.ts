input.onButtonPressed(Button.A, function () {
    if (attack == 1 && randint(1, 3) == rest) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . .
            . # . . #
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . . . . #
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . . # #
            . . . . #
            `)
        music.playMelody("C5 C5 - - - - - - ", 500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . #
            . . # . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
        enemy_life += -1
        basic.showString("" + (player_life))
        basic.showString("" + (enemy_life))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
    } else if (attack == 1 && randint(1, 3) == block) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . .
            . # . . #
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . . . . #
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . . # #
            . . . . #
            `)
        music.playMelody("F F - - - - - - ", 500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . #
            . . # . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
        basic.showLeds(`
            # . . . #
            # # . # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
        basic.showString("" + (player_life))
        basic.showString("" + (enemy_life))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
    } else if (attack == 1 && randint(1, 3) == attack) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # # .
            . . . # .
            . . . . .
            `)
        music.playMelody("C5 C - - - - - - ", 500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
        enemy_life += -1
        player_life += ENEM_DMG
        basic.showString("" + (player_life))
        basic.showString("" + (enemy_life))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (rest == 3 && randint(1, 3) == attack) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            # . . # .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            # . . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . . .
            . # . . .
            # . . . .
            # . . . .
            `)
        music.playMelody("C C - - - - - - ", 500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . # . .
            # . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
        player_life += ENEM_DMG
        basic.showString("" + (player_life))
        basic.showString("" + (enemy_life))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
    } else if (rest == 3 && randint(1, 3) == block) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        music.playMelody("A A - - - - - - ", 500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
        player_life += 1
        basic.showString("" + (player_life))
        basic.showString("" + (enemy_life))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
    } else if (rest == 3 && randint(1, 3) == rest) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        music.playMelody("A A - - - - - - ", 500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
        player_life += 1
        enemy_life += 1
        basic.showString("" + (player_life))
        basic.showString("" + (enemy_life))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (block == 2 && randint(1, 3) == attack) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            # . . # .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            # . . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . . .
            . # . . .
            # . . . .
            # . . . .
            `)
        music.playMelody("F F - - - - - - ", 500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . # . .
            # . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
        basic.showLeds(`
            # . . . #
            # # . # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
        basic.showString("" + (player_life))
        basic.showString("" + (enemy_life))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
    } else if (block == 2 && randint(1, 3) == block) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
        basic.showLeds(`
            # . . . #
            # # . # #
            # # # # #
            . # # # .
            . . # . .
            `)
        music.playMelody("B B - - - - - - ", 500)
        basic.showString("" + (player_life))
        basic.showString("" + (enemy_life))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
    } else if (block == 2 && randint(1, 3) == rest) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            . . . . #
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        music.playMelody("A A - - - - - - ", 500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
        enemy_life += 1
        basic.showString("" + (player_life))
        basic.showString("" + (enemy_life))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
    }
})
let ENEM_DMG = 0
let rest = 0
let block = 0
let attack = 0
let enemy_life = 0
let player_life = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # . . . #
    # . . . #
    `)
game.setScore(0)
player_life = 5
enemy_life = 5
attack = 1
block = 2
rest = 3
ENEM_DMG = -1
basic.forever(function () {
    if (enemy_life == 0) {
        basic.showString("MONSTER-SLAIN")
        basic.pause(100)
        basic.showString("NEW-ENEMY")
        game.addScore(1)
        enemy_life = 8
        ENEM_DMG = 2
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            `)
    } else if (player_life == 0) {
        basic.showString("GAME-LOSE")
        game.gameOver()
    }
})
