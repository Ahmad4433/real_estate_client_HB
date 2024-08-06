import React, { useRef, useState, useEffect } from "react";
import Box from "../common/Box";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import Button from "../../ui/Button";
import FormPair from "../common/FormPair";
import SectionTitle from "../common/SectionTitle";
import Lable from "../common/Lable";
import MultiPair from "../common/MultiPair";
import { Rating } from "@mui/material";
import "./addTeam.css";
import toast from "react-hot-toast";
import useNetwork from "../../../hooks/useNetwork";
import useProvideState from "../../../hooks/useProvideState";
import useScrollTop from "../../../hooks/useScrollTop";
import { listingSliceAction } from "../../../store/listing-slice";
const AddTeam = ({ onAddTeam, onUpdateTeam }) => {
  const { dispatch, useSelector } = useProvideState();
  const scrollTop = useScrollTop();
  const userDoc = useSelector((state) => state.listing.updateUser);
  const [loading, setLoading] = useState(false);
  const profileRef = useRef(null);
  const [profile, setProfile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [user_name, setUser_name] = useState();
  const [mobile, setMobile] = useState();
  const [whatsapp, setWhatsapp] = useState();
  const [user_email, setUser_email] = useState();
  const [facebook, setFacebook] = useState();
  const [insta, setInsta] = useState();
  const [tiktok, setTiktok] = useState();
  const [youtube, setYoutube] = useState();
  const [user_detail, setUser_detail] = useState();
  const [rating, setRating] = useState(1);

  const { apiData, httpAction } = useNetwork();
  const { addNewUser, uploadImages, updateUser } = apiData();

  const nameChage = (event) => {
    setUser_name(event.target.value);
  };

  const mobileChange = (event) => {
    setMobile(event.target.value);
  };

  const whatsappChange = (event) => {
    setWhatsapp(event.target.value);
  };

  const emailChange = (event) => {
    setUser_email(event.target.value);
  };

  const facebookChange = (event) => {
    setFacebook(event.target.value);
  };

  const instaChange = (event) => {
    setInsta(event.target.value);
  };

  const youtubeChange = (event) => {
    setYoutube(event.target.value);
  };

  const tiktokChange = (event) => {
    setTiktok(event.target.value);
  };

  const ratingChange = (event) => {
    setRating(event.target.value);
  };

  const detailChange = (event) => {
    setUser_detail(event.target.value);
  };

  useEffect(() => {
    if (userDoc.data) {
      setPreview(userDoc.data && userDoc?.data?.profile);
      setUser_name(userDoc.data && userDoc?.data?.user_name);
      setFacebook(userDoc.data && userDoc?.data?.facebook);
      setMobile(userDoc.data && userDoc.data.mobile);
      setWhatsapp(userDoc.data && userDoc.data.whatsapp);
      setTiktok(userDoc.data && userDoc.data.tiktok);
      setYoutube(userDoc.data && userDoc.data.youtube);
      setInsta(userDoc.data && userDoc.data.insta);
      setRating(userDoc.data && parseFloat(userDoc.data.rating));
      setUser_detail(userDoc.data && userDoc.data.user_detail);
      setUser_email(userDoc.data && userDoc.data.user_email);
      setProfile(userDoc.data && userDoc.data.profile);
    }
  }, [userDoc]);

  const profileChange = async (event) => {
    const fileReader = new FileReader();

    fileReader.onload = (event) => {
      setPreview(event.target.result);
    };

    fileReader.readAsDataURL(event.target.files[0]);

    const result = await dispatch(
      httpAction(uploadImages(Array.from(event.target.files)))
    );

    if (result?.status) {
      setProfile(result?.savedGalary.image[0]);
    }
  };

  const profileUploadHandler = () => {
    if (profileRef.current) {
      profileRef.current.click();
    }
  };

  const submitHandler = async (event) => {
    const data = {
      user_name,
      mobile,
      whatsapp: whatsapp && whatsapp.replace(/^0/, "+92"),
      facebook,
      insta,
      youtube,
      tiktok,
      user_email,
      rating,
      user_detail,
      profile,
    };

    if (!validateNewUser(data)) return;

    let result;
    setLoading(true);
    if (userDoc.data) {
      result = await dispatch(httpAction(updateUser(data, userDoc?._id)));
      result?.status && onUpdateTeam(result?.savedUser);
    } else {
      result = await dispatch(httpAction(addNewUser(data)));
      result?.status && onAddTeam(result?.savedUser);
    }

    if (result?.status) {
      setLoading(false);
      dispatch(listingSliceAction.setUpdateUser({}));
      toast.success(result?.message);
      scrollTop();
      setFacebook("");
      setInsta("");
      setMobile("");
      setProfile("");
      setPreview("");
      setRating(1);
      setTiktok("");
      setUser_detail("");
      setUser_email("");
      setUser_name("");
      setWhatsapp("");
      setYoutube("");
    }

    // const formatredData = Object.fromEntries(
    //   Object.entries(data).filter(([key, value]) => {
    //     return key !== "rating";
    //   })
    // );

    // for (let key in formatredData) {
    //   document.getElementsByName(key)[0].style.borderColor = "#ccc";
    // }
  };

  return (
    <div className="add_team_main">
      <Box bg="white" radius="1rem" padding="1rem">
        <SectionTitle title="User Profile" bottom="1rem" />

        <div className="admin_create_user_profile_container">
          <div
            onClick={profileUploadHandler}
            className="admin_create_user_upload_profile"
          >
            <img src={preview} className="admin_create_user_profile_img" />
            <input
              name="profile"
              onChange={profileChange}
              ref={profileRef}
              type="file"
              style={{ display: "none" }}
              accept="image/jpg,image/png,image/jpeg"
            />
            {!preview && (
              <span className="team_upload_profile_tag">Upload Profile</span>
            )}
          </div>
        </div>
      </Box>

      <Box bg="white" radius="1rem" padding="1.4rem">
        <SectionTitle bottom="1rem" title="create new user" />

        <div className="admin_create_user_container">
          <FormPair>
            <Lable>Name</Lable>
            <Input
              onChange={nameChage}
              value={user_name}
              type="text"
              name="user_name"
              placeholder="User name..."
            />
          </FormPair>
          <FormPair>
            <Lable>Mobile</Lable>
            <Input
              onChange={mobileChange}
              value={mobile}
              type="number"
              placeholder="Mobile number..."
              name="mobile"
            />
          </FormPair>
          <FormPair>
            <Lable>WhatsApp</Lable>
            <Input
              onChange={whatsappChange}
              value={whatsapp}
              type="number"
              placeholder="Whatsapp..."
              name="whatsapp"
            />
          </FormPair>
        </div>
      </Box>
      <Box bg="white" radius="1rem" padding="1.4rem">
        <SectionTitle bottom="1rem" title="social detail" />
        <div className="admin_create_user_container">
          <FormPair>
            <Lable>Facebook Account URL</Lable>
            <Input
              onChange={facebookChange}
              value={facebook}
              type="url"
              placeholder="Paste URL"
              name="facebook"
            />
          </FormPair>
          <FormPair>
            <Lable>Insta Account URL</Lable>
            <Input
              onChange={instaChange}
              value={insta}
              type="url"
              placeholder="Paste URL"
              name="insta"
            />
          </FormPair>
          <FormPair>
            <Lable>youtube Account URL</Lable>
            <Input
              onChange={youtubeChange}
              value={youtube}
              type="url"
              placeholder="Paste URL"
              name="youtube"
            />
          </FormPair>
          <FormPair>
            <Lable>Tiktok Account URL</Lable>
            <Input
              onChange={tiktokChange}
              value={tiktok}
              type="url"
              placeholder="Paste URL"
              name="tiktok"
            />
          </FormPair>
          <FormPair>
            <Lable>Email</Lable>
            <Input
              type="text"
              placeholder="Email..."
              onChange={emailChange}
              value={user_email}
              name="user_email"
            />
          </FormPair>
        </div>
      </Box>
      <Box bg="white" radius="1rem" padding="1.4rem">
        <SectionTitle bottom="1rem" title="About User" />
        <div className="admin_create_user_container">
          <FormPair>
            <Lable>Default Rating</Lable>
            <Rating
              onChange={ratingChange}
              defaultValue={rating}
              size="small"
            />
          </FormPair>
          <FormPair>
            <Lable>User Detail</Lable>
            <TextArea
              onChange={detailChange}
              value={user_detail}
              row={10}
              name="user_detail"
              placeholder="Description"
            />
          </FormPair>
        </div>
        <div className="admin_create_user_action">
          <Button onClick={submitHandler}>
            {loading ? "Loading..." : "Create User"}
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default AddTeam;

function validateNewUser(data) {
  for (const key in data) {
    if (data[key] === "" || data[key] === null || data[key] === undefined) {
      toast.error(`${key} is required`);
      const element = document.getElementsByName(key)[0];
      if (element) {
        element.focus();
      }
      return false;
    }
  }
  return true;
}
