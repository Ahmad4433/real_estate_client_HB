import React from "react";
import { Rating } from "@mui/material";
import "./singleTeam.css";
import Box from "../common/Box";
import { FiEdit } from "react-icons/fi";
import useNetwork from "../../../hooks/useNetwork";
import { MdDeleteOutline } from "react-icons/md";
import { SlEye } from "react-icons/sl";
import useProvideState from "../../../hooks/useProvideState";
import useScrollTop from "../../../hooks/useScrollTop";

import {
  FaEdit,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdCall, MdMail } from "react-icons/md";
import { filterActions } from "../../../store/search-filter";
import { listingSliceAction } from "../../../store/listing-slice";
import toast from "react-hot-toast";

const SingleTeam = ({ user, team, setTeam, index }) => {
  const { apiData, httpAction } = useNetwork();
  const { deleteUser } = apiData();
  const scrollTop = useScrollTop();
  const { dispatch } = useProvideState();
  const navigate = useNavigate();
  const userUpdateHandler = () => {
    dispatch(listingSliceAction.setUpdateUser(user));
    scrollTop();
  };

  const deleteHandler = async () => {
    const result = await dispatch(httpAction(deleteUser(user?._id)));
    if (result?.status) {
      toast.success(result?.message);
      scrollTop();
      const updatedTeam = [...team];
      updatedTeam.splice(index, 1);
      setTeam(updatedTeam);
    }
  };

  return (
    <Box hover bg="white" radius="1rem" padding="2rem 1.6rem">
      <div className="single_team_main">
        <div className="single_team_profile_section">
          <img src={user?.data?.profile} />
          <span className="single_team_listing_count">
            Listings: {user?.listing?.length}
          </span>
        </div>
        <div className="single_team_name_section">
          <span className="single_team_name">{user?.data?.user_name}</span>
          <Rating defaultValue={user?.data?.rating} readOnly size="small" />
        </div>
        <div className="single_team_item">
          <MdCall className="single_team_icon" />
          <span className="single_team_title">{user?.data?.mobile}</span>
        </div>
        <div className="single_team_item">
          <FaWhatsapp className="single_team_icon" />
          <span className="single_team_title">{user?.data?.whatsapp}</span>
        </div>
        <div className="single_team_socials">
          <Link to={user?.data?.facebbok} className="single_team_social">
            <FaFacebook className="single_team_icon" />
          </Link>
          <Link to={user?.data?.insta} className="single_team_social">
            <FaInstagram className="single_team_icon" />
          </Link>
          <Link to={user?.data?.youtube} className="single_team_social">
            <FaYoutube className="single_team_icon" />
          </Link>
          <Link to={user?.data?.tiktok} className="single_team_social">
            <FaTiktok className="single_team_icon" />
          </Link>
          <Link to={user?.data?.user_email} className="single_team_social">
            <MdMail className="single_team_icon" />
          </Link>
        </div>
        <div className="single_team_actions">
          <FiEdit onClick={userUpdateHandler} className="single_team_action" />
          <SlEye className="single_team_action" />
          <MdDeleteOutline
            onClick={deleteHandler}
            className="single_team_action"
          />
        </div>
        <div className="single_team_detail">
          <p>{user?.data?.user_detail}</p>
        </div>
      </div>
    </Box>
  );
};

export default SingleTeam;
