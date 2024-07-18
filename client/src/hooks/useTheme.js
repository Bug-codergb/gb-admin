import { asideTheme } from "@/styles/theme/aside.js";
import { headerTheme } from "@/styles/theme/header.js";
import { menuTheme } from "@/styles/theme/menu.js";
const useTheme = () => {
  const switchDark = () => {
    const html = document.documentElement;
    setAsideTheme();
    setMenuTheme();
  };
  const setAsideTheme = () => {
    let type = "light";
    const theme = asideTheme[type];
    for (const [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(key, value);
    }
  };
  const setMenuTheme = () => {
    let type = "light";
    const theme = menuTheme[type];
    for (const [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(key, value);
    }
  };
  const initTheme = () => {
    switchDark();
  };
  return {
    initTheme,
    setMenuTheme,
    switchDark
  };
};
export { useTheme };
