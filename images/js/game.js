// Copyright (c) 2025 Catherine All rights reserved
//
// Created by: Catherine
// Created on: June 3 2025
// This is the Rock, Paper, Scissors game configuration file

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
      debug: true,
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