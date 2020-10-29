import { Store, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { History } from "history";
import { ApplicationState, createRootReducer } from "./index";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(
  history: History,
  initialState: ApplicationState
): Store<ApplicationState> {
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
  );
  return store;
}
