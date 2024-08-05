import React from "react";
import "./propertyTitle.css";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import Box from "../common/Box";
import SectionTitle from "../common/SectionTitle";
import Lable from "../common/Lable";

const PropertyTitle = ({ onTitleChange, onDetailChange, title, detail }) => {



  return (
    <>
      <Box bg="white" padding="1.6rem" radius="10px">
        <SectionTitle title="Create Listing" />
        <div className="admin_add_listing_pair">
          <Lable>Title</Lable>
          <Input
            name='title'
            value={title}
            onChange={onTitleChange}
            type="text"
            placeholder="Property Title"
          
          />
        </div>
        <div className="admin_add_listing_pair">
          <Lable>Detail</Lable>
          <TextArea
            name='detail'
            value={detail}
            onChange={onDetailChange}
            type="text"
            placeholder="Property Detail"
            row={10}
     
          />
        </div>
      </Box>
    </>
  );
};

export default PropertyTitle;
