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
