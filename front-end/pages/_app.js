import '../styles/globals.css'
import { MapDataProvider } from "../contexts/mapdata";

function MyApp({ Component, pageProps }) {
  return (
    <MapDataProvider>
      <Component {...pageProps} />
    </MapDataProvider>
  )
}

export default MyApp
