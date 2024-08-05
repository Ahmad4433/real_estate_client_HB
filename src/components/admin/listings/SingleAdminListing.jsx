import React, { useEffect, useState } from "react";
import "./singleAdminListing.css";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { BiShow } from "react-icons/bi";
import useNetwork from "../../../hooks/useNetwork";
import useProvideState from "../../../hooks/useProvideState";
import toast from "react-hot-toast";
import { listingSliceAction } from "../../../store/listing-slice";
import { useNavigate } from "react-router-dom";
import { FaGripfire } from "react-icons/fa6";

const SingleAdminListing = ({ listing, index, data, setData }) => {
  const { dispatch } = useProvideState();
  const { apiData, httpAction } = useNetwork();
  const { deleteListing, updateListingActions } = apiData();
  const navigate = useNavigate();
  const [ishot, setISHot] = useState(false);
  const deleteHandler = async () => {
    const result = await dispatch(httpAction(deleteListing(listing?._id)));
    if (result?.status) {
      toast.success(result?.message);
      const updatedListing = [...data];
      updatedListing.splice(index, 1);
      setData(updatedListing);
    }
  };

  const navigateToUpdate = () => {
    dispatch(listingSliceAction.setUpdateDoc(listing));
    navigate("/admin/lising/add");
  };

  const hotActiveHandler = async () => {

    const result = await dispatch(
      httpAction(updateListingActions(listing?._id, true))
    );
    if (result?.status) {
      toast.success(result?.message);
      setISHot(true);
    }
  };

  return (
    <tr
      style={{ backgroundColor: index % 2 === 0 && "#f4f4f4" }}
      className="table_admin_listing_row"
    >
      <td>
        <span className="table_admin_listing_img_container">
          <img className="table_admin_listing_img" src={listing?.galary[0]} />
        </span>
      </td>
      <td>
        <span className="table_admin_listing_title">
          {listing?.data?.title}
        </span>
      </td>
      <td>
        <span>
          {listing?.data?.area} {listing?.data?.unit}
        </span>
      </td>
      <td>
        <span>{listing?.data?.type}</span>
      </td>
      <td>
        <span
          style={{
            backgroundColor:
              listing?.data?.purpose === "rent" ? "#ff5a5f" : "seagreen",
          }}
          className="table_admin_listing_purpose"
        >
          {listing?.data?.purpose}
        </span>
      </td>
      <td>
        <span>{listing?.data?.price} </span>
      </td>
      <td>
        <span>{new Date(listing?.createdAt).toLocaleDateString()}</span>
      </td>
      <td>
        <span>{listing?.user?.data?.user_name}</span>
      </td>
      <td>
        <span>{listing?.data?.branch}</span>
      </td>
      <td>
        <div className="table_admin_listig_action_container">
          <FaGripfire
            style={{ color: ishot || listing?.isHot && "#ff5a5f" }}
            onClick={hotActiveHandler}
            className="tabele_admin_listing_icon_hot"
          />
          <BiShow className="table_admin_listing_action" />
          <FaRegEdit
            onClick={navigateToUpdate}
            className="table_admin_listing_action"
          />
          <MdOutlineDeleteOutline
            onClick={deleteHandler}
            className="table_admin_listing_action"
          />
        </div>
      </td>
    </tr>
  );
};

export default SingleAdminListing;
