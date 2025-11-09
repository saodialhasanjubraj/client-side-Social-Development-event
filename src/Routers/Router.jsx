import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import EventPage from "../Pages/EventPage";
import UpcommingEvent from "../Pages/UpcommingEvent";
import Login from "../Layout/Login";
import Register from "../Layout/Register";
import PrivatePage from "../Private/PrivatePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { path: "/", index: true, Component: Home },
      {
        path: "/event",
        element: (
          <PrivatePage>
            <EventPage />
          </PrivatePage>
        ),
      },
      { path: "/upcommingEvent", Component: UpcommingEvent },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
    ],
  },
]);
