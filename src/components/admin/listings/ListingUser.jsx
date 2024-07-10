import React from "react";
import "./listingUser.css";
import Box from "../common/Box";
import SectionTitle from "../common/SectionTitle";
import FormPair from "../common/FormPair";
import Select from "../../ui/Select";
import Lable from "../common/Lable";
const ListingUser = ({ onUserChange }) => {
  const listingUser = [
    { title: "Hamza" },
    { title: "Ali" },
    { title: "Hamza" },
    { title: "Hamza" },
    { title: "Hamza" },
  ];

  return (
    <Box bg="white" padding="1rem" radius="10px">
      <div className="listing_user_main">
        <SectionTitle title="Select User" bottom="1rem" />
        <div className="listing_user_container">
          <FormPair>
            <Lable>User</Lable>
            <Select onChange={onUserChange} options={listingUser} />
          </FormPair>
        </div>
      </div>
    </Box>
  );
};

export default ListingUser;
