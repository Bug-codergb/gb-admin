import { useSelector } from "react-redux";
export const useTheme = () => {
  const isDark = useSelector(state => state.global.isDark);
  const switchDark = () => {
    const html = document.documentElement;
    if (isDark) html.setAttribute("class", "dark");
    else html.setAttribute("class", "");
  };
  return {
    switchDark,
    isDark
  };
};
