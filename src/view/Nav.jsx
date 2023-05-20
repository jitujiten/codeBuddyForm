import { NavLink } from "react-router-dom";
import classes from "../style/MultiForm.module.css";

const Nav = () => {
  return (
    <nav className={classes.navContainer}>
      <NavLink
        to="/"
        className={classes.navLink}
        activeClassName={classes.activeNavLink}
      >
        Form
      </NavLink>
      <NavLink
        to="/posts"
        className={classes.navLink}
        activeClassName={classes.activeNavLink}
      >
        Form Data
      </NavLink>
    </nav>
  );
};

export default Nav;
