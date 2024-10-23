import { Product } from "./products";

export class ProductManager {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  listProducts(): Product[] {
    return this.products;
  }

  removeProduct(id: number): void {
    const initial_length = this.products.length;
    this.products = this.products.filter((product) => product.id !== id);

    if (this.products.length < initial_length) {
      console.log(`Product with ID ${id} removed `);
    } else {
      console.log(`Product wih ID ${id} not found.`);
    }
  }

  searchProduct(category: string): Product[] {
    return this.products.filter((product) => product.category === category);
  }

  // searchProduct()
  // searchProduct(id:number){
  //     console.log(this.products.find(product => product.id === id));
  //  console.log(this.products.filter(product => product.id == id));
  // return search;
  // }

  updateProduct(id: number, updateFields: Partial<Product>): void {
    const updatedProducts = this.products.map((product) => {
      if (product.id === id) {
        console.log(`Product with ID ${id} updated`);
        return { ...product, ...updateFields };
      }
      return product;
    });

    if (updatedProducts === this.products) {
      console.log(`Product with ID ${id} not found`);
    } else {
      this.products = updatedProducts;
    }
  }
}
