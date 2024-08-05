import apis from "./apis";
const apiData = () => {
  const apisList = apis();

  const uploadImages = (files) => {
    const formData = new FormData();
    files.map((file) => formData.append("image", file));
    return {
      url: apisList.uploadImages,
      method: "POST",
      formData: formData,
    };
  };

  const addListing = (data, galary, status, id) => {
    return {
      url:
        status === "add"
          ? apisList.listingAdd
          : apisList.updateListing + "?id=" + id,
      method: status === "add" ? "POST" : "PUT",
      body: { data, galary },
    };
  };

  const addNewUser = (data) => {
    return {
      url: apisList.addNewUser,
      method: "POST",
      body: { data: data },
    };
  };

  const getUserList = () => {
    return {
      url: apisList.userList,
      method: "GET",
    };
  };

  const getUserName = () => {
    return {
      url: apisList.userName,
    };
  };

  const getAllListings = () => {
    return {
      url: apisList.getAllListing,
    };
  };

  const getFilteredListing = (filter, isHot) => {
    return {
      url: apisList.getFilteredListing,
      method: "POST",
      body: { filter, isHot },
    };
  };

  const deleteListing = (id) => {
    return {
      url: apisList.deleteListing + "?id=" + id,
      method: "DELETE",
    };
  };

  const addAmenty = (title) => {
    return {
      url: apisList.addAmenty,
      method: "POST",
      body: { title: title },
    };
  };

  const getAmenityList = () => {
    return {
      url: apisList.getAmenityList,
      method: "GET",
    };
  };

  const getSingleListingById = (id) => {
    return {
      url: apisList.getSingleLisgtingById + "?id=" + id,
    };
  };

  const updateListingActions = (id, isHot) => {
    return {
      url: apisList.updateListingActions + "?id=" + id,
      method: "PUT",
      body: { isHot: isHot },
    };
  };

  const updateUser = (data, userId) => {
    return {
      url: apisList.updateUser + "?id=" + userId,
      method: "PUT",
      body: { data: data },
    };
  };

  const deleteUser = (id) => {
    return {
      url: apisList.deleteUser + "?id=" + id,
      method: "DELETE",
    };
  };

  const addReview = (data) => {
    return {
      url: apisList.addReview,
      method: "POST",
      body: { data: data },
    };
  };

  const getReviewList = () => {
    return {
      url: apisList.getReviewList,
    };
  };

  const deleteReview = (id) => {
    return {
      url: apisList.deleteReview + "?id=" + id,
      method: "DELETE",
    };
  };

  const addBranch = (data) => {
    return {
      url: apisList.addBranch,
      method: "POST",
      body: { data: data },
    };
  };

  const getBranchList = () => {
    return {
      url: apisList.getBranchList,
    };
  };

  const getAreaList = () => {
    return {
      url: apisList.getArea,
    };
  };

  return {
    uploadImages,
    addListing,
    addNewUser,
    getUserList,
    getUserName,
    getAllListings,
    getFilteredListing,
    deleteListing,
    addAmenty,
    getAmenityList,
    getSingleListingById,
    updateListingActions,
    updateUser,
    deleteUser,
    addReview,
    getReviewList,
    deleteReview,
    addBranch,
    getBranchList,
    getAreaList,
  };
};

export default apiData;
