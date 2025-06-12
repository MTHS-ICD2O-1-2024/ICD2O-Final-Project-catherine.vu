/* global Phaser */

// Copyright (c) 2025 Catherine Vu All rights reserved
//
// Created by: Catherine Vu
// Created on: May 2025
// This is the Game Scene

/**
 * This class is the Game Scene scene
 */
class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameScene' })
    this.background = null
    this.choiceImage = null
    this.playerChoice = null
  }

  preload() {
    this.load.image('gameSceneBackground', './assets/gameScenebackground.png')
    this.load.image('rock', './assets/rock.png')
    this.load.image('paper', './assets/paper.png')
    this.load.image('scissors', './assets/scissors.png')
    this.load.image('scissorsbutton', './assets/scissorsbutton.png')
    this.load.image('paperbutton', './assets/paperbutton.png')
    this.load.image('rockbutton', './assets/rockbutton.png')
  }

  create() {
    // Background
    this.background = this.add.image(0, 0, 'gameSceneBackground').setOrigin(0, 0).setScale(2.0)

    // Rock Button
    const rockBtn = this.add.image(480, 800, 'rockbutton').setInteractive().setScale(2.0)
    rockBtn.on('pointerdown', () => {
      this.playerChoice = 'rock'
      this.showChoice()
    })

    // Paper Button
    const paperBtn = this.add.image(960, 800, 'paperbutton').setInteractive().setScale(2.0)
    paperBtn.on('pointerdown', () => {
      this.playerChoice = 'paper'
      this.showChoice()
    })

    // Scissors Button
    const scissorsBtn = this.add.image(1440, 800, 'scissorsbutton').setInteractive().setScale(2.0)
    scissorsBtn.on('pointerdown', () => {
      this.playerChoice = 'scissors'
      this.showChoice()
    })
  }

  showChoice() {
    // Hide the previous image
    if (this.choiceImage) {
      this.choiceImage.setVisible(false)
    }

    // Show the correct image based on playerChoice
    if (this.playerChoice === 'rock') {
      this.choiceImage = this.add.image(960, 400, 'rock').setScale(0.5)
    } else if (this.playerChoice === 'paper') {
      this.choiceImage = this.add.image(960, 400, 'paper').setScale(0.5)
    } else if (this.playerChoice === 'scissors') {
      this.choiceImage = this.add.image(960, 400, 'scissors').setScale(0.5)
    }
  }
}

export default GameScene