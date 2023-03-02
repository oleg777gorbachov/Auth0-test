import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MainContainer from "../components/MainContainer/MainContainer";
import Modal from "../components/Modal/Modal";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { basketReducer } from "../redux/reducers/basketReducer";
import { ProductI } from "../types/ProductI";
import BasketSet from "../utils/api/BasketSet";
import fetchProduct from "../utils/api/fetchProduct";

function Product() {
  const [product, setProduct] = useState<ProductI>();
  const [isLoading, setIsLoading] = useState(true);
  const [isNeedToAuth, setIsNeedToAuth] = useState(false);

  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const { basket, products } = useAppSelector((s) => s);
  const dispatch = useAppDispatch();
  const { addToBasket, removeFromBasket } = basketReducer.actions;

  const { pathname } = useLocation();
  const isInclude = basket.map((e) => e.id === product?.id).includes(true);
  const id = pathname.split("/")[2];

  useEffect(() => {
    const { products: prods } = products;
    let index = -1;
    prods.map((e, i) => (e.id === +id ? (index = i) : false));
    if (index !== -1) {
      setProduct(prods[index]);
      setIsLoading(false);
    } else {
      fetchProduct(id).then((e) => {
        setProduct(e);
        setIsLoading(false);
      });
    }
  }, [id, products]);

  const add = () => {
    if (product && isAuthenticated && user?.sub) {
      dispatch(addToBasket(product));
      BasketSet(user.sub, [...basket, product]);
    } else setIsNeedToAuth(true);
  };

  const remove = () => {
    if (product && isAuthenticated && user?.sub) {
      if (products.products.length === 1) {
        localStorage.setItem("BASKET_CLEAR", "true");
      }
      dispatch(removeFromBasket(product));
      BasketSet(user.sub, [...basket.filter((e) => e.id === product.id)]);
    } else setIsNeedToAuth(true);
  };

  return (
    <MainContainer>
      {isLoading && <h3>Loading...</h3>}
      {product && (
        <>
          <div className="product" style={{ border: "none" }}>
            <img
              src={product.image}
              style={{ marginRight: "2rem", maxWidth: 568 }}
              alt="product"
            />
            <div className="product-info">
              <h3>{product.title}</h3>
              <div>
                <h5>Category: {product.category}</h5>
                <h5>Rating: {product.rating.rate}</h5>
                <h5>Products left: {product.rating.count} pieces</h5>
              </div>

              <div className="price">{product.price}$</div>
              {isInclude ? (
                <button className="remove" onClick={remove}>
                  Remove from basket
                </button>
              ) : (
                <button onClick={add}>Add to basket</button>
              )}
            </div>
          </div>
          <p>Description: </p>
          <p>{product.description}</p>
        </>
      )}
      <Modal state={isNeedToAuth} onClose={() => setIsNeedToAuth(false)}>
        To add items to cart you need to{" "}
        <span className="login" onClick={() => loginWithRedirect()}>
          login
        </span>
      </Modal>
    </MainContainer>
  );
}

export default Product;
