import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import EventPage from "../Pages/EventPage";
import UpcommingEvent from "../Pages/UpcommingEvent";
import Login from "../Layout/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { path: "/", index: true, Component: Home },
      { path: "/event", Component: EventPage },
      { path: "/upcommingEvent", Component: UpcommingEvent },
      { path: "/login", Component: Login },
    ],
  },
]);
