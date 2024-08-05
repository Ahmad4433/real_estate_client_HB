import React, { useEffect, useState } from "react";
import "./getAllListing.css";
import useNetwork from "../../../hooks/useNetwork";
import useProvideState from "../../../hooks/useProvideState";
import SingleAdminListing from "./SingleAdminListing";

const GetAllListings = () => {
  const { dispatch, useSelector } = useProvideState();
  const { apiData, httpAction } = useNetwork();
  const { getAllListings } = apiData();
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getListings = async () => {
      setIsLoading(true);
      const result = await dispatch(httpAction(getAllListings()));
      if (result?.status) {
        setListings(result?.list);
      }
      setIsLoading(false);
    };
    getListings();
  }, []);

  return (
    <table className="table_admin_listings">
      <thead>
        <tr className="tabel_admin_listings_header">
          <th>image</th>
          <th>title</th>
          <th>area</th>
          <th>type</th>
          <th>purpose</th>
          <th>price</th>
          <th>date</th>
          <th>agent</th>
          <th>Branch</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        {listings?.map((item, index) => (
          <SingleAdminListing
            data={listings}
            setData={setListings}
            key={index}
            index={index}
            listing={item}
          />
        ))}
      </tbody>
    </table>
  );
};

export default GetAllListings;
