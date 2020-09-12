export default class Human  {
    constructor(name) {
        this.name = name;

        this.doeswalk = () => console.log(`${this.name} is walking...`)
    }
}
