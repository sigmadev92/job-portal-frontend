import { Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header>
        <div>
          <div></div>
          <div>
            <h1>JobSoft</h1>
            <p></p>
          </div>
        </div>
        <nav></nav>
      </header>
      <Outlet />
    </>
  );
}
