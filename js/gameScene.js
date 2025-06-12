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
    this.computerChoiceImage = null
    this.computerChoice = null
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
    const rockBtn = this.add.image(960, 400, 'rockbutton').setInteractive().setScale(1.5)
    rockBtn.on('pointerdown', () => {
      this.playerChoice = 'rock'
      this.computerChoice = this.getComputerChoice()
      this.showChoice()
      this.showComputerChoice()
    })

    // Paper Button
    const paperBtn = this.add.image(960, 800, 'paperbutton').setInteractive().setScale(1.5)
    paperBtn.on('pointerdown', () => {
      this.playerChoice = 'paper'
      this.computerChoice = this.getComputerChoice()
      this.showChoice()
      this.showComputerChoice()

    })

    // Scissors Button
    const scissorsBtn = this.add.image(1440, 800, 'scissorsbutton').setInteractive().setScale(1.5)
    scissorsBtn.on('pointerdown', () => {
      this.playerChoice = 'scissors'
      this.computerChoice = this.getComputerChoice()
      this.showChoice()
      this.showComputerChoice()
    })
  }

  getComputerChoice() {
    // Generate a random number between 1 and 3
    const randomNumber = Math.floor(Math.random() * 3) + 1

    // Map the number to a choice
    if (randomNumber === 1) {
      return 'rock'
    } else if (randomNumber === 2) {
      return 'paper'
    } else {
      return 'scissors'
    }
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

    showComputerChoice() {
    // Hide the previous computer image
    if (this.computerChoiceImage) {
      this.computerChoiceImage.setVisible(false)
    }

    // Show computer choice image at right side
    if (this.computerChoice === 'rock') {
      this.computerChoiceImage = this.add.image(1300, 400, 'rock').setScale(0.5)
    } else if (this.computerChoice === 'paper') {
      this.computerChoiceImage = this.add.image(1300, 400, 'paper').setScale(0.5)
    } else if (this.computerChoice === 'scissors') {
      this.computerChoiceImage = this.add.image(1300, 400, 'scissors').setScale(0.5)
    }
   }
  }


export default GameScene