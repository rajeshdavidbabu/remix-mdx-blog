import { Sun, Moon } from "lucide-react";
import { Theme } from "~/utils/theme-provider";

const iconThemeMap = new Map([
  [Theme.LIGHT, Sun],
  [Theme.DARK, Moon],
]);

export interface ThemeToggleIconProps {
  theme: Theme;
  checked: boolean;
}

export const ThemeToggleIcon = ({ theme, checked }: ThemeToggleIconProps) => {
  const Component = iconThemeMap.get(theme);
  console.log(theme, checked);

  if (Component) {
    return <Component key={theme} className={checked ? "checked" : ""} />;
  }

  return <></>;
};

export default ThemeToggleIcon;
