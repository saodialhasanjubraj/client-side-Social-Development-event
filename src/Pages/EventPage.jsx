import React from "react";
import CreateEvent from "./Event Page Component/CreateEvent";
import RecentEventList from "./Home Component/RecentEventList";

const EventPage = () => {
  return (
    <div>
      <CreateEvent />
      <RecentEventList/>
    </div>
  );
};

export default EventPage;
