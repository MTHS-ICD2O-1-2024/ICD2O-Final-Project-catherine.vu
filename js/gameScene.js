/*global Phaser */

//Copyright (c) 2025 Catherine Vu All Rights Reserved 
//
// Created by: Catherine Vu
//;Created on: June 5 2025
// This is the Game Scene

/**
 * This class is the Game Scene.
 */

class GameScene extends Phaser.Scene {
  /**
   * This method is the constructor
   */
  constructor() {
    super({ key: 'gameScene' })

    this.paper = null
    this.scissors = null
    this.rock = null
  }

  preload() {
    console.log("Game Scene")
    this.load.image("scissors", "images/scissors.png")
    this.load.image("rock", "images/rock.png")
    this.load.image("paper", "images/paper.png")
  }

 preload () {
    this.load.image('rock', './images/rock.png')
    this.load.image('paper', './images/paper.png')
    this.load.image('scissors', './images/scissors.png')
    this.load.image('rockButton', './images/rockbutton.png')
    this.load.image('paperButton', './images/rockbutton.png')
        this.load.image('scissorsButton', './images/scissorsbutton.png')
  }

  create() {
  this.choices = ['rock', 'paper', 'scissors']

    this.add.image(centerX - spacing, y, 'rock')
    .setInteractive({ useHandCursor: true })
    .setScale(0.5)
    .on('pointerdown', () => this.makeChoice('rock'))

  this.add.image(centerX, y, 'paper')
    .setInteractive({ useHandCursor: true })
    .setScale(0.5)
    .on('pointerdown', () => this.makeChoice('paper'))

  this.add.image(centerX + spacing, y, 'scissors')
    .setInteractive({ useHandCursor: true })
    .setScale(0.5)
    .on('pointerdown', () => this.makeChoice('scissors'))

  // Computer choice image
  this.computerImage = this.add.image(centerX, 250, 'rock').setScale(0.5).setVisible(false)
}
