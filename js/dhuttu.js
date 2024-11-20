export default class Subscriber{
  constructor(name){
    this._name=name
  }

  emailme(){
    return `Hello ${this._name}`
  }
}
