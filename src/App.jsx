import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import UserLayout from "./components/user/layout/Layout";
import Home from "./components/user/home/Home";
import PropertyDetail from "./components/user/propert-detail/PropertyDetail";
import AboutUs from "./components/user/about-us/AboutUs";
import AgentList from "./components/user/agents/AgentList";
import Shop from "./components/user/shop/Shop";

// admin side pages
import Dashboard from "./components/admin/dashboard/Dashboard";
import AdminLayout from "./components/admin/layout/Layout";
import AddListing from "./components/admin/listings/AddListing";
import Team from "./components/admin/team/Team";
import GetAllListings from "./components/admin/listings/GetAllListings";
import Review from "./components/admin/reviews/Review";
import Branch from "./components/admin/branches/Branch";
const App = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/property/detail" element={<PropertyDetail />} />
        <Route path="/about/us" element={<AboutUs />} />
        <Route path="/agent/list" element={<AgentList />} />
        <Route path="/properties" element={<Shop />} />
   
      </Route>

      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/lising/add" element={<AddListing />} />
        <Route path="/admin/team" element={<Team />} />
        <Route path="/admin/listings" element={<GetAllListings />} />
        <Route path="/admin/reviews" element={<Review />} />
        <Route path="/admin/branches" element={<Branch />} />
      </Route>
    </Routes>
  );
};

export default App;
