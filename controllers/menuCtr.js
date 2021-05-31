const Controller = require("./Controller")
const menuModel = require(`${process.cwd()}/models/menuModel`)
const menuView = require(`${process.cwd()}/views/menuView`)

module.exports = new Controller(menuModel, menuView,
    function(ch, key) {

        switch(key.name) {

            case "c" :
                if(key.ctrl || key.sequence === "\x01")
                    process.exit()
                break

            case "down":
            case "right":
                this.model.scroll(1)  //scroll или this.scroll
                Controller.render = true
                break

            case "up" :
            case "left" :
                this.model.scroll(-1)
                Controller.render = true
                break
            
            case "return" :
                this.model.activateSelectedItem()
                break

            default : console.log(key);
        }
    })
