const useScrollTop = () => {
  const scrolTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return scrolTop;
};

export default useScrollTop