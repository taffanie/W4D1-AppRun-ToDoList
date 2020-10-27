class Task {
    static all = []
    constructor(desc) {
        this.id = Math.random()
        this.desc = desc 
        this.status = 0 
        this.highlight = false
        this.constructor.all.push(this)
    }
}

module.exports = Task 