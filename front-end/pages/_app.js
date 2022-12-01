import "../styles/globals.css";
import { MapDataProvider } from "../contexts/mapdata";
import { CoreSkillsProvider } from "../contexts/skills";
import { TypesProvider } from "../contexts/types";
import { YearsInformationProvider } from "../contexts/year_information";

function MyApp({ Component, pageProps }) {
  return (
    <MapDataProvider>
      <YearsInformationProvider>
        <CoreSkillsProvider>
          <TypesProvider>
            <Component {...pageProps} />
          </TypesProvider>
        </CoreSkillsProvider>
      </YearsInformationProvider>
    </MapDataProvider>
  );
}

export default MyApp;
