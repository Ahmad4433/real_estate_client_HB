import React, { useEffect, useState } from "react";
import Box from "../common/Box";
import SectionTitle from "../common/SectionTitle";
import Select from "../../ui/Select";
import "./listingBranch.css";
import FormPair from "../common/FormPair";
import Lable from "../common/Lable";
import TextArea from "../../ui/TextArea";
import useProvideState from "../../../hooks/useProvideState";
import useNetwork from "../../../hooks/useNetwork";
const ListingBranch = ({
  onBranchChange,
  onAddressChange,
  address,
  branch,
}) => {
  const { dispatch } = useProvideState();
  const { apiData, httpAction } = useNetwork();
  const { getBranchList } = apiData();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const result = await dispatch(httpAction(getBranchList()));

      if (result?.status) {
        const formatedList = result?.list?.map((item) => {
          return {
            title: item?.data?.branch,
          };
        });
        setOptions(formatedList);
      }
    };

    getList();
  }, []);

  return (
    <Box bottom="2rem" padding="1.4rem" radius="12px" bg="white">
      <div className="admin_listing_branch_main">
        <SectionTitle title="Select Branch" />
        <Select value={branch} onChange={onBranchChange} name='branch' options={options} />
        <FormPair>
          <Lable>Address</Lable>
          <TextArea
            name="address"
            value={address}
            onChange={onAddressChange}
            row={5}
            placeholder="Type Address..."
          />
        </FormPair>
      </div>
    </Box>
  );
};

export default ListingBranch;
