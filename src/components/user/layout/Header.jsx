import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [isScroll, setIsScrol] = useState(null);
  const [isDetailPage, setIsDetailPage] = useState(null);
  const location = useLocation();

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
    { title: "Blog", to: "/blog" },
    { title: "Agents", to: "/agent/list" },
    { title: "About", to: "/about/us" },
  ];
}
