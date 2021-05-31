
// Все модели в одном файле с осн. классом, вспомогательные классы в отдельных папках

module.exports = class Model {

    constructor(data, methods){
        for(let m in methods)
            this[m] = methods[m]
        
        this.pubKeys = []
        for(let d in data){
            this[d] = data[d]
            this.pubKeys.push(d)
        }
    }

    get data(){
        let data = {}
        this.pubKeys.forEach((key) => {
            data[key] = this[key]
        })
        return data
    }
}





// class Model {
//     constructor(data, methods){
//         console.log("qq");
//         for(let m in methods)
//             this[m] = methods[m]
        
//             this.data = []
//             for(let d in data){
//                 this[d] = data[d]
//                 this.data.push(d)
//             }
//     }

//     get data(){
//         return this.data
//     }
// }