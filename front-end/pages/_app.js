import '../styles/globals.css'
import { MapDataProvider } from "../contexts/mapdata";
import { CoreSkillsProvider } from "../contexts/skills";
import { TypesProvider } from "../contexts/types";

function MyApp({ Component, pageProps }) {
  return (
    <MapDataProvider>
      <CoreSkillsProvider>
        <TypesProvider>
          <Component {...pageProps} />
        </TypesProvider>
      </CoreSkillsProvider>
    </MapDataProvider>
  )
}

export default MyApp
