// const gameCtr = require("../controllers/gameCtr")
// const scoreCtr = require("../controllers/scoreCtr")
// const optCtr = require("../controllers/optCtr")

const Model = require(`${process.cwd()}/models/Model.js`)

// console.log(Model);

module.exports = new Model({
        selected : 0,
        items : [
            {
                title : "Start game",
                isSelected : true,
                action : () => {console.log('qq');}// action : () => gameCtr.run()
            },
            {
                title : "Options",
                isSelected : false,
                action : () => {console.log('qq');} // optCtr.run()
            },
            {
                title : "High Score",
                isSelected : false,
                action : () => {console.log('qq');} // scoreCtr.run() заглушка до базы
            },
            {
                title : "Exit",
                isSelected : false,
                action : process.exit
            }
        ]
    },
    {
        scroll : function(d){
            // console.clear()
            // console.log(this);
            let {selected, items} = this
            items[selected].isSelected = false

            this.selected = selected ? (selected + d) % (items.length - 1) : items.length - 1
            items[this.selected].isSelected = true
        },
        activateSelectedItem : function(){
            this.items[this.selected].action()
        }
    })