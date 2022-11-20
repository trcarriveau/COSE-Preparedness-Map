import '../styles/globals.css'
import { ThemeProvider } from '../context/theme' //Context API
import { store } from '../redux/store' //Redux
import { Provider } from 'react-redux' //Redux

let useWhichType = 'redux' //values can be 'context_api' or 'redux'

function MyApp({ Component, pageProps }) {

  if (useWhichType == 'context_api') {

    return (
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    )

  } else if (useWhichType == 'redux') {

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )

  }

}

export default MyApp
