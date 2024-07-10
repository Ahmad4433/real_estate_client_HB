import React from "react";
import Box from "../common/Box";
import SectionTitle from "../common/SectionTitle";
import Select from "../../ui/Select";
import "./listingBranch.css";
const ListingBranch = ({ onBranchChange }) => {
  const options = [{ title: "bahria" }, { title: "al kabir town" }];

  return (
    <Box bottom="2rem" padding="1.4rem" radius="12px" bg="white">
      <div className="admin_listing_branch_main">
        <SectionTitle title="Select Branch" />
        <Select onChange={onBranchChange} options={options} />
      </div>
    </Box>
  );
};

export default ListingBranch;
