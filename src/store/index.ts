import { Action, ActionCreator, AnyAction, combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History, createBrowserHistory } from "history";

import task from "./tasks/reducer";
import { TaskState } from "./tasks/types";

import { RouterState } from "connected-react-router";
import configureStore from "./configureStore";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

export interface ApplicationState {
  task?: TaskState;
  router?: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    task,
    router: connectRouter(history),
  });

const history = createBrowserHistory();
const initialState: ApplicationState = {};
const store = configureStore(history, initialState);

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export type Dispatch = ThunkDispatch<any, any, AnyAction>;

export default store;
