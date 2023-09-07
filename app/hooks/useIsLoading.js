// useIsLoading hook to dispatch loading event
const useIsLoading = (bool) => {
  localStorage.setItem("isLoading", bool);
  window.dispatchEvent(new Event("loading"));
};

export default useIsLoading;
