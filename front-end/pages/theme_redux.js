import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux'
import { light, dark } from '../redux/theme/themeSlice'

export default function ThemeRedux() {
  const theme = useSelector((state) => state.theme.value)
  const dispatch = useDispatch()

  return (
    <div id='themeChanger' className={theme}>
      <h1>Welcome to the Home page - Redux API Theme Changer</h1>
      <Link href="/theme_redux_child">
        <button>Go to Child</button>
      </Link>
      <p>Current mode: {theme}</p>
      <button
        onClick={() => {
          theme == "light" ? dispatch(dark()) : dispatch(light());
        }}
      >
        Toggle mode
      </button>
    </div>
  );
}