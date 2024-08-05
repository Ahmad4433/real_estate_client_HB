import React, { useEffect, useState } from "react";
import "./branches.css";
import useNetwork from "../../../hooks/useNetwork";
import useProvideState from "../../../hooks/useProvideState";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dropdownActions } from "../../../store/drop-down-slice";
import { useNavigate } from "react-router-dom";
import { filterActions } from "../../../store/search-filter";
const Branches = () => {
  const [branches, setBranches] = useState([]);
  const { dispatch } = useProvideState();
  const { apiData, httpAction } = useNetwork();
  const { getBranchList } = apiData();
  const navigate = useNavigate();
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToScrol: 1,
    slidesToShow: window.outerWidth >= 430 ? 2 : 1,
    speed: 500,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    const getList = async () => {
      const result = await dispatch(httpAction(getBranchList()));
      if (result?.status) {
        setBranches(result?.list);

        dispatch(dropdownActions.setBranches(result?.list));
      }
    };

    getList();
  }, []);

  const navigateToProperties = (branch) => {
    dispatch(filterActions.setFilter({ "data.branch": branch }));
    navigate("/properties");
  };

  return (
    <div className="branch_main">
      <p className="page_title_center">Find Properties in These Towns</p>
      <p className="page_detail_center">
        Discover your ideal home in these prime locations.
      </p>
      <div>
        <Slider {...settings}>
          {branches?.map((item, index) => {
            return (
              <div key={index} className="branch_container">
                <div className="branch_item">
                  <div className="branch_wide">
                    <div className="branch_bd">
                      <span
                        onClick={() => navigateToProperties(item?.data?.branch)}
                      >
                        {item?.data?.branch}
                      </span>
                      <span>{item?.listing?.length} Properties</span>
                    </div>
                    <img className="branch_wide_img" src={item?.data?.file} />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Branches;
