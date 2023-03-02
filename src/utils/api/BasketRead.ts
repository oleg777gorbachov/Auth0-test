import { ProductI } from "./../../types/ProductI";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../..";

export default async function BasketRead(id: string): Promise<ProductI[]> {
  const db = getFirestore(app);

  const response = await getDoc(doc(db, "users/" + id)).then((e) => e.data());
  if (!response) throw new Error();

  return response.basket;
}
