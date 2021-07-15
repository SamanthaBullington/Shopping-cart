import PetsController from "./Controllers/Petscontroller.js";
class App {
  petsController = new PetsController();
}

window["app"] = new App();
