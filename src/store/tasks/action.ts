import { Member, Task, TasksActionTypes } from "./types";
import { Action, Dispatch } from "redux";
import { AppThunk } from "..";

export const getTasks: AppThunk = () => {
  return (dispatch: Dispatch): Action => {
    try {
      const tasks: Task[] = JSON.parse(localStorage.getItem("tasks") ?? "");
      const members: Member[] = JSON.parse(
        localStorage.getItem("members") ?? ""
      );
      return dispatch({
        type: TasksActionTypes.TASK_GET_SUCCESS,
        tasks: tasks,
        members: members,
      });
    } catch (error) {
      return dispatch({
        type: TasksActionTypes.TASK_ERROR,
        error: error,
      });
    }
  };
};
