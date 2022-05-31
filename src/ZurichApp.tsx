import { ThemeProvider } from "styled-components"
import zurichTheme from './components/assets/theme'
import CardList from "./components/CardList"
import Header from "./components/Header"

const ZurichApp = () => {
  return(
    <ThemeProvider theme={zurichTheme}>
      <Header />
      <CardList />
    </ThemeProvider>
  )
}

export default ZurichApp