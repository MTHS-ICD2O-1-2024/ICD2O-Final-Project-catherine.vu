// Copyright (c) 2025 Catherine All rights reserved
//
// Created by: Catherine
// Created on: June 3 2025
// This is the Rock, Paper, Scissors game configuration file

 // scene import statements
 import MenuScene from "./menuScene.js"
import GameScene from "./gameScene.js"

//create the new scenes 
const menuScene = new MenuScene()
const gameScene = new GameScene()

/**
* Start Phaser Game.
*/
//game scene//
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  //set background color
  backgroundColor:rgb(254, 195, 255),
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
//console.log(game)

//load scenes
//Note: remember any "key" is global and CAN NOT be reused!
game.scene.add("menuScene", menuScene)
game.scene.add("gameScene", gameScene)

// the start scene 
game.scene.start("menuScene")