module.exports = class View {

    constructor(tmpl){
        this.tmpl = tmpl
    }

    render(data){
        console.clear()
        console.log(this.tmpl(data))
    }
}

// module.exports = {
//     menuView : ...,
//     gameView : ...
// }