export interface TaskState {
  loading: boolean;
  tasks: Task[];
  members: Member[];
  error: string | null;
}

export enum TasksActionTypes {
  TASK_REQUEST = "tasks/TASK_REQUEST",
  TASK_GET_SUCCESS = "tasks/TASK_GET_SUCCESS",
  TASK_ERROR = "tasks/TASK_ERROR",
}

export interface Task {
  id: number;
  header: string;
  description?: string;
  dueDate: Date;
  status: TaskStatus;
  assignedTo: string;
}

export enum TaskStatus {
  Planned = "Planned",
  Started = "Started",
  Done = "Done",
}

export interface Member {
  memberId: number;
  memberName: string;
}
