const BOARD_SIDE = 10

// class Game {

//     constructor(){
//         this.board = new Board()
//     }

//     init(){
//         this.board
//     }
// }

module.exports = class Snake {

    constructor({head, body}, moveDir = DIRS.right) {

        Snake.DIRS = {
            up : { axis : "x", d : 1 },
            down : { axis : "x", d : -1 },
            right : { axis : "y", d : 1 },
            left : { axis : "y", d : -1 }
        }
        
        this.body = body
        this.head = head
        this.currMoveDir = movedir
    }

    move(){
        this.body.shift()
        this.body.push(this.head)

        this.head = new Pos((()=>{
            const tmp = {
                x : this.head.getCoord("x"),
                y : this.head.getCoord("y")
            }
            tmp[this.currMoveDir.axis] += this.currMoveDir.d
            return tmp
        })())
    }
}



const board = []
for(let i = 0; i < BOARD_SIDE; ++i){
    board[i] = new Array(BOARD_SIDE).fill(null)
}

const snake = function(){
    
    this.moveDir = DIRS.right
    this.body = [
        [(BOARD_SIDE / 2).round(), (BOARD_SIDE / 2).round()]
    ]
    for(let i = 1; i < 3; ++i)
        this.body[i] = [this.body[0][0], this.body[0][0]]
}