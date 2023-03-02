import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { basketReducer } from "../../redux/reducers/basketReducer";
import Patches from "../../utils/Patches";
import SumOfPrice from "../../utils/SumOfPrice";
import Item from "../Item/Item";
import "./Basket.css";

function Basket() {
  const { basket } = useAppSelector((s) => s);
  const { isAuthenticated } = useAuth0();
  const dispatch = useAppDispatch();
  const { removeFromBasket } = basketReducer.actions;

  return (
    <div className="basket">
      <div className="basket-title">
        <h3>Basket</h3>
        <h5 className="price">{isAuthenticated ? SumOfPrice(basket) : 0}$</h5>
      </div>
      <div>
        {basket.length && isAuthenticated ? (
          <div className="basket-products">
            {[basket[0]].map((e) => (
              <Item
                item={e}
                key={e.id}
                remove={() => dispatch(removeFromBasket(e))}
              />
            ))}
            {basket.length > 1 && (
              <Link to={Patches.BASKET}>{basket.length - 1} more</Link>
            )}
          </div>
        ) : (
          "Empty"
        )}
      </div>
    </div>
  );
}

export default Basket;
