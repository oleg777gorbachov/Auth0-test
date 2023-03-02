import { Link } from "react-router-dom";
import { ProductI } from "../../types/ProductI";
import Patches from "../../utils/Patches";
import "./Item.css";

interface ItemI {
  item: ProductI;
  remove?: () => void;
}

function Item({ item, remove }: ItemI) {
  const { id, image, price, rating, title } = item;

  return (
    <div className="product-sm">
      <img src={image} alt="product" />
      <div className="product-sm-info">
        <Link to={Patches.PRODUCT + id}>
          <h5>{title}</h5>
        </Link>
        <p>Rating: {rating.rate}</p>
        <p className="price">{price}$</p>
        {remove && (
          <button className="remove" onClick={remove}>
            Remove
          </button>
        )}
      </div>
    </div>
  );
}

export default Item;
