const getFixDropdown = () => {
  const propertyTypes = [
    { title: "home" },
    { title: "upper portion" },
    { title: "lower portion" },
    { title: "flat" },
    { title: "residential plot" },
    { title: "commercial plot" },
    { title: "shop" },
    { title: "office" },
  ];

  return {
    propertyTypes,
  };
};

export default getFixDropdown;
