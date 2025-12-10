import products from "../data/products.js";

class Prodcut{
    
    static id = products.length;

    constructor(title, price, description){
        this.id = this.getId();
        this.id = Prodcut.id;
        this.title = title;
        this.price = Number(price);
        this.description = description;
    }

    getId(){
        Prodcut.id += 1;
        return Prodcut.id
    }

}

export default Prodcut;