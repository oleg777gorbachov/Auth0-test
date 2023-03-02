import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../..";

export default async function FireBaseFirstWrite(id: string): Promise<void> {
  const db = getFirestore(app);
  const data = await getDoc(doc(db, "users/" + id)).then((e) => e.data());
  if (data) return;
  await setDoc(doc(db, "users/" + id), {
    basket: [],
  });
}
