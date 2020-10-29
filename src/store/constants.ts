import { TaskStatus } from "./tasks/types";

export const Statuses = [
  {
    status: TaskStatus.Planned,
    colorCode: "#9B870C",
  },
  {
    status: TaskStatus.Started,
    colorCode: "#0000FF",
  },
  {
    status: TaskStatus.Done,
    colorCode: "#008000",
  },
];
