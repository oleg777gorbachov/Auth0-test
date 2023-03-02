import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { useState } from "react";
import MainContainer from "../components/MainContainer/MainContainer";
import Modal from "../components/Modal/Modal";
import Patches from "../utils/Patches";

function Profile() {
  const [state, setState] = useState(false);
  const { logout, user } = useAuth0();

  const stateHandler = () => {
    setState((prev) => !prev);
  };

  return (
    <MainContainer>
      <div className="profile">
        <img src={user?.picture} alt="avatar" className="avatar" />
        <h3>Welcome {user?.nickname}</h3>
        <h3>Your email {user?.email}</h3>
        <div>
          <button onClick={stateHandler}>Change password</button>
          <button onClick={stateHandler}>Change email</button>
          <button onClick={stateHandler} className="remove">
            Delete account
          </button>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="remove"
          >
            Logout
          </button>
        </div>
      </div>
      <Modal state={state} onClose={stateHandler}>
        In development...
      </Modal>
    </MainContainer>
  );
}

export default withAuthenticationRequired(Profile, {
  returnTo: Patches.PROFILE,
});
