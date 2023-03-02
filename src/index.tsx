import { createRoot } from "react-dom/client";
import { initializeApp } from "firebase/app";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./navigation";
import { Provider } from "react-redux";
import { persistor, store } from "./redux";
import { PersistGate } from "redux-persist/integration/react";
import { Auth0Provider } from "@auth0/auth0-react";

const env = process.env;

const firebaseConfig = {
  apiKey: env.REACT_APP_API_KEY,
  authDomain: env.REACT_APP_AUTH_DOMAIN,
  projectId: env.REACT_APP_PROJECT_ID,
  storageBucket: env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: env.REACT_APP_MESSAGING_SENDER_ID,
  appId: env.REACT_APP_APP_ID,
};

export const app = initializeApp(firebaseConfig);

const domain = env.REACT_APP_AUTH0_DOMAIN as string;
const clientId = env.REACT_APP_AUTH0_CLIENT_ID as string;

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Auth0Provider
    clientId={clientId}
    domain={domain}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </Auth0Provider>
);
