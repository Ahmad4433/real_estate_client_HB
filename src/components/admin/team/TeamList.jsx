import React, { useEffect, useState } from "react";
import useNetwork from "../../../hooks/useNetwork";
import useProvideState from "../../../hooks/useProvideState";
import SingleTeam from "./SingleTeam";
import { CircularProgress } from "@mui/material";
import "./teamList.css";
import { usersAction } from "../../../store/users-slice";

const TeamList = ({ addedTeam, updatedUser }) => {
  const { dispatch } = useProvideState();

  const [isLoading, setIsLoading] = useState(false);
  const { apiData, httpAction } = useNetwork();
  const { getUserList } = apiData();
  const [team, setTeam] = useState([]);

  useEffect(() => {
    setTeam((prevTeam) => [...prevTeam, addedTeam]);
  }, [addedTeam]);

  useEffect(() => {
    const findedIndex = team.findIndex((item) => {
      return item._id === updatedUser?._id;
    });

    const updatedTeams = [...team];

    updatedTeams.splice(findedIndex, 1, updatedUser);
    setTeam(updatedTeams);
  }, [updatedUser]);

  useEffect(() => {
    const getList = async () => {
      setIsLoading(true);
      const result = await dispatch(httpAction(getUserList()));
      if (result?.status) {
        setTeam(result?.list);
        setIsLoading(false);
        dispatch(
          usersAction.setUSerName(
            result?.list?.map((item) => {
              return item?.data?.user_name;
            })
          )
        );
      }
    };

    getList();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {isLoading && <CircularProgress color="primary" />}
      </div>
      <div className="team_list_container">
        {team?.map((user, index) => {
          return (
            <SingleTeam
              setTeam={setTeam}
              index={index}
              team={team}
              key={index}
              user={user}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TeamList;
