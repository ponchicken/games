import { SCENE } from '../constants'

export class LoadScene extends Phaser.Scene {
  constructor () {
    super({
      key: SCENE.load
    })
  }

  // public init () {}
  public preload () {
    this.load.setPath('../../assets/images/')
    this.load.image('player', 'player.png')
    this.load.image('coin', 'coin.png')
  }

  public create () {
    console.log(this)
    this.scene.start(SCENE.menu)
  }
}
