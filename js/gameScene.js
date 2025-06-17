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
    this.score = 0
    this.scoreText = null
    this.resultText = null
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

    this.scoreText = this.add.text(20, 20, 'Score: 0', {
      fontSize: '32px',
      color: '#000000',
    })

    this.resultText = this.add.text(20, 60, '', {
      fontSize: '28px',
      color: '#000000',
    })

    // Rock Button
    const rockBtn = this.add.image(550, 800, 'rockbutton').setInteractive().setScale(1.5)
    rockBtn.on('pointerdown', () => {
      this.playerChoice = 'rock'
      this.computerChoice = this.getComputerChoice()
      this.showChoice()
      this.showComputerChoice()
      this.checkWinner()
    })

    // Paper Button
    const paperBtn = this.add.image(900, 800, 'paperbutton').setInteractive().setScale(1.5)
    paperBtn.on('pointerdown', () => {
      this.playerChoice = 'paper'
      this.computerChoice = this.getComputerChoice()
      this.showChoice()
      this.showComputerChoice()
      this.checkWinner()
    })

    // Scissors Button
    const scissorsBtn = this.add.image(1300, 800, 'scissorsbutton').setInteractive().setScale(1.5)
    scissorsBtn.on('pointerdown', () => {
      this.playerChoice = 'scissors'
      this.computerChoice = this.getComputerChoice()
      this.showChoice()
      this.showComputerChoice()
      this.checkWinner()
    })
  }

  getComputerChoice() {
    // Generate a random number between 1 and 3
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    let choice 

    // Map the number to a choice
    if (randomNumber === 1) {
      choice = 'rock'
    } else if (randomNumber === 2) {
    choice = 'paper'
    } else {
      choice = 'scissors'
    }

       // Store the choice in the instance variable
    this.computerChoice = choice
  }

  showChoice() {
    // Hide the previous image
    if (this.choiceImage) {
      this.choiceImage.setVisible(false)
    }

    // Show the correct image based on playerChoice
    if (this.playerChoice === 'rock') {
      this.choiceImage = this.add.image(900, 400, 'rock').setScale(0.5)
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
      checkWinner() {
        // checking if there is a winner
        let player = this.playerChoice
        let computer = this.computerChoice

        if (player === computer) {
          this.resultText.setText("It's a tie!")
          this.resultText.setColor('#ffffff')
        } else {
          let playerWins = false

          if (player === 'rock') {
            if (computer === 'scissors') {
              playerWins = true
            }
          } else if (player === 'paper') {
            if (computer === 'rock') {
              playerWins = true
            }
          } else if (player === 'scissors') {
            if (computer === 'paper') {
              playerWins = true
            }
          }

          if (playerWins) {
            this.score = this.score + 1
            this.scoreText.setText('Score: ' + this.score)
            this.resultText.setText('You Won! 🎉')
            this.resultText.setColor('#ffffff')
          } else {
            this.resultText.setText(' Game over! You Lost!')
            this.resultText.setColor('#ffffff')
            this.score = 0
            this.scoreText.setText('Score: 0')
          }
          // Hide result text after 2.5 seconds
          this.time.delayedCall(2000, () => {
            this.resultText.setText('')
            })
          }
        }
      }

export default GameScene
