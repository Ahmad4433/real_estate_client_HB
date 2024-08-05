import React, { useEffect, useState } from "react";
import "./heroFilter.css";
import Select from "../../ui/Select";
import { useNavigate } from "react-router-dom";
import useProvideState from "../../../hooks/useProvideState";
import { filterActions } from "../../../store/search-filter";
import useNetwork from "../../../hooks/useNetwork";
import getFixDropdown from "../../../utils/getFixDropdown";
import { modalActions } from "../../../store/model-slice";
const HeroFilter = () => {
  const [area, setArea] = useState("");
  const [purpose, setPurpose] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [unit, setUnit] = useState("");
  const [areaOption, setAreaOption] = useState([]);
  const [branchOption, setBranchOption] = useState([]);
  const [btnDisbale, setBtnDisable] = useState(true);
  const navigate = useNavigate();
  const { propertyTypes } = getFixDropdown();
  const { apiData, httpAction } = useNetwork();
  const { getAreaList, getBranchList } = apiData();
  const { dispatch } = useProvideState();
  const purposeChange = (event) => {
    setPurpose(event.target.value);
  };
  const typeChange = (event) => {
    setType(event.target.value);
  };
  const areaChange = (event) => {
    setArea(event.target.value);
  };
  const locationChange = (event) => {
    setLocation(event.target.value);
  };

  useEffect(() => {
    const getArea = async () => {
      const result = await dispatch(httpAction(getAreaList()));
      if (result?.status) {
        setAreaOption(result?.list);
      }

      const branchResult = await dispatch(httpAction(getBranchList()));

      if (branchResult?.status) {
        const transFormList = branchResult?.list?.map((item) => {
          return {
            title: item?.data?.branch,
          };
        });
        setBranchOption(transFormList);
      }
    };
    getArea();
  }, []);

  const optionsForPurpose = [{ title: "sale" }, { title: "rent" }];

  useEffect(() => {
    if (purpose || type || location || area) {
      setBtnDisable(false);
    }
  }, [purpose, location, area, type]);

  const searchHandler = () => {
    let filter = {
      "data.purpose": purpose,
      "data.type": type,
      "data.area": area.split(" ")[0],
      "data.branch": location,
    };
    if (!purpose && !type && !area && !location) {
      return;
    }
    dispatch(filterActions.setFilter(filter));
    dispatch(modalActions.setIsOpen(false));
    navigate("/properties");
  };

  return (
    <div className="hero_filter_main">
      <div className="hero_filter_inner">
        <div className="form_control_pair">
          <span>Select Purpose</span>
          <Select
            value={purpose}
            name="purpose"
            options={optionsForPurpose}
            onChange={purposeChange}
          />
        </div>
        <div className="form_control_pair">
          <span>Property Type</span>
          <Select
            value={type}
            name="type"
            options={propertyTypes}
            onChange={typeChange}
          />
        </div>
        <div className="form_control_pair">
          <span>Area</span>
          <Select
            value={area}
            name="area"
            options={areaOption}
            onChange={areaChange}
          />
        </div>
        <div className="form_control_pair">
          <span>Location</span>
          <Select
            value={location}
            name="location"
            options={branchOption}
            onChange={locationChange}
          />
        </div>
        <button
          disabled={btnDisbale}
          style={{ cursor: btnDisbale && "not-allowed" }}
          onClick={searchHandler}
          className="hero_filter_btn"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default HeroFilter;
