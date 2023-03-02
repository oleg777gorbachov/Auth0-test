import { ProductI } from "../../types/ProductI";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../..";

export default async function BasketSet(
  id: string,
  basket: ProductI[]
): Promise<void> {
  const db = getFirestore(app);

  await setDoc(doc(db, "users/" + id), {
    basket: basket,
  });
}
