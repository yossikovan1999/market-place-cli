import readlineSync  from "readline-sync";

/**
 * get the input fro mthe user.
 * @returns - Array of the input.
 */
export function getProductInput(){

    const result = readlineSync.question("Please enter a Header, Price, Description, Category: ").split(" ");
    return result;
}


/**
 * print the table of all the products that are passed.
 * @param {*} products - the list of products to print.
 */
export function printTable(products){

    console.table(products);
}


/**
 * this will print the menu to the user
 */
export function printMenu(){

    console.log("=== Marketplace Manager ===");
    console.log("1) add a product");
    console.log("2) edit product price");
    console.log("3) sorted by pprice from expensive to cheap");
    console.log("4) remove a product by id");
    console.log("5) get products by specific category");
    console.log("6) EXIT");

    return readlineSync.question();
}

/**
 * ask the id from the user and return.
 * @returns - id
 */
export function getId(){

    const id = readlineSync.question("Please enter a id: ");
    return Number(id);
}


/**
 * get Id And Price
 * @returns - {id, price} object.
 */
export function getIdAndPrice(){

    const id = getId();
    const price = readlineSync.question("Please enter a price: ");

    return {id : Number(id), price : Number(price)};
}


