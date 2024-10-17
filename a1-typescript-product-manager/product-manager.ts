import { Product } from "./products";

export class ProductManager{
    private products : Product[] = [];

    addProduct(product: Product): void{
        this.products.push(product);
    }

    listProducts():Product[]{
        return this.products;
    }

    removeProduct(id:number):void{
        console.log(this.products.filter(product => product.id !== id));
    }

    // searchProduct()
    searchProduct(id:number){
        console.log(this.products.find(product => product.id === id));
        //  console.log(this.products.filter(product => product.id == id));
        // return search;
    }
}