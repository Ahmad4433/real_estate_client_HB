import React, { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import Popup from "../common/Popup";
import HeroFilter from "../home/HeroFilter";
import useProvideState from "../../../hooks/useProvideState";
import { modalActions } from "../../../store/model-slice";

const Header = () => {
  const [isScroll, setIsScrol] = useState(null);
  const [isDetailPage, setIsDetailPage] = useState(null);
  const location = useLocation();
  const { dispatch, useSelector } = useProvideState();
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const isOpen = useSelector((state) => state.modal.isOpen);
  const closeHandler = () => {
    setOpen(false);
  };

  const openHandler = () => {
    setOpen(true);
  };

  useEffect(() => {
    const scrollAction = () => {
      setIsScrol(window.scrollY === 0);
    };
    window.addEventListener("scroll", scrollAction);

    return window.removeEventListener("scrol", scrollAction);
  }, []);

  useEffect(() => {
    const isDetail = location.pathname === "/property/detail";
    setIsDetailPage(isDetail);
  }, [location]);

  return (
    <div className="user_header_main">
      <Popup
        path={location.pathname}
        component={<HeroFilter />}
        open={isOpen}
        title="Filter Property"
      />
      <div className="mobile_header_container">
        <h3>LOGO</h3>
        <div
          onClick={() => dispatch(modalActions.setIsOpen(true))}
          className="mobile_header_filter_opner"
        >
          <span className="mobile_header_filter_tag">Search here...</span>
          <CiFilter className="mobile_header_filter_icon" />
        </div>
        <IoMenu onClick={openHandler} className="mobile_menu_open_icon" />
      </div>
      <Offcanvas show={open} onHide={closeHandler}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>LOGO</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className="mobile_header_menus">
            {getMenuList().map((item, index) => {
              return (
                <Link
                  onClick={closeHandler}
                  key={index}
                  className="mobile_header_menu_item"
                  to={item.to}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <div
        className={
          isScroll && !isDetailPage
            ? "user_header_items_replace"
            : "user_header_items"
        }
      >
        <div className="user_header_logo">LOGO</div>

        <div className="user_header_menus">
          {getMenuList().map((item, index) => {
            return (
              <Link
                key={index}
                className={
                  isScroll && !isDetailPage
                    ? "user_header_link_color"
                    : "user_header_item"
                }
                to={item.to}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
function getMenuList() {
  return [
    { title: "Home", to: "/" },
    { title: "Property", to: "/properties" },
    // { title: "Blog", to: "/blog" },
    { title: "Agents", to: "/agent/list" },
    { title: "About", to: "/about/us" },
  ];
}
