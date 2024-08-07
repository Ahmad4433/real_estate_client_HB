import React from "react";
import "./propertyTitle.css";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import Box from "../common/Box";
import SectionTitle from "../common/SectionTitle";
import Lable from "../common/Lable";
import TextEditor from "../common/TextEditor";

const PropertyTitle = ({
  onTitleChange,
  onDetailChange,
  title,
  detail,
  setDetail,
}) => {
  return (
    <>
      <Box bg="white" padding="1.6rem" radius="10px">
        <SectionTitle title="Create Listing" />
        <div className="admin_add_listing_pair">
          <Lable>Title</Lable>
          <Input
            name="title"
            value={title}
            onChange={onTitleChange}
            type="text"
            placeholder="Property Title"
          />
        </div>
        <div className="admin_add_listing_pair">
          <Lable>Detail</Lable>
          {/* <TextArea
            name='detail'
            value={detail}
            onChange={onDetailChange}
            type="text"
            placeholder="Property Detail"
            row={10}
     
          /> */}
          <TextEditor data={detail} setData={setDetail} />
        </div>
      </Box>
    </>
  );
};

export default PropertyTitle;
