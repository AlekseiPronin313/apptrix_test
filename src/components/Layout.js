import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header className="header">
        <NavLink className="header__link" to="/">
          Users
        </NavLink>
        <NavLink className="header__link" to="/Tasks">
          Tasks
        </NavLink>
      </header>
      <Outlet />
    </>
  );
}

export { Layout };
