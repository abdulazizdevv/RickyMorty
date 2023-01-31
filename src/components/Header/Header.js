import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className=" d-flex justify-content-between p-5 shadow">
      <Link className="fs-2 fw-bold text-decoration-none text-dark " to="/">
        Logo
      </Link>
      <ul className="d-flex list-unstyled">
        <li className="me-3">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-decoration-underline" : "text-decoration-none"
            }
            to="/"
          >
            Character
          </NavLink>
        </li>
        <li className="me-3">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-decoration-underline" : "text-decoration-none"
            }
            to="/weather"
          >
            Episode
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-decoration-underline" : "text-decoration-none"
            }
            to="/news"
          >
            Location
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
