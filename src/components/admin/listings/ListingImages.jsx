import React, { useRef, useState } from "react";
import "./listingImages.css";
import Box from "../common/Box";
import SectionText from "../common/SectionTitle";
import FormPair from "../common/FormPair";
import { MdOutlineCloudUpload, MdOutlineCancel } from "react-icons/md";

const ListingImages = () => {
  const imageRef = useRef();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [preview, setPreview] = useState([]);

  const changeImages = (event) => {
    const slicedFiles = Array.from(event.target.files)?.slice(0, 6);

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
              <MdOutlineCancel className="listing_images_delete_icon" />
            </div>
          );
        })}
      </div>
    </Box>
  );
};

export default ListingImages;
