import React, { useEffect, useState } from "react";
import agent from "../../../assets/agent.jpg";
import SingleAgentList from "./SingleAgentList";
import team from "../../../assets/team.jpg";
import "./agentList.css";
import useNetwork from "../../../hooks/useNetwork";
import useProvideState from "../../../hooks/useProvideState";
import useScrollTop from "../../../hooks/useScrollTop";
const AgentList = () => {
  const scroll = useScrollTop()
  scroll()
  const { dispatch } = useProvideState();
  const { apiData, httpAction } = useNetwork();
  const { getUserList } = apiData();
  const [agents, setAgesnts] = useState([]);

  useEffect(() => {
    const getAgents = async () => {
      const result = await dispatch(httpAction(getUserList()));
      console.log(result);
      if (result?.status) {
        setAgesnts(result?.list);
      }
    };
    getAgents();
  }, []);

  return (
    <div className="agent_list_main">
      <div className="agent_list_header">
        <div className="agent_list_header_bd">
          <p  >Meet Our Team</p>
          <p>Meet the experts who make your real estate dreams a reality</p>
        </div>
        <img className='agent_header_image' src={team} />
      </div>
      <div className="agent_list_list" >
      {agents?.map((item,index)=><SingleAgentList agent={item} key={index} />)}
      </div>

    </div>
  );
};

export default AgentList;
