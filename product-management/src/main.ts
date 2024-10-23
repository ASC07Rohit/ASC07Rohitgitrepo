import { ProductManager } from "./product-manager";
import { Product } from "./products";
import * as readlineSync from "readline-sync";
import * as fs from "fs";

const product_manager = new ProductManager();

console.log("Welcome to Product Management system App");

const showMenu = () => {
  console.log("choose an option: ");
  console.log("1. Add Product");
  console.log("2. Remove Product");
  console.log("3. Search product");
  console.log("4. Update Product");
  console.log("5. Display All Product");
  console.log("6. Save Products");
  console.log("7. Exit");
};

const addProductFromUser = () => {
  const id = parseInt(readlineSync.question("Enter Product ID: "));
  const name = readlineSync.question("Enter Product Name: ");
  const category = readlineSync.question("Enter Product Category: ");
  const brand = readlineSync.question("Enter Brand Name: ");
  const price = parseInt(readlineSync.question("Enter Product Price: "));
  const rating = parseInt(readlineSync.question("Enter Product Rating: "));
  const reviewsCount = parseInt(
    readlineSync.question("Enter Product Review Count: ")
  );

  const newProduct: Product = {
    id,
    name,
    category,
    brand,
    price,
    rating,
    reviewsCount,
  };

  product_manager.addProduct(newProduct);
  console.log("Product added....");
};

const removeProductFromUser = () => {
  const remove_product = parseInt(
    readlineSync.question("Enter product ID to remove: ")
  );
  product_manager.removeProduct(remove_product);
};

const searchProductFromUser = () => {
  const category = readlineSync.question("Enter category to search: ");
  const matching_product = product_manager.searchProduct(category);

  if (matching_product.length > 0) {
    console.log(`Product in category "${category}":`);
    console.log(matching_product);
  } else {
    console.log(`No product found`);
  }
};

const updateProduct = () => {
  const product_update = parseInt(readlineSync.question("Enter product ID: "));

  let present_product = null;

  const products = product_manager.listProducts();
  for (const product of products) {
    if (product.id === product_update) {
      present_product = product;
      break;
    }
  }

  if (!present_product) {
    console.log(`Product with Id ${product_update} not found`);
    return;
  }

  console.log(`Updating Product with ID ${product_update}`);

  const updateChoice = readlineSync
    .question(
      "Enter field to update (name, price, rating, reviewsCount, brand, category): "
    )
    .toLowerCase();

  let updateFields: Partial<Product> = {};

  switch (updateChoice) {
    case "name":
      updateFields.name = readlineSync.question("Enter new name: ");
      break;

    case "price":
      updateFields.price = parseFloat(
        readlineSync.question("Enter new price: ")
      );
      break;

    case "rating":
      updateFields.price = parseFloat(
        readlineSync.question("Enter new rating: ")
      );
      break;

    case "reviewsCount":
      updateFields.price = parseInt(
        readlineSync.question("Enter new reviewsCount: ")
      );
      break;

    case "brand":
      updateFields.price = parseFloat(
        readlineSync.question("Enter new brand: ")
      );
      break;

    case "category":
      updateFields.price = parseFloat(
        readlineSync.question("Enter new category: ")
      );
      break;

    default:
      console.log("Invalid Field...");
  }
  product_manager.updateProduct(product_update, updateFields);
};

const saveProduct = () => {
  const save_product = product_manager.listProducts();
  if (save_product.length > 0) {
    fs.writeFileSync(
      "product.json",
      JSON.stringify(save_product, null, 2),
      "utf-8"
    );
    console.log("Product saved....");
  } else {
    console.log("No product available to save");
  }
};

const displayProducts = () => {
  console.log("Product List : ");
  const display_product = product_manager.listProducts();
  if (display_product.length > 0) {
    console.log(display_product);
  } else {
    console.log("No products available");
  }
};

let exit = false;

while (!exit) {
  showMenu();

  const choice = parseInt(readlineSync.question("Enter your choice (1-4):"));

  switch (choice) {
    case 1:
      addProductFromUser();
      break;
    case 2:
      removeProductFromUser();
      break;
    case 3:
      searchProductFromUser();
      break;
    case 4:
      updateProduct();
      break;
    case 5:
      displayProducts();
      break;
    case 6:
      saveProduct();
      break;
    case 7:
      console.log("Exiting the program.....");
      exit = true;
      break;
    default:
      console.log("Please select a valid option");
      break;
  }
}
