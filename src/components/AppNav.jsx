import { Link, NavLink } from "react-router-dom";

function AppNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="dashboard">Dashboard</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
