

import { ProductManager} from "./product-manager";
import { Product } from "./products";


const productManager = new ProductManager();


console.log("Welcome to Product Management System App");

const product : Product = {
    id:1,
    name: "Samsung Galaxy S21",
    price: 80000,
    rating: 4.5,
    reviewsCount: 100,
    brand: 'Samsung',
    availability: 'available',
    releaseDate: '2020-02-11'
};

productManager.addProduct(product);
console.clear();

let products: Product[] = productManager.listProducts();
console.log(products);


const product2 : Product = {
    id:2,
    name: "Samsung Galaxy S20",
    price: 90000,
    rating: 4.6,
    reviewsCount: 90,
    brand: 'Samsung',
    availability: 'available',
    releaseDate: '2020-02-21'
};


productManager.addProduct(product2);
console.clear();


let products2: Product[] = productManager.listProducts();
console.log(products2);


const product3 : Product = {
    id:3,
    name: "iphone",
    price: 80000,
    rating: 4.1,
    reviewsCount: 99,
    brand: 'iphone',
    availability: 'available',
    releaseDate: '2020-02-20'
};

productManager.addProduct(product3);
console.clear();

let products3: Product[] = productManager.listProducts();
console.log(products3);


console.log("***************After Remove Product **************************")

// Remove Product
productManager.removeProduct(1);


console.log("***************** Search Product ****************************")

// Search Product
productManager.searchProduct(2);
