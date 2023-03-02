import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import MainContainer from "../components/MainContainer/MainContainer";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { productSlice } from "../redux/reducers/productsReducer";
import { FilterI } from "../types/FilterI";
import { ProductI } from "../types/ProductI";
import fetchProducts from "../utils/api/fetchProducts";
import { GetValue } from "../utils/GetValue";
import Patches from "../utils/Patches";

const filters: FilterI[] = [
  {
    label: "Low price",
    value: "price",
    type: "-",
  },
  {
    label: "Max price",
    value: "price",
    type: "+",
  },
  {
    label: "Rating",
    value: "rating.rate",
    type: "+",
  },
  {
    label: "Amout",
    value: "rating.count",
    type: "+",
  },
];

function Store() {
  const { products, isError, isLoading, filter } = useAppSelector(
    (s) => s.products
  );
  const { basket } = useAppSelector((s) => s);
  const { setProductAction, setFilterAction } = productSlice.actions;
  const [items, setItems] = useState<ProductI[]>(products);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (filter) {
      const prods = products
        .map((e) => e)
        .sort((a, b) => {
          const aa = GetValue(a, filter.value);
          const bb = GetValue(b, filter.value);
          if (filter.type === "+") {
            return +bb - +aa;
          }
          return +aa - +bb;
        });
      setItems(prods);
    } else {
      setItems(products);
    }
  }, [filter, products]);

  useEffect(() => {
    if (products.length === 0)
      fetchProducts().then((e) => {
        dispatch(setProductAction(e));
        setItems(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const render = useMemo(() => {
    if (isError) {
      return <h3>Error occured</h3>;
    }

    if (isLoading) {
      return <h3>Loading...</h3>;
    }

    if (items.length === 0) {
      return <h3>No products</h3>;
    }

    return (
      <div className="products">
        {items.map((e) => (
          <div key={e.id} className="product">
            <img src={e.image} alt="product" className="product-image" />
            <div className="product-info">
              <Link to={Patches.PRODUCT + e.id}>{e.title}</Link>
              <div>
                <p>
                  Rating: <strong>{e.rating.rate}</strong>
                </p>
                <h5 className="price">{e.price}$</h5>
              </div>
              <Link to={Patches.PRODUCT + e.id}>
                <button>Buy</button>
              </Link>
              {basket.map((item) => item.id === e.id).includes(true) && (
                <p>In basket</p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }, [items, isError, isLoading, basket]);

  return (
    <MainContainer>
      <div className="filters">
        Filters:{" "}
        <div className="filters">
          {filters.map((e) => (
            <span
              key={e.label}
              onClick={() =>
                filter?.label === e.label
                  ? dispatch(setFilterAction(null))
                  : dispatch(setFilterAction(e))
              }
              className={
                filter?.label === e.label ? "filter selected" : "filter"
              }
            >
              {e.label}
            </span>
          ))}
        </div>
      </div>
      {render}
    </MainContainer>
  );
}

export default Store;
