import React, { useState } from "react";
import AddTeam from "./AddTeam";
import PageTitle from "../common/PageTitle";
import TeamList from "./TeamList";
import "./team.css";
const Team = () => {
  const [addedTeam, setAddedTeam] = useState(null);
  const [updatedUser,setUpdatedUser] = useState(null)
  const onAddTeam = (data) => {
    setAddedTeam(data);
  };

  const onUpdateTeam = (team) => {
    setUpdatedUser(team)
  
  };


  

  return (
    <div>
      <PageTitle title="My Team" />
      <div className="admin_team_container">
        <div>
          <TeamList updatedUser={updatedUser} addedTeam={addedTeam} />
        </div>
        <AddTeam onUpdateTeam={onUpdateTeam} onAddTeam={onAddTeam} />
      </div>
    </div>
  );
};

export default Team;
