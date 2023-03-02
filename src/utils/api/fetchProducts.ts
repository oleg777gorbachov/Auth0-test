import axios from "axios";
import { ProductI } from "./../../types/ProductI";
export default async function fetchProducts(): Promise<ProductI[]> {
  try {
    const response = await axios
      .get<ProductI[]>("https://fakestoreapi.com/products")
      .then((e) => e.data);

    return response;
  } catch (error) {
    throw new Error("Fetch error");
  }
}
