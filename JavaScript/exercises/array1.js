const products = [
  { id: 1, name: "Laptop", price: 85000, category: "electronics", inStock: true },
  { id: 2, name: "Shirt", price: 1500, category: "clothes", inStock: true },
  { id: 3, name: "Phone", price: 45000, category: "electronics", inStock: false },
  { id: 4, name: "Shoes", price: 3500, category: "clothes", inStock: true },
  { id: 5, name: "Headphones", price: 5000, category: "electronics", inStock: true },
  { id: 6, name: "Jeans", price: 2500, category: "clothes", inStock: false },
];

const productsNames = products.map((item) => item.name);


const inStock = products.filter((item) => {
  if(item.inStock === true) {
    console.log(item.name);
  }
})

let totalPrice = products.filter((sum, item) => {
  sum + item.price, 0
})
console.log(totalPrice);

const cheapElectronics = products
  .filter((item) => item.category === "electronics" && item.inStock && item.price < 10000)
  .map((item) => item.name);

console.log(cheapElectronics); // ["Headphones"]

const sortedProducts = [...products];

sortedProducts.sort((a,b) => a.price - b.price);

console.log(sortedProducts);


const categoryCount = products.reduce((acc, product) => {
  acc[product.category] = (acc[product.category] || 0) + 1;
  return acc;
}, {});

console.log(categoryCount);
