import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Dashboard from "./pages/Dashboard/Dashboard";
import Jobs from "./pages/Jobs/Jobs";
import JobDetail from "./pages/JobDetail/JobDetail";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "about", element: <About /> },
        { path: "jobs", element: <Jobs /> },
        { path: "job/details/:jobId", element: <JobDetail /> },
        { path: "forgot-password", element: <ForgotPassword /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
