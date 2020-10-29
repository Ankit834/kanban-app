import React, { Component } from "react";
import styled from "styled-components";
import { Task } from "../../store/tasks/types";

interface TaskCardProps {
  task: Task;
}

export class TaskCard extends Component<TaskCardProps> {
  render() {
    const { task } = this.props;
    return (
      <CardContainer>
        {task.header}
        <br />
        <br />
        Due: {task.dueDate}
        <br />
        <br />
        <AssignedTo>
          {task.assignedTo}
          <img
            src={process.env.PUBLIC_URL + "/User.png"}
            height="30px"
            width="30px"
            style={{ marginLeft: "10px" }}
          />
        </AssignedTo>
      </CardContainer>
    );
  }
}

export default TaskCard;

const CardContainer = styled.div`
  width: 85%;
  background-color: white;
  margin: 10px 0px;
  padding: 15px;
  font-family: "Lucida Console", Courier, monospace;
  font-size: larger;
  cursor: pointer;

  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

const AssignedTo = styled.div`
  display: flex;
  align-items: center;
  float: right;
`;

const TaskHeader = styled.div``;
