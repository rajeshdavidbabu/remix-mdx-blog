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

  if (Component) {
    return (
      <Component
        key={theme}
        width={23}
        className={checked ? "fill-text-primary dark:fill-d-text-primary" : ""}
      />
    );
  }

  return <></>;
};

export default ThemeToggleIcon;
