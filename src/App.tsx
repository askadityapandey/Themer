import './bg.css'
import './App.css'
import './navbar.css'
import './colin.css'
import Navbar from './components/Navbar'
import Colin from './components/Colin'
import ThemeGenerator from './components/ThemeGenerator'
function App() {

  return (
    <>
       <Navbar/>
        <div className="app-container">
          <h1>Welcome to Themer</h1>
          <p>A place to make your VS Code theme and share it to the entire world.</p>
        </div>
        {/* <Colin handleColorChange={handleColorChange} setTheme={setTheme} /> */}

      <ThemeGenerator/>
    </>
  )
}

export default App
