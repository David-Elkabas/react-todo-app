import { Link } from "react-router-dom";
import Styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div className={Styles.nav_background}>
      <nav>
        <ul className={Styles.menu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addTodo">AddTodo</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
