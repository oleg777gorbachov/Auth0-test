import { ProductI } from "./../types/ProductI";
export default function SumOfPrice(products: ProductI[]): number {
  let counter = 0;
  for (let key of products) {
    counter = counter + key.price;
  }
  return +counter.toFixed(2);
}
