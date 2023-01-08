import WINDOW_SIZES from "app-globals/windowSizes";

import useWindowDimensions from "./useWindowDimensions";

const useWindowSize = () => {
  const { width: windowWidth } = useWindowDimensions();

  // For default window sizes
  let size = WINDOW_SIZES.DESKTOP;
  if (windowWidth <= 767) {
    size = WINDOW_SIZES.MOBILE;
  } else if (windowWidth > 767 && windowWidth < 991) {
    size = WINDOW_SIZES.TABLET;
  } else if (windowWidth > 991 && windowWidth < 1200) {
    size = WINDOW_SIZES.SMALL_DESKTOP;
  }

  const isMobile = size === WINDOW_SIZES.MOBILE;
  const isTablet = size === WINDOW_SIZES.TABLET;
  const isDesktop = size === WINDOW_SIZES.DESKTOP;
  const isSmallDesktop = size === WINDOW_SIZES.SMALL_DESKTOP;

  // For specific window sizes
  const isSmallMobile = windowWidth <= 575;

  return {
    size,
    isSmallMobile,
    isMobile,
    isTablet,
    isDesktop,
    isSmallDesktop,
  };
};

export default useWindowSize;
