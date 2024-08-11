import React, { useEffect, useState } from "react";
import "./addlisting.css";
import PageTitle from "../common/PageTitle";
import PropertyTitle from "./PropertyTitle";
import PropertyType from "./PropertyType";
import ListingBranch from "./ListingBranch";
import PricingArea from "./PricingArea";
import Anamties from "./Anamties";
import ListingImages from "./ListingImages";
import ListingUser from "./ListingUser";
import ListingYtVideo from "./ListingYtVideo";
import Button from "../../ui/Button";
import useNetwork from "../../../hooks/useNetwork";
import useOnchange from "../../../hooks/useOnchange";
import useProvideState from "../../../hooks/useProvideState";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { listingSliceAction } from "../../../store/listing-slice";
import { MdEditCalendar } from "react-icons/md";
const AddListing = () => {
  const { apiData, httpAction } = useNetwork();
  const { uploadImages, addListing } = apiData();
  const { dispatch, useSelector } = useProvideState();
  const navigate = useNavigate();

  const editListing = useSelector((state) => state.listing.updateDoc);
  // state for features
  const [listingFeatures, setListigFeatures] = useState(
    editListing
      ? editListing?.data?.listingFeatures?.length > 0
        ? editListing?.data?.listingFeatures
        : []
      : []
  );

  // state to store user selected images
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isFileDel, setIsFileDel] = useState(false);
  const [filePath, setFilePath] = useState(
    editListing && editListing.galary?.length > 0 ? editListing?.galary : []
  );

  // change handlers
  const { onChangeHandler: branchChange, value: branch } = useOnchange(
    editListing && editListing.data ? editListing?.data?.branch : ""
  );
  const { onChangeHandler: typeChange, value: type } = useOnchange(
    editListing && editListing.data ? editListing?.data?.type : "home"
  );
  const { onChangeHandler: purposeChange, value: purpose } = useOnchange(
    editListing && editListing.data ? editListing?.data?.purpose : "sale"
  );
  const { onChangeHandler: videoUrlChange, value: videoUrl } = useOnchange(
    editListing && editListing.data ? editListing?.data?.videoUrl : ""
  );
  const { onChangeHandler: userChange, value: user } = useOnchange(
    editListing && editListing.data ? editListing?.user?.data?.user_name : ""
  );
  const { onChangeHandler: priceChange, value: price } = useOnchange(
    editListing && editListing.data ? editListing?.data?.price : null
  );
  const { onChangeHandler: areaChange, value: area } = useOnchange(
    editListing && editListing.data ? editListing?.data?.area : null
  );
  const { onChangeHandler: unitChange, value: unit } = useOnchange(
    editListing && editListing.data ? editListing?.data?.unit : "marla"
  );
  const { onChangeHandler: titleChange, value: title } = useOnchange(
    editListing && editListing.data ? editListing?.data?.title : null
  );
  // const { onChangeHandler: detailChange, value: detail } = useOnchange(
  //   editListing && editListing.data && editListing?.data?.detail
  // );

  const [detail, setDetail] = useState("");

  const { onChangeHandler: featureChange, value: feature } = useOnchange(
    editListing && editListing.data && editListing?.data?.features
  );
  const { onChangeHandler: addressChange, value: address } = useOnchange(
    editListing && editListing.data && editListing?.data?.address
  );
  const { onChangeHandler: bedsChange, value: beds } = useOnchange(
    editListing && editListing.data && editListing?.data?.beds
  );
  const { onChangeHandler: bathsChange, value: baths } = useOnchange(
    editListing && editListing.data && editListing?.data?.baths
  );
  const { onChangeHandler: changeCategory, value: category } = useOnchange(
    editListing && editListing.data ? editListing?.data?.category : "house"
  );

  async function uploadGalary() {
    // console.log(selectedFiles, "from galary");
    const result = await dispatch(httpAction(uploadImages(selectedFiles)));
    // console.log(result,'from listing image')
    console.log(result)
    if (result?.status) {
      setSelectedFiles([]);
      setFilePath((prevPath) => [...prevPath,...result?.savedGalary.image]);
    }
  }

  useEffect(() => {
    if (selectedFiles?.length > 0 && !isFileDel) {
      uploadGalary();
    }
  }, [selectedFiles]);

  const listingPublishHandler = async (event) => {
    event.preventDefault();
    const data = {
      branch,

      address,
      type,
      purpose,
      category,
      title,
      detail,
      price: parseFloat(price),
      beds,
      baths,
      area,
      videoUrl,
      user,
      unit,
      listingFeatures,
    };

    if (!validateListing(data)) return;
    if (!validateListinFeatures(listingFeatures)) return;
    if (!validateListingImages(filePath)) return;
    let status;
    if (editListing?.data) {
      status = "update";
    } else {
      status = "add";
    }
    const result = await dispatch(
      httpAction(addListing(data, filePath, status, editListing?._id))
    );

    if (result?.status) {
      dispatch(listingSliceAction.setUpdateDoc({}));
      navigate("/admin/listings");
    }
  };

  return (
    <div className="admin_add_listing_main">
      <div className="admin_listing_add_container">
        <div>
          <PageTitle title="Add New Property" />
        </div>
        <form onSubmit={listingPublishHandler}>
          <div className="admin_add_listing_form_container">
            <div className="admin_add_listing_bar">
              <ListingBranch
                branch={branch}
                onAddressChange={addressChange}
                address={address}
                onBranchChange={branchChange}
              />
              <PropertyType
                onChangeCategory={changeCategory}
                category={category}
                onPurposeChange={purposeChange}
                onTypeChange={typeChange}
                type={type}
                purpose={purpose}
              />
              <ListingImages
                setIsFileDel={setIsFileDel}
                setFilePath={setFilePath}
                filePath={filePath}
                selectedFiles={selectedFiles}
                setSelectedFiles={setSelectedFiles}
              />
              <ListingYtVideo url={videoUrl} onUrlChange={videoUrlChange} />
              <ListingUser user={user} onUserChange={userChange} />
            </div>
            <div className="admin_add_listing_area">
              <PropertyTitle
                title={title}
                detail={detail}
                onTitleChange={titleChange}
                // onDetailChange={detailChange}
                setDetail={setDetail}
              />
              <PricingArea
                beds={beds}
                onBedChange={bedsChange}
                baths={baths}
                onBathChange={bathsChange}
                area={area}
                price={price}
                onPriceChange={priceChange}
                onUnitChange={unitChange}
                onAreaChange={areaChange}
              />
              <Anamties
                features={listingFeatures}
                setFeatures={setListigFeatures}
                onFeatureChange={featureChange}
              />
            </div>
          </div>
          <div className="admin_add_listing_save_action">
            <Button type="submit">Publish</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListing;

function validateListing(data) {
  for (const key in data) {
    if (data[key] === "" && key !== "videoUrl") {
      if (data[key] === "" || data[key] === null || data[key] === undefined) {
        toast.error(`${key} is required`);
        if (key !== "detail" && key !== "videoUrl") {
          const elenet = document.getElementsByName(key)[0];
          elenet.focus();
        }

        return false;
      }
    }
  }
  return true;
}

function validateListinFeatures(data) {
  if (data.length === 0) {
    toast.error("please select features");

    return false;
  } else {
    return true;
  }
}

function validateListingImages(images) {
  if (images.length === 0) {
    toast.error("please choice images");
    return false;
  } else {
    return true;
  }
}
