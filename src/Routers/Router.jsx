import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import EventPage from "../Pages/EventPage";
import UpcommingEvent from "../Pages/UpcommingEvent";
import Login from "../Layout/Login";
import Register from "../Layout/Register";
import PrivatePage from "../Private/PrivatePage";
import EventDetails from "../components/EventDetails";

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
      {
        path: "/upcommingEvent/eventDetails/:id",
        Component: EventDetails,
        loader: () =>
          fetch("https://social-development-event.vercel.app/event"),
      },
    ],
  },
  { path: "/login", Component: Login },
  { path: "/register", Component: Register },
]);
