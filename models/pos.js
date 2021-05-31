export default class Pos {

    constructor({x,y}){
        this.x = x
        this.y = y
    }

    getCoord(axis){
        return this[axis]
    }
}