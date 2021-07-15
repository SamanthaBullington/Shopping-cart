import { ProxyState } from "../AppState.js";
import Pet from "../Models/Pets.js";

class PetsService {
  addPet() {
    ProxyState.pets = [...ProxyState.pets, new Pet()]
  }

  addBalance() {
    ProxyState.balance += 25

  }
}

export const petsService = new PetsService();