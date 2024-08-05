import React, { useEffect, useRef, useState } from "react";
import "./listingImages.css";
import Box from "../common/Box";
import SectionText from "../common/SectionTitle";
import FormPair from "../common/FormPair";
import useProvideState from "../../../hooks/useProvideState";
import { CircularProgress } from "@mui/material";
import useNetwork from "../../../hooks/useNetwork";
import { MdOutlineCloudUpload, MdOutlineCancel } from "react-icons/md";

const ListingImages = ({
  selectedFiles,
  setSelectedFiles,
  setFilePath,
  filePath,
}) => {
  const imageRef = useRef();
  const [preview, setPreview] = useState(filePath ? filePath : []);
  const { useSelector } = useProvideState();
  const isLoading = useSelector((state) => state.ui.isLoading);

  const changeImages = async (event) => {
    const imageRemainCount = 6 - filePath?.length;
    let slicedFiles;
    if (imageRemainCount > 0) {
      slicedFiles = Array.from(event.target.files)?.slice(0, imageRemainCount);
    } else {
      slicedFiles = Array.from(event.target.files)?.slice(0, 6);
    }

    setSelectedFiles(slicedFiles);
    slicedFiles.map((file) => {
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        formateFile(event.target.result);
      };

      fileReader.readAsDataURL(file);
    });

    function formateFile(file) {
      setPreview((prevPreview) => [...prevPreview, file]);
    }
  };

  const handleOpenImage = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  const handleImageDelete = (index) => {
    const updatesImages = [...selectedFiles];
    const updatedPreview = [...preview];
    updatedPreview.splice(index, 1);
    setPreview(updatedPreview);
    updatesImages.splice(index, 1);
    setSelectedFiles(updatesImages);
    const updatedFilePath = [...filePath];
    updatedFilePath.splice(index, 1);
    setFilePath(updatedFilePath);
  };

  return (
    <Box bg="white" radius="12px" padding="1rem">
      <div className="listing_images_main">
        <SectionText bottom="1rem" title="Upload Images" />

        <div className="listing_images_container">
          <FormPair>
            <div onClick={handleOpenImage} className="listing_images_opner">
              <MdOutlineCloudUpload className="listing_images_icon" />
              <span className="listing_images_upload_tag">Uplaod</span>
              <input
                onChange={changeImages}
                ref={imageRef}
                style={{ display: "none" }}
                type="file"
                multiple
                accept="image/jpg,image/png,image/jpeg"
              />
            </div>
          </FormPair>
        </div>
      </div>

      <div className="listing_images_uploaded_container">
        {preview?.map((file, index) => {
          return (
            <div className="listing_images_image_container" key={index}>
              <img className="listing_images_uploaded_img" src={file} />
              {!isLoading && (
                <MdOutlineCancel
                  onClick={() => handleImageDelete(index)}
                  className="listing_images_delete_icon"
                />
              )}
              {isLoading && (
                <p className="img_loading_spinner">
                  <CircularProgress color="success" />
                </p>
              )}
            </div>
          );
        })}
      </div>
    </Box>
  );
};

export default ListingImages;
