const rl = require("readline")

const stdin = process.stdin.setRawMode(true)
rl.emitKeypressEvents(stdin)

module.exports = class Controller {

    constructor(model, view, keymap){
        
        Controller.render = true
        
        this.model = model
        this.view = view //Вью настраивается через конфиг приложения
        this.keymap = keymap
    }

   

    tick(){
        if(Controller.render){
            console.log(this);
            this.view.render(this.model.data)
            Controller.render = false
        } 
        // else process.nextTick(this.tick)
    }
    
    run(){

        if(Controller.active)
            Controller.active.deactivate

        stdin.on("keypress", (ch, key) => {
            this.keymap.call(this, ch, key)
            process.nextTick(() => this.tick.call(this))
        })
        Controller.active = this
        this.tick()
    }

    deactivate(){
        stdin.removeListener("keypess", this.keymap)
    }
}