import { ThemeProvider } from "styled-components"
import zurichTheme from './components/assets/theme'
import Header from "./components/Header"

const ZurichApp = () => {
  return(
    <ThemeProvider theme={zurichTheme}>
      <Header />
      <p>La App de Zurich</p>
    </ThemeProvider>
  )
}

export default ZurichApp