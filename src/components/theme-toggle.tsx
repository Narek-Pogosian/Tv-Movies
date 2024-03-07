import { useTheme } from "@/hooks/use-theme";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <Button onClick={toggleTheme} variant="ghost" size="icon">
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
}

export default ThemeToggle;
