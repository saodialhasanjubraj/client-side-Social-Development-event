import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange, MdOutlineEventAvailable } from "react-icons/md";

const RecentEventList = () => {
  const [data, setData] = useState([]);
  fetch("http://localhost:5101/event")
    .then((res) => res.json())
    .then((result) => setData(result));

  return (
    <div className="flex flex-col gap-y-2">
      {data.map((d) => (
        <div className="w-full bg-black flex flex-col rounded-2xl px-5 py-2 ">
          <div className="date-box w-full flex justify-end items-center gap-x-2 ">
            <h1 className="flex items-center gap-x-2 bg-sky-400 px-5 py-1 rounded-bl-xl `mt-[-4px]` mr-[-20px]">
              <MdOutlineDateRange /> {d.time}
            </h1>
          </div>
          <h1 className="text-2xl font-bold mb-5">{d.title}</h1>
          <div className="location-eventType flex items-center gap-x-5 mb-2">
            <div className="location flex items-center gap-x-2">
              <FaLocationDot size={`20px`} />
              <h1>{d.location}</h1>
            </div>
            <div className="event-Type flex items-center gap-x-2">
              <MdOutlineEventAvailable size={`20px`} />
              <h1>{d.eventType}</h1>
            </div>
          </div>
          <p className="text-justify">
            {d.desription} Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Vero magnam fugiat voluptatem libero et ipsam delectus
            officia, esse officiis deleniti?
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecentEventList;
