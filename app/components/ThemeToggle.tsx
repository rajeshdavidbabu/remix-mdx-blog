import { Theme, useTheme } from "~/utils/theme-provider";
import ThemeToggleIcon from "./ThemeToggleIcon";

const themes = [Theme.LIGHT, Theme.DARK];

export const ThemeToggle = () => {
  const [theme, setTheme] = useTheme();

  function handleChange() {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  }

  const labelClass = "relative flex cursor-pointer items-center justify-center";

  return (
    <div className="theme-toggle ml-2.5 inline-flex h-full items-center gap-[0.6em] rounded-[99em] px-[0.67em] py-[0.33em] pt-2">
      {themes.map((t) => (
        <label
          key={t}
          className={
            theme === t
              ? `text-text-primary opacity-100 dark:text-d-text-primary ${labelClass}`
              : labelClass
          }
        >
          <ThemeToggleIcon theme={t} checked={theme === t} />
          <input
            type="radio"
            name="theme-toggle"
            className="absolute inset-0 z-[-1] opacity-0"
            checked={theme === t}
            value={t}
            title={`Use ${t} theme`}
            aria-label={`Use ${t} theme`}
            onChange={handleChange}
          />
        </label>
      ))}
    </div>
  );
};

export default ThemeToggle;
