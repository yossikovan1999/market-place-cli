import {
  getProductInput,
  printTable,
  getIdAndPrice,
  getId,
} from "../io/io.js";
import Prodcut from "../models/product.js";
import products from "../data/products.js";

/**
 * checks and validates the users input.
 * @param {*} productInfo - Array
 */
function validateProductInfo(productInfo) {
  if (productInfo.length < 1 || productInfo.length > 4) {
    throw new Error(
      "Not all information was passed correctly, pass exactly as written"
    );
  }

  //check that the price is a number.
  if (isNaN(productInfo[1])) {
    throw new Error("price must be a number.");
  }
}


/**
 * get the product by the id of the product.
 * @param {*} id 
 */
function getProductById(id){
    //find the product in the DB/
  const product = products.find((product) => product.id === id);
  return product;
}


/**
 * print the products.
 */
function showProductDetails() {
  
  const id = getId();
  const product = getProductById(id);

  console.log("--- Product Details ---");

  for (key in Object.keys(product)) {
    console.log(key, ":", product[key]);
  }
}

/**
 * show By Price Order.
 * @returns - returns a copy of the original array sorted by.
 * price from lower to high.
 */
function showByPriceOrder() {
  //copies the original DB.
  const productsCopy = [...products];

  //sorts the copy of the original DB.
  const productsSorted = productsCopy.sort((product1, product2) => {
    return product1.price - product2.price;
  });

  //print the products by price.
  printTable(productsSorted);

  //returns the sorted copy.
  return productsSorted;
}

/**
 * edit the price of a specific product in the DB.
 */
function editPrice() {
  //ask the user for a id and price
  const { id, price } = getIdAndPrice();

  //find the product in the DB/
  const product = getProductById(id);

  //thorw a error if the product is not found in the DB.
  if (!product) {
    throw new Error("Unable to find the specified product. product not found.");
  }

  //this will update the price in the DB.
  product.price = price;
}

/**
 * remove a product by id.
 * @param {*} id - id given by the user.
 */
function removeProduct() {
  //this will ask the user to enter a id.
  const id = getId();

  //find the index of the product that matches the given id.
  const index = products.findIndex((product) => product.id === id);

  console.log(index);

  if (index === -1) {
    throw new Error("Unable to remove the product, id not found in the DB.");
  }

  //delete the product from the DB.
  products.splice(index, 1);
}

/**
 * ask the user for a input validate it and add it to the
 * product list
 */
function addProduct() {
  try {
    //get user input.
    const productInfo = getProductInput();

    //validate the input.
    validateProductInfo(productInfo);

    //this will create a new product instance.
    const product = new Prodcut(...productInfo);

    //this will push the product to the products array
    products.push(product);
  } catch (error) {
    console.error("Error:", error.message);
  }
}


export {
  addProduct,
  removeProduct,
  editPrice,
  showByPriceOrder,
  showProductDetails,
};
