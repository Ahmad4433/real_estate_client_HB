import React, { useEffect, useState } from "react";
import "./agents.css";
import SingleAgent from "./SingleAgent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useNetwork from "../../../hooks/useNetwork";
import useProvideState from "../../../hooks/useProvideState";
const Agents = ({ show }) => {
  const { apiData, httpAction } = useNetwork();
  const { dispatch } = useProvideState();
  const { getUserList } = apiData();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsersList = async () => {
      const result = await dispatch(httpAction(getUserList()));
      console.log(result);
      if (result?.status) {
        setUsers(result?.list);
      }
    };
    getUsersList();
  }, []);

  const settings = {
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: window.outerWidth > 430 ? show : 2,
    slidesToScrol: 1,
  };

  return (
    <div className="home_agents_main">
      <p className="page_title_center">Our Experienced Agents </p>
      <p className="page_detail_center">
        Our experienced agents are dedicated to providing you with expert
        guidance
      </p>
      <div className="home_agent_slider">
        <Slider {...settings}>
          {users?.map((item, index) => (
            <SingleAgent user={item} key={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Agents;
