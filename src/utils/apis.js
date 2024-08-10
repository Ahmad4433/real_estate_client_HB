const apis = () => {
  const local = "https://portal.hafizbrothersestate.com/";

  return {
    uploadImages: `${local}galary/add`,
    listingAdd: `${local}listing/add`,
    addNewUser: `${local}user/add`,
    userList: `${local}user/list`,
    userName: `${local}dropdown/user/name`,
    getAllListing: `${local}listing/list`,
    getFilteredListing: `${local}listing/filter/list`,
    deleteListing: `${local}listing/delete`,
    addAmenty: `${local}amenty/add`,
    getAmenityList: `${local}amenty/list`,
    getSingleLisgtingById: `${local}listing/single`,
    updateListing: `${local}listing/update`,
    updateListingActions: `${local}listing/update/action`,
    updateUser: `${local}user/update`,
    deleteUser: `${local}user/delete`,
    addReview: `${local}review/add`,
    getReviewList: `${local}review/get`,
    deleteReview: `${local}review/delete`,
    addBranch: `${local}branch/add`,
    getBranchList: `${local}branch/list`,
    getArea: `${local}dropdown/area`,
  };
};

export default apis;
