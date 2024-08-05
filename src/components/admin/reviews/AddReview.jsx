import React, { useRef, useState } from "react";
import "./addReview.css";
import Box from "../common/Box";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import SectionTitle from "../common/SectionTitle";
import MultiPair from "../common/MultiPair";
import Button from "../../ui/Button";
import useNetwork from "../../../hooks/useNetwork";
import useProvideState from "../../../hooks/useProvideState";
import { CircularProgress } from "@mui/material";
import toast from "react-hot-toast";
const AddReview = ({ onSaveReview }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [reviewLoading, setReviewLoa] = useState(false);
  const imgRef = useRef(null);
  const { apiData, httpAction } = useNetwork();
  const { dispatch } = useProvideState();
  const { addReview, uploadImages } = apiData();
  const nameChange = (event) => {
    setName(event.target.value);
  };

  const messageChange = (event) => {
    setMessage(event.target.value);
  };

  const imageChange = async (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      setPreview(event.target.result);
    };

    fileReader.readAsDataURL(file);
    setImageLoading(true);
    const result = await dispatch(httpAction(uploadImages([file])));
    if (result?.status) {
      setImage(result?.savedGalary?.image[0]);
    }
    setImageLoading(false);
  };

  const imgClickHandler = () => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  };

  const submitHandler = async () => {
    const validation = {
      review_user_name: name,
      review_user_message: message,
    };

    for (let key in validation) {
      if (validation[key] === "" || validation[key] === undefined) {
        const element = document.getElementsByName(key)[0];
        element.focus();
        element.style.borderColor = "red";
        toast.error(`${key.replace(/_/g, " ")} is required`);
        return;
      }
    }

    if (!image) {
      toast.error("user image is required");
      return;
    }
    setReviewLoa(true);
    const result = await dispatch(
      httpAction(addReview({ name, message, image }))
    );
    if (result?.status) {
      toast.success(result?.message);
      onSaveReview(result?.review);
      setName("");
      setMessage("");
      setPreview(null);
      setImage(null);
    }
    setReviewLoa(false);
  };
  return (
    <div className="admin_add_review_main">
      <Box bg="white" padding="1rem" radius="1rem">
        <SectionTitle bottom="1rem" title="Add New Review" />
        <MultiPair>
          <div className="admin_add_review_user_detail">
            <div className="admin_review_user_name">
              <Input
                name="review_user_name"
                value={name}
                onChange={nameChange}
                type="text"
                placeholder="Enter user name"
              />
            </div>
            <div
              onClick={imgClickHandler}
              className="admin_review_img_container"
            >
              {!preview && (
                <span className="admin_review_user_img_tag">upload image</span>
              )}
              {imageLoading && (
                <span className="admin_review_add_loading">
                  <CircularProgress color="secondary" />
                </span>
              )}
              <input
                type="file"
                accept="image/png,image/jpeg,image/jpeg"
                onChange={imageChange}
                style={{ display: "none" }}
                ref={imgRef}
              />
              <img src={preview} className="admin_review_user_img" />
            </div>
          </div>
          <div className="admin_review_message_container">
            <TextArea
              name="review_user_message"
              placeholder="Type review here..."
              onChange={messageChange}
              value={message}
              row={5}
            />
          </div>
          <div className="admin_review_add_action">
            <Button onClick={submitHandler} type="button">
              {reviewLoading ? "Saving..." : "Add Review"}
            </Button>
          </div>
        </MultiPair>
      </Box>
    </div>
  );
};

export default AddReview;
