"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export function ThemeTogglerButton() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  useEffect(() => {
    console.log("Current theme:", theme);
    console.log("Resolved theme:", resolvedTheme);
  }, [theme, resolvedTheme]);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      <Moon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Sun className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  );
}
