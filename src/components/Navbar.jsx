import { Link } from 'react-router-dom'
import '../App.css'

export default function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">
        <Link to="/">Merel Schoneveld</Link>
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}
