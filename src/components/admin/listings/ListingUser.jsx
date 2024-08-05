import React, { useEffect, useState } from "react";
import "./listingUser.css";
import Box from "../common/Box";
import SectionTitle from "../common/SectionTitle";
import FormPair from "../common/FormPair";
import Select from "../../ui/Select";
import Lable from "../common/Lable";
import useProvideState from "../../../hooks/useProvideState";
import useNetwork from "../../../hooks/useNetwork";
const ListingUser = ({ onUserChange, user }) => {
  const [listingUser, setListingUser] = useState([]);
  const { useSelector, dispatch } = useProvideState();
  const { apiData, httpAction } = useNetwork();
  const { getUserName } = apiData();

  useEffect(() => {
    const getListingUser = async () => {
      const result = await dispatch(httpAction(getUserName()));
      console.log(result);
      if (result?.status) {
        setListingUser(
          result?.list?.map((item) => {
            return { title: item?.data?.user_name };
          })
        );
      }
    };
    getListingUser();
  }, []);

  return (
    <Box bg="white" padding="1rem" radius="10px">
      <div className="listing_user_main">
        <SectionTitle title="Select User" bottom="1rem" />
        <div className="listing_user_container">
          <FormPair>
            <Lable>User</Lable>
            <Select
              name="user"
              value={user}
              onChange={onUserChange}
              options={listingUser}
            />
          </FormPair>
        </div>
      </div>
    </Box>
  );
};

export default ListingUser;
