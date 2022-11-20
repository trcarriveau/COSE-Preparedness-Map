import Link from "next/link";
import { useThemeContext } from "../context/theme";

export default function ThemeContextAPIChild() {
  const [theme, setTheme] = useThemeContext();
  
  return (
    <div id='themeChanger' className={theme}>
      <h1>Welcome to the About page - Context API Theme Changer</h1>
      <Link href="/theme_context_api">
      <button>Go to Parent</button>
      </Link>
      <p>Currently active theme: {theme}</p>
      <button
        onClick={() => {
          theme == "light" ? setTheme("dark") : setTheme("light");
        }}
      >
        Toggle mode
      </button>
    </div>
  );
}