import { Reducer } from "redux";
import { TasksActionTypes, TaskState } from "./types";

export const initialState: TaskState = {
  tasks: [],
  members: [],
  error: null,
  loading: false,
};
const reducer: Reducer<TaskState> = (state = initialState, action) => {
  switch (action.type) {
    case TasksActionTypes.TASK_REQUEST: {
      return { ...state, loading: true };
    }
    case TasksActionTypes.TASK_GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        tasks: action.tasks,
        members: action.members,
      };
    }
    case TasksActionTypes.TASK_ERROR: {
      return { ...state, loading: false, errors: action.error };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
