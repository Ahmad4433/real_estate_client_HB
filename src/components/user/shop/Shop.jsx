import React, { useEffect, useState } from "react";
import "./shop.css";
import SingleProperty from "../property/SingleProperty";
import shopImg from "../../../assets/shop.jpg";
import Select from "../../ui/Select";
import useProvideState from "../../../hooks/useProvideState";
import useNetwork from "../../../hooks/useNetwork";
import { Link, useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { filterActions } from "../../../store/search-filter";
import getFixDropdown from "../../../utils/getFixDropdown";
import Backdrop from "@mui/material/Backdrop";
import { MdFilterListAlt } from "react-icons/md";
import { modalActions } from "../../../store/model-slice";
import useScrollTop from "../../../hooks/useScrollTop";
import Popup from "../common/Popup";
const Shop = () => {
  const scroll = useScrollTop();
  const pathLocation = useLocation();
  const [loading, setLoading] = useState(false);
  const { useSelector, dispatch } = useProvideState();
  const { apiData, httpAction } = useNetwork();
  const { getFilteredListing, getAllListings, getBranchList, getAreaList } =
    apiData();
  scroll();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const filter = useSelector((state) => state.search.filter);
  const [items, setItems] = useState([]);
  const [options, setOptions] = useState([]);
  const [areas, setAreas] = useState([]);
  const { propertyTypes } = getFixDropdown();

  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [purp, setPurp] = useState("");
  const [area, setArea] = useState("");
  const [fromPrice, setFromPrice] = useState();
  const [toPrice, setToPice] = useState();
  const [isValidForm, setIsValidForm] = useState(false);
  const [open, setOpen] = useState(false);
  const fromPriceChange = (event) => {
    setFromPrice(event.target.value);
  };

  const toPriceChange = (event) => {
    setToPice(event.target.value);
  };

  const locationChange = (event) => {
    setLocation(event.target.value);
  };

  const typeChange = (event) => {
    setType(event.target.value);
  };

  const purpChange = (event) => {
    setPurp(event.target.value);
  };
  const areaChange = (event) => {
    setArea(event.target.value);
  };

  useEffect(() => {
    const getFilterItem = async () => {
      setLoading(true);

      const filledFilter = Object.fromEntries(
        Object.entries(filter).filter(
          ([key, value]) =>
            value !== undefined && value !== null && value !== ""
        )
      );

      const result = await dispatch(
        httpAction(getFilteredListing(filledFilter))
      );
      setLoading(false);
      if (result?.status) {
        setItems(result?.list);
      }
    };

    const getGeneralItems = async () => {
      setLoading(true);
      const result = await dispatch(httpAction(getAllListings()));
      setLoading(false);
      if (result?.status) {
        setItems(result?.list);
      }
    };

    if (filter) {
      getFilterItem();
    } else {
      getGeneralItems();
    }
  }, []);

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

      const areaResult = await dispatch(httpAction(getAreaList()));

      if (areaResult?.status) {
        setAreas(areaResult?.list);
      }
    };

    getList();
  }, []);

  useEffect(() => {
    return () => {
      dispatch(filterActions.setFilter({}));
    };
  }, []);

  const purpose = [{ title: "rent" }, { title: "sale" }];

  useEffect(() => {
    const formatedMinPrice = parseInt(fromPrice);
    const formatedMaxPrice = parseInt(toPrice);
    if (formatedMaxPrice >= formatedMinPrice) {
      validatePrice();
    }
    if (fromPrice) {
      const minLbl = document.getElementsByName("lbl_min")[0];
      minLbl.style.color = "#333";
      minLbl.textContent = "Min Price";
    }
  }, [toPrice, fromPrice]);

  useEffect(() => {
    if (area || purp || location || type || fromPrice || toPrice) {
      setIsValidForm(true);
    }
  }, [area, location, type, purp, toPrice, fromPrice]);

  const searchHandler = async () => {
    const formatedMinPrice = parseInt(fromPrice);
    const formatedMaxPrice = parseInt(toPrice);
    if (formatedMaxPrice < formatedMinPrice) {
      validatePrice("error");
      return;
    }

    if (toPrice && !fromPrice) {
      const minLbl = document.getElementsByName("lbl_min")[0];
      minLbl.style.color = "red";
      minLbl.textContent = "min price is required";
      return;
    }

    if (fromPrice && !toPrice) {
      const maxEle = document.getElementsByName("max_lbl")[0];
      maxEle.style.color = "red";
      maxEle.textContent = "max price is required";
      return;
    }

    dispatch(modalActions.setIsOpen(false));
    setArea("");
    setFromPrice("");
    setLocation("");
    setPurp("");
    setToPice("");
    setType("");

    let filter;

    if (toPrice && fromPrice) {
      filter = {
        "data.branch": location,
        "data.purpose": purp,
        "data.area": area.split(" ")[0],
        "data.type": type,
        "data.price": { $gte: formatedMinPrice, $lte: formatedMaxPrice },
      };
    } else {
      filter = {
        "data.branch": location,
        "data.purpose": purp,
        "data.area": area.split(" ")[0],
        "data.type": type,
      };
    }

    const formatedFilter = Object.fromEntries(
      Object.entries(filter).filter(([key, value]) => {
        return value !== "" && value !== undefined && value !== null;
      })
    );
    setOpen(true);
    const result = await dispatch(
      httpAction(getFilteredListing(formatedFilter))
    );
    setOpen(false);
    if (result?.status) {
      setItems(result?.list);
    }
  };

  const modelaOpenHandler = () => {
    dispatch(modalActions.setIsOpen(true));
  };

  return (
    <div className="shop_main">
      <Popup
        component={
          <div className="shop_filter_bar_mobile">
            <div className="shop_filter_bar_sticky">
              <p className="shop_filter_bar_heading">Select Creteria</p>
              <div className="shop_drop_down">
                <div className="shop_filter_pair">
                  <span className="shop_filter_lbl">Select Location</span>
                  <Select
                    def
                    onChange={locationChange}
                    value={location}
                    options={options}
                  />
                </div>
                <div className="shop_filter_pair">
                  <span className="shop_filter_lbl">Select Type</span>
                  <Select
                    onChange={typeChange}
                    value={type}
                    options={propertyTypes}
                  />
                </div>
                <div className="shop_filter_pair">
                  <span className="shop_filter_lbl">Select Purpose</span>
                  <Select
                    def
                    onChange={purpChange}
                    value={purp}
                    options={purpose}
                  />
                </div>
                <div className="shop_filter_pair">
                  <span className="shop_filter_lbl">Select Area</span>
                  <Select
                    def
                    onChange={areaChange}
                    value={area}
                    options={areas}
                  />
                </div>
              </div>
              <p className="shop_filter_bar_heading">Enter Price Range</p>

              <div className="shop_drop_down">
                <div className="shop_filter_pair">
                  <span name="lbl_min" className="shop_filter_lbl">
                    Min Price
                  </span>
                  <input
                    type="number"
                    onChange={fromPriceChange}
                    value={fromPrice}
                    placeholder="Min Price"
                  />
                </div>
                <div className="shop_filter_pair">
                  <span name="max_lbl" className="shop_filter_lbl">
                    Max Price
                  </span>
                  <input
                    type="number"
                    onChange={toPriceChange}
                    value={toPrice}
                    placeholder="Max Price"
                    name="max_price"
                  />
                </div>
                <button
                  disabled={!isValidForm}
                  style={{ cursor: !isValidForm && "not-allowed" }}
                  onClick={searchHandler}
                  className="shop_filter_search_action"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        }
        close
        path={pathLocation.pathname}
        open={isOpen}
        title="Filter Property"
      />
      <div className="shop_header">
        <div className="shop_bd">
          <p> Find Your Perfect Property</p>
          <p>
            Explore our extensive listings and find the property that suits your
            needs.
          </p>
        </div>
        <img src={shopImg} />
      </div>
      <div onClick={modelaOpenHandler} className="mobile_shop_filter">
        <div>
          {" "}
          <span>Apply Filter</span>
          <MdFilterListAlt className="mobile_shop_filter_icon" />
        </div>
      </div>
      <div className="shop_container">
        <div className="shop_filter_bar">
          <div className="shop_filter_bar_sticky">
            <p className="shop_filter_bar_heading">Select Creteria</p>
            <div className="shop_drop_down">
              <div className="shop_filter_pair">
                <span className="shop_filter_lbl">Select Location</span>
                <Select
                  def
                  onChange={locationChange}
                  value={location}
                  options={options}
                />
              </div>
              <div className="shop_filter_pair">
                <span className="shop_filter_lbl">Select Type</span>
                <Select
                  onChange={typeChange}
                  value={type}
                  options={propertyTypes}
                />
              </div>
              <div className="shop_filter_pair">
                <span className="shop_filter_lbl">Select Purpose</span>
                <Select
                  def
                  onChange={purpChange}
                  value={purp}
                  options={purpose}
                />
              </div>
              <div className="shop_filter_pair">
                <span className="shop_filter_lbl">Select Area</span>
                <Select
                  def
                  onChange={areaChange}
                  value={area}
                  options={areas}
                />
              </div>
            </div>
            <p className="shop_filter_bar_heading">Enter Price Range</p>

            <div className="shop_drop_down">
              <div className="shop_filter_pair">
                <span name="lbl_min" className="shop_filter_lbl">
                  Min Price
                </span>
                <input
                  type="number"
                  onChange={fromPriceChange}
                  value={fromPrice}
                  placeholder="Min Price"
                />
              </div>
              <div className="shop_filter_pair">
                <span name="max_lbl" className="shop_filter_lbl">
                  Max Price
                </span>
                <input
                  type="number"
                  onChange={toPriceChange}
                  value={toPrice}
                  placeholder="Max Price"
                  name="max_price"
                />
              </div>
              <button
                disabled={!isValidForm}
                style={{ cursor: !isValidForm && "not-allowed" }}
                onClick={searchHandler}
                className="shop_filter_search_action"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="shop_listing">
          {loading && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <CircularProgress color="success" />
            </div>
          )}
          <div className="shop_listing_item">
            {items?.length > 0 ? (
              items.map((item, index) => (
                <SingleProperty item={item} key={index} />
              ))
            ) : (
              <div>
                {!loading && (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <p>Nothig found</p>
                    <Link to="/">Back to home</Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Shop;

function validatePrice(condition) {
  const inputEle = document.getElementsByName("max_price")[0];
  inputEle.style.borderColor = condition === "error" ? "red" : "#ccc";
  const lbl = document.getElementsByName("max_lbl")[0];
  lbl.style.color = condition === "error" ? "red" : "#333";
  lbl.textContent =
    condition === "error"
      ? "max price must be grater then min price"
      : "Max Price";
}
