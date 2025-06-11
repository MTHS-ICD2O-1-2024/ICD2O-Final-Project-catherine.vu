/* global Phaser */

// Copyright (c) 2025 Catherine Vu All rights reserved
//
// Created by: Catherine Vu
// Created on: May 2025
// This is the Menu Scene

/**
 * This class is the Menu Scene.
 */
class MenuScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor() {
    super({ key: 'menuScene' })

    this.menuSceneBackgroundImage = null
    this.startButton = null
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   *  before preload () and create ().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to load assets.
   */
  preload() {
    console.log('Menu Scene')
    this.load.image('menuScene', './assets/gameMenuSceneBackground.png')
    this.load.image('startButton', './assets/Start.png')
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    this.gameMenuSceneBackground = this.add.sprite(0, 0, 'menuScene')
    this.gameMenuSceneBackground.x = 1920 / 2
    this.gameMenuSceneBackground.y = 1080 / 2

    this.start = this.add.sprite(1920 / 2, 1080 / 2 + 180, 'startButton')
    this.start.setInteractive({ useHandCursor: true })
    this.start.on('pointerdown', () => this.clickButton())
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scene is running.
   * @param {number} time The current time.
   * @param {number} delta The delta time in ms since the last frame.
   */
  update(time, delta) {
    // pass
  }

  clickButton() {
    this.scene.start('gameScene')
  }
}

export default MenuScene