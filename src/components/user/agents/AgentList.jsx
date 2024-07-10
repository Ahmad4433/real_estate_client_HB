import React from "react";
import agent from "../../../assets/agent.jpg";
import SingleAgentList from "./SingleAgentList";
import team from "../../../assets/team.jpg";
import "./agentList.css";
const AgentList = () => {
  return (
    <div className="agent_list_main">
      <div className="agent_list_header">
        <div className="agent_list_header_bd">
          <p>Meet Our Team</p>
          <p>Meet the experts who make your real estate dreams a reality</p>
        </div>
        <img src={team} />
      </div>
      <SingleAgentList />
      <SingleAgentList />
      <SingleAgentList />
      <SingleAgentList />
      <SingleAgentList />
      <SingleAgentList />
      <SingleAgentList />
    </div>
  );
};

export default AgentList;
