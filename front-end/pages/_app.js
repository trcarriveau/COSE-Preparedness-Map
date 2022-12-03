import "../styles/globals.css";
import { MapDataProvider } from "../contexts/mapdata";
import { CoreSkillsProvider } from "../contexts/skills";
import { TypesProvider } from "../contexts/types";
import { YearsInformationProvider } from "../contexts/year_information";

//update Yearsinformation and replace this
import { YearsSemestersProvider } from "../contexts/years_semesters";

function MyApp({ Component, pageProps }) {
  return (
    <MapDataProvider>
      <YearsInformationProvider>
        <YearsSemestersProvider>
          <CoreSkillsProvider>
            <TypesProvider>
              <Component {...pageProps} />
            </TypesProvider>
          </CoreSkillsProvider>
        </YearsSemestersProvider>
      </YearsInformationProvider>
    </MapDataProvider>
  );
}

export default MyApp;
