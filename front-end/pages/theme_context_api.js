import Link from "next/link";
import { useThemeContext } from "../context/theme";
// import styles from "../styles/Home.module.css"


export default function ThemeContextAPI() {
  const [theme, setTheme] = useThemeContext();

  return (
    <div id='themeChanger' className={theme}>
      <h1>Welcome to the Home page - Context API Theme Changer</h1>
      <Link href="/theme_context_api_child">
        <button>Go to Child</button>
      </Link>
      <p>Current mode: {theme}</p>
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