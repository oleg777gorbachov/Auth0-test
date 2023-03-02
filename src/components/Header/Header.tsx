import { useAuth0 } from "@auth0/auth0-react";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import Patches from "../../utils/Patches";
import Basket from "../Basket/Basket";
import "./Header.css";

function Header() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <nav>
      <ul>
        <li>
          <Link to={Patches.HOME}>Home</Link>
        </li>
        <li>
          <Link to={Patches.STORE}>Store</Link>
        </li>
      </ul>
      <ul>
        <li>
          {isAuthenticated ? (
            <Link to={Patches.PROFILE}>Profile</Link>
          ) : (
            <p className="login" onClick={() => loginWithRedirect()}>
              Login
            </p>
          )}
        </li>
        <li>
          <div style={{ position: "relative" }}>
            <SlBasket className="icon basket-icon" />
            <Basket />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
