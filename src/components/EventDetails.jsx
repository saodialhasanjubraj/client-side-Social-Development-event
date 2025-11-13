import React from "react";
import { FaLocationPin } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router";

const EventDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const card = data.find((c) => c._id == id);
  const {
    _id,
    title,
    description,
    time,
    location,
    eventType,
    thumbnilURL,
    name,
    email,
  } = card;
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">{title}</h1>
            <h1>Author: {name}</h1>
            <h1>Author-Email: {email}</h1>
            <div className="location-date">
              <h1 className="flex gap-2 items-center">
                <FaLocationPin /> <span className="font-bold">{location}</span>
              </h1>
            </div>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body h-50 w-50 bg-purple-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
