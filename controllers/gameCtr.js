const Controller = require(`${process.cwd}/controllers/controller`)
const gameModel = require(`${process.cwd}/models/gameModel`)
const gameView = require(`${process.cwd}/views/gameView`)

class GameController extends Controller {
    constructor(gameModel, gameView, keyMap){
        super(gameModel, gameView, keyMap)
    }
}

module.exports = new Controller(gameModel, gameView, {

})