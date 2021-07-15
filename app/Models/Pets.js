export default class Pet {
  constructor({ name, price, description, imgUrl, id = generateId() }) {
    this.is = id
    this.name = name
    this.price = price
    this.description = description
    this.imgUrl = imgUrl || 'assets/img/cat.jpg'
  }

  get Template() {
    return `
    <div class="card col-3 m-2">
    <div class="row p-2">
        <img class="card-img-top" src="${this.imgUrl}">
    </div>
    <div class="row text-center">
        <div class="card-body">
            <h4 class="card-title">${this.name}</h4>
            <h4 class="card-title">${this.price}</h4>
            <p class="card-text">${this.description}</p>
            <btn id="cat" type="button" class="center-text bg-dark shadow text-primary rounded btn"
            onclick="addCart()">
            Add to Cart</btn>
        </div>

    </div>
</div>
    `
    //NOTE Button needs onclick/onsubmit function//
  }


}

