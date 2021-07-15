import { ProxyState } from "../AppState.js";
import { petsService } from "../Services/PetsService.js";

//Private
function _draw() {
  let pets = ProxyState.pets
  let balance = ProxyState.balance
  let template = ''
  pets.forEach(p => template += p.Template)
  document.getElementById("cart").innerHTML = /*html*/`
      ${template}`
  document.getElementById("balance").innerHTML = balance

}

// Public
export default class PetsController {
  constructor() {
    ProxyState.on("pets", _draw)
    ProxyState.on("cart", _draw)
    ProxyState.on("balance", _draw);
    _draw()
  }

  addCart() {
    // event.preventDefault()
    // let button = event.target
    // document.getElementById('cart').innerHTML = template
    console.log("button working to buy pet")
  }

  addBalance() {
    petsService.addBalance()
    console.log('WORK WORK')
  }
}
