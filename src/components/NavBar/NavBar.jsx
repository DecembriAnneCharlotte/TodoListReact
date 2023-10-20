import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link to='/'>Acceuil</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/about'>About</Link>
        <Link to='/todolist'>TodoList</Link>
      </nav>
    </header>
  )
}

export default Navbar