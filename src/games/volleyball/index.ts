import 'phaser'

// import { GAME } from './config/constants'
// import './assets/styles/style.scss'

// import { create } from './stage/create'
// import { update } from './stage/update'
// import { preload } from './stage/preload'

import { LoadScene } from './scenes/LoadScene'
import { MenuScene } from './scenes/MenuScene'

const gameConfig = {
  height: 400,
  type: Phaser.AUTO,
  width: 800,
  physics: {
    default: 'arcade',
    arcade: {
      // gravity: { y: 200 }
    }
  },
  scene: [LoadScene, MenuScene]
}

new Phaser.Game(gameConfig)

export default {
  some: 'some'
}

// // reload page on parcel hotreload
// if (module.hot) {
//   module.hot.accept(() => {})

//   module.hot.dispose(() => {
//     window.location.reload()
//   })
// }
