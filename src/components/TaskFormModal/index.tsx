import React, { Component } from "react";
import styled from "styled-components";
import { Dispatch } from "../../store";
import { Task, TaskStatus } from "../../store/tasks/types";

interface TaskFormModalProps {
  dispatch?: Dispatch;
  onModalClose?: () => void;
  task?: Task;
}

interface TaskFormModalState {
  task: Task;
}

export class TaskFormModal extends Component<
  TaskFormModalProps,
  TaskFormModalState
> {
  state = {
    task: {
      id: 0,
      header: "",
      description: "",
      dueDate: new Date(),
      status: TaskStatus.Planned,
      assignedTo: "",
    },
  };
  componentDidMount() {
    const { task } = this.props;
    if (task) {
      this.setState({ task: task });
    }
  }
  render() {
    const { onModalClose } = this.props;
    const { task } = this.state;
    return (
      <ModalContainer>
        <Modal>
          <CloseButton onClick={onModalClose}>X</CloseButton>
          <form>
            <div>
              <h5>Header</h5>
              <Input
                type="text"
                value={task.header}
                onChange={(e) => this.changeHeader(e.target.value)}
              />
              <h5>Due Date</h5>
              <Input
                type="text"
                value={this.getFormattedDate(task.dueDate)}
                onChange={(e) => this.setDueDate(e.target.value)}
              />
            </div>
          </form>
        </Modal>
      </ModalContainer>
    );
  }

  setDueDate = (date: string) => {
    const { task } = this.state;
    task.dueDate = new Date(date);
    this.setState({ task: task });
  };

  changeHeader = (value: string) => {
    const { task } = this.state;
    task.header = value;
    this.setState({ task: task });
  };

  getFormattedDate = (date: Date) => {
    var jsonDate = date.toJSON().slice(0, 10);
    var nDate =
      jsonDate.slice(8, 10) +
      "/" +
      jsonDate.slice(5, 7) +
      "/" +
      jsonDate.slice(0, 4);
    return nDate;
  };
}

export default TaskFormModal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const Modal = styled.div`
  position: fixed;
  background: white;
  width: 60%;
  height: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  overflow: auto;
  padding: 10px;
`;

const CloseButton = styled.button`
  position: fixed;
  height: 8%;
  width: 4%;
  border-radius: 50%;
  border: 1px solid #d3d3d3;
  float: right;
  right: 0;
  cursor: pointer;
  &:hover {
    background: red;
  }
`;

const Input = styled.input`
  width: 150%;
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  font: inherit;
  padding: 6px 10px;
  display: block;
  box-sizing: border-box;
  margin: 5px 0px;
  border-radius: 3px;
`;
