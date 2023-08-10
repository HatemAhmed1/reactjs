import { Outlet, Link } from "react-router-dom";
import './Layout.css'
const Layout = () => {
  return (
    <div className="layout" >
      <nav className="head">
            <Link to="/">Home</Link>
            <Link to="/Resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
      </nav>
      <Outlet />
    </div>
  )
};

export default Layout;
