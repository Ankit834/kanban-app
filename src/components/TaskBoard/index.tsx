import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { ApplicationState, Dispatch } from "../../store";
import { Statuses } from "../../store/constants";
import { getTasks } from "../../store/tasks/action";
import { Member, Task } from "../../store/tasks/types";
import TaskCol from "../TaskCol";
import TaskFormModal from "../TaskFormModal";
import Members from "./Members";

interface TaskBoardProps {
  dispatch: Dispatch;
  tasks: Task[];
  members: Member[];
}

interface TaskBoardState {
  showTaskFormModal: boolean;
  editModeTask: Task | undefined;
}

class TaskBoard extends Component<TaskBoardProps, TaskBoardState> {
  state = {
    showTaskFormModal: false,
    editModeTask: undefined,
  };
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTasks());
  }
  render() {
    const { tasks, members } = this.props;
    return (
      <Fragment>
        <BoardHeader>
          <BoardTitle>Task Board</BoardTitle>
          <MembersDetails>
            Members: <Members members={members} />
          </MembersDetails>
        </BoardHeader>
        <BoardBody>
          {Statuses.map((s) => (
            <TaskCol
              status={s.status}
              themeColor={s.colorCode}
              statusWiseTasks={tasks.filter((t) => t.status === s.status)}
              openTaskFormModal={this.openTaskFormModal}
              closeTaskFormModal={this.closeTaskFormModal}
            />
          ))}
        </BoardBody>
        {this.state.showTaskFormModal && (
          <TaskFormModal onModalClose={this.closeTaskFormModal} />
        )}
      </Fragment>
    );
  }

  openTaskFormModal = (task?: Task) => {
    this.setState({ showTaskFormModal: true, editModeTask: task });
  };

  closeTaskFormModal = () => {
    this.setState({ showTaskFormModal: false, editModeTask: undefined });
  };
}

function mapStateToProps({ task }: ApplicationState) {
  return {
    tasks: task?.tasks ?? [],
    members: task?.members ?? [],
  };
}

export default connect(mapStateToProps)(TaskBoard);

const BoardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 25px;
  font-size: larger;
  max-height: 50px;
`;

const BoardTitle = styled.h4``;

const MembersDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoardBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
