import React, { useEffect, useState } from "react";
import "./anamties.css";
import Box from "../common/Box";
import SectionTitle from "../common/SectionTitle";
import SingleAmanty from "./SingleAmanty";
import { Modal } from "react-bootstrap";
import Input from "../../ui/Input";
import FormPair from "../common/FormPair";
import Lable from "../common/Lable";
import Button from "../../ui/Button";
import useNetwork from "../../../hooks/useNetwork";
import useProvideState from "../../../hooks/useProvideState";
import MultiPair from "../common/MultiPair";
import toast from "react-hot-toast";
const Anamties = ({ onFeatureChange, setFeatures, features }) => {
  const [isOpenAmenity, setIsOpenAmenity] = useState(false);
  const [amenityTitle, setAmenityTitle] = useState("");
  const { apiData, httpAction } = useNetwork();
  const { dispatch } = useProvideState();
  const { addAmenty, getAmenityList } = apiData();
  const [amenities, setAmenities] = useState([]);

  useEffect(() => {
    async function getAmenty() {
      const result = await dispatch(httpAction(getAmenityList()));
      if (result?.status) {
        setAmenities(result?.list);
      }
    }

    getAmenty();
  }, []);

  const changeAmenity = (event) => {
    setAmenityTitle(event.target.value);
  };

  const submitAmenity = async () => {
    if (!amenityTitle || amenityTitle.trim().length === 0) {
      return;
    }

    const result = await dispatch(httpAction(addAmenty(amenityTitle)));
    if (result?.status) {
      toast.success(result?.message);
      setIsOpenAmenity(false);
      setAmenityTitle("");
      setAmenities((prevAmen) => [...prevAmen, result?.amenty]);
    }
  };

  const closeAmenityModel = (type) => {
    if (type === "open") {
      setIsOpenAmenity(true);
    } else {
      setIsOpenAmenity(false);
      setAmenityTitle("");
    }
  };

  return (
    <Box bg="white" padding="1.6rem" radius="10px">
      <Modal
        show={isOpenAmenity}
        onHide={() => closeAmenityModel("close")}
        centered
      >
        <Modal.Header closeButton>Add New Amenity</Modal.Header>
        <Modal.Body>
          <MultiPair>
            <FormPair>
              <Lable>Amenity Title</Lable>
              <Input
                value={amenityTitle}
                onChange={changeAmenity}
                type="text"
                placeholder="type here..."
                name="amenity_title"
              />
            </FormPair>
            <Button type="button" onClick={submitAmenity}>
              Add
            </Button>
          </MultiPair>
        </Modal.Body>
      </Modal>

      <div className="anamties_main">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <SectionTitle title="Feature and Amenities" bottom="1rem" />
          <span
            style={{
              fontSize: "14px",
              color: "seagreen",
              cursor: "pointer",
              padding: "0.4rem",
              border: "1px solid seagreen",
              borderRadius: "6px",
              fontWeight: "500",
            }}
            onClick={() => closeAmenityModel("open")}
          >
            Add New Amenity ?
          </span>
        </div>
        <div className="amanty_feature_container">
          <div>
            {amenities?.map((item, index) => (
              <SingleAmanty
                features={features}
                setFeatures={setFeatures}
                index={index}
                onFeatureChange={onFeatureChange}
                title={item?.title}
                key={index}
              />
            ))}
          </div>
          {/* <div>
            {getCommunityFeatures().map((item, index) => (
              <SingleAmanty
                features={features}
                setFeatures={setFeatures}
                index={index}
                onFeatureChange={onFeatureChange}
                title={item?.title}
                key={index}
              />
            ))}
          </div> */}
        </div>
      </div>
    </Box>
  );
};

export default Anamties;

function getMainFetures() {
  return [
    { title: "Furnished" },
    { title: "Drawing Room" },
    { title: "Study Room" },
    { title: "Powder Room" },
    { title: "Steam Room" },
    { title: "Laundry Room" },
    { title: "Servant Quarter" },
    { title: "Store Room" },
  ];
}

function getCommunityFeatures() {
  return [
    { title: "Community Gym" },
    { title: "Community Swimming Pool" },
    { title: "Mosque" },
    { title: "School" },
    { title: "Market" },
    { title: "Hospital" },
  ];
}
