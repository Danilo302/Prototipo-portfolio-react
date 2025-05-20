import AboutMe from './containers/AboutMe'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <AboutMe />
          <Projects />
        </main>
      </Container>
    </>
  )
}
export default App
