import { Outlet, Link } from "react-router-dom";

const MinimalLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Back to Home</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default MinimalLayout;