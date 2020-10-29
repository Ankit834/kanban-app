import React, { Component } from "react";
import styled from "styled-components";
import { Task } from "../../store/tasks/types";
import TaskCard from "./TaskCard";

interface TaskColProps {
  status: string;
  themeColor: string;
  statusWiseTasks: Task[];
  openTaskFormModal: (task?: Task) => void;
  closeTaskFormModal: () => void;
}

interface TaskColState {
  showTaskFormModal: boolean;
}

export class TaskCol extends Component<TaskColProps, TaskColState> {
  state = {
    showTaskFormModal: false,
  };
  render() {
    const {
      status,
      themeColor,
      statusWiseTasks,
      openTaskFormModal,
      closeTaskFormModal,
    } = this.props;
    console.log(status, themeColor, statusWiseTasks);
    return (
      <ColContainer style={{ borderTop: `10px solid ${themeColor}` }}>
        <ColHeader>{status}</ColHeader>
        <ColBody>
          {statusWiseTasks &&
            statusWiseTasks.map((t) => <TaskCard key={t.id} task={t} />)}
          <AddButton
            onClick={() => openTaskFormModal(undefined)}
            style={{ backgroundColor: themeColor }}
          >
            + Add Task
          </AddButton>
        </ColBody>
      </ColContainer>
    );
  }

  openTaskFormModal = () => {
    this.setState({ showTaskFormModal: true });
  };
}

export default TaskCol;

const ColContainer = styled.div`
  background-color: #d3d3d3;
  margin: 30px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
`;

const ColBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ColHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: x-large;
  font-weight: 600;
`;

const AddButton = styled.button`
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    opacity: 0.7;
  }
`;
