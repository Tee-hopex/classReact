import './App.css'
import Button from './Button.jsx'

function App() {
  return (
    <>
      <header> 
        <div className='logo'>
            <img src="" alt="logo" />
        </div>
        <span>HOPE</span>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <Button buttonText = "Jonathan" number = "2" />
            </ul>
            <Button />
        </nav>
      </header>
    </>
  )
}
export default App