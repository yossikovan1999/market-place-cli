import { printMenu, getProductInput } from "../io/io.js";

import {
  addProduct,
  removeProduct,
  editPrice,
  showByPriceOrder,
  showProductDetails,
} from "../services/dataService.js";

/**
 * hanlde the user input - return false if user exits.
 * @param {*} userInput - user input
 * @returns
 */
function handleUserChoice(userInput) {
  switch (userInput) {
    case "1":
      addProduct();
      break;
    case "2":
      editPrice();
      break;
    case "3":
      showByPriceOrder();
      break;
    case "4":
      removeProduct();  
      break;
    case "5":
      showProductDetails();
      break;
    case "6":
      return false;
  }

  return true;
}

/**
 * run the app.
 */
function runApp() {
  let loop = true;

  while (loop) {
    try {
      const userInput = printMenu();
      loop = handleUserChoice(userInput);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
}

export default runApp;
