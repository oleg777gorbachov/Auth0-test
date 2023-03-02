import { withAuthenticationRequired } from "@auth0/auth0-react";
import Item from "../components/Item/Item";
import MainContainer from "../components/MainContainer/MainContainer";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { basketReducer } from "../redux/reducers/basketReducer";
import SumOfPrice from "../utils/SumOfPrice";

function Basket() {
  const { basket } = useAppSelector((s) => s);
  const dispatch = useAppDispatch();
  const { removeFromBasket } = basketReducer.actions;

  return (
    <MainContainer>
      <div className="basket-title">
        <h3>Basket</h3>
        <div className="basket-total">
          Total: <h4 className="price">{SumOfPrice(basket)}$</h4>
        </div>
      </div>
      <button className="buy">Buy</button>

      <div>
        {basket.length > 0
          ? basket.map((e) => (
              <Item
                item={e}
                key={e.id}
                remove={() => dispatch(removeFromBasket(e))}
              />
            ))
          : "Empty"}
      </div>
    </MainContainer>
  );
}

export default withAuthenticationRequired(Basket);
