import { useAuth0 } from "@auth0/auth0-react";
import { ReactNode, useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { basketReducer } from "../../redux/reducers/basketReducer";
import BasketRead from "../../utils/api/BasketRead";
import FireBaseFirstWrite from "../../utils/api/FireBaseFirstWrite";
import Header from "../Header/Header";

interface MainContainerI {
  children: ReactNode;
}

function MainContainer({ children }: MainContainerI) {
  const { isAuthenticated, user } = useAuth0();
  const dispatch = useAppDispatch();
  const { setBasket } = basketReducer.actions;

  useEffect(() => {
    const ls = JSON.parse(localStorage.getItem("persist:root") || "{}");

    if (isAuthenticated && user && user.sub) {
      const basketls = JSON.parse(ls.basket);

      if (
        basketls.length === 0 &&
        !JSON.parse(localStorage.getItem("BASKET_CLEAR") || "false")
      ) {
        BasketRead(user.sub).then((e) => dispatch(setBasket(e)));
      } else {
        localStorage.setItem("BASKET_CLEAR", "true");
      }
      FireBaseFirstWrite(user.sub);
    }
  }, [isAuthenticated]);

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default MainContainer;
