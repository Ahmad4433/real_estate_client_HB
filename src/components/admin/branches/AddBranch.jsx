import React, { useRef, useState } from "react";
import FormPair from "../common/FormPair";
import Box from "../common/Box";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { MdCloudUpload } from "react-icons/md";
import SectionTitle from "../common/SectionTitle";
import Lable from "../common/Lable";
import { Switch, Skeleton } from "@mui/material";
import useNetwork from "../../../hooks/useNetwork";
import useProvideState from "../../../hooks/useProvideState";
import "./addBranch.css";
import toast from "react-hot-toast";
const AddBranch = () => {
  const { dispatch } = useProvideState();
  const { apiData, httpAction } = useNetwork();
  const { uploadImages, addBranch } = apiData();

  const [branch, setBranch] = useState("");
  // const [feature, setFeature] = useState(false);
  const [file, setFile] = useState(null);
  const [imgLoading, setImgLoading] = useState(false);

  const fileRef = useRef();

  const fileChange = async (event) => {
    setImgLoading(true);
    const result = await dispatch(
      httpAction(uploadImages([event.target.files[0]]))
    );
    if (result?.status) {
      setFile(result?.savedGalary?.image[0]);
    }
    setImgLoading(false);
  };

  const branchChange = (event) => {
    setBranch(event.target.value);
  };

  // const featureChage = (event) => {
  //   setFeature(event.target.value);
  // };

  const fileClick = () => {
    setFile(null);
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const submitHandler = async () => {
    if (!branch || branch.trim().length === 0) {
      toast.error("branch name is required");
      return;
    }

    const result = await dispatch(httpAction(addBranch({ branch, file })));

    if (result?.status) {
      setBranch("");
      setFile(null);
      toast.success(result?.message);
    }
  };

  return (
    <div className="add_branch_main">
      <Box padding="1rem" bg="white" radius="1rem">
        <SectionTitle title="Add New Branch" bottom="1rem" />
        <div className="add_branch_container">
          <div className="add_branch_input_section">
            <FormPair>
              <Lable>Branch Name</Lable>
              <Input
                name="branch"
                value={branch}
                onChange={branchChange}
                type="text"
                placeholder="type here..."
              />
            </FormPair>
            <div className="add_branch_actions">
              {/* <div className="add_branch_feature">
                <span>Make it feature ?</span>
                <Switch checked={feature} onChange={featureChage} />
              </div> */}
              <Button onClick={submitHandler}>Add Branch</Button>
            </div>
          </div>
          <FormPair>
            <Lable>Image</Lable>
            <div onClick={fileClick} className="add_branch_media">
              {imgLoading && (
                <Skeleton
                  height="100%"
                  variant="rectangular"
                  width="100%"
                ></Skeleton>
              )}
              {!file && !imgLoading && (
                <div className="add_branch_media_icons">
                  <MdCloudUpload className="add_branch_upload" />
                  <span className="add_branch_upload_tag">Upload Image</span>
                </div>
              )}
              {file && <img src={file} className="add_branch_image" />}
              <input
                ref={fileRef}
                onChange={fileChange}
                type="file"
                style={{ display: "none" }}
                accept="image/png,image/jpeg,image/jpg"
              />
            </div>
          </FormPair>
        </div>
      </Box>
    </div>
  );
};

export default AddBranch;
