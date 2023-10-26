import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"


const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>
      </main>
    </div>
  )
}

export default App
