import React, { Component } from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import { Member } from "../../store/tasks/types";

interface MembersProps {
  members: Member[];
}

export class Members extends Component<MembersProps> {
  render() {
    const { members } = this.props;
    return (
      <MembersContainer>
        {members &&
          members.map((m) => (
            <AvatarTooltip key={m.memberId} data-for={m.memberId} data-tip>
              <div>
                <MemberCircle>{m.memberName.charAt(0)}</MemberCircle>
                <ReactTooltip
                  id={m.memberId.toString()}
                  place="bottom"
                  type="info"
                  effect="float"
                >
                  Name: {m.memberName}
                </ReactTooltip>
              </div>
            </AvatarTooltip>
          ))}
      </MembersContainer>
    );
  }
}

export default Members;

const MembersContainer = styled.div`
  display: flex;
`;

const MemberCircle = styled.div`
  border-radius: 50%;
  height: 36px;
  width: 36px;
  border: 2px solid #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: slategray;
  font-weight: bold;
  margin-left: 5px;
`;

const AvatarTooltip = styled.div`
  display: flex;
`;
