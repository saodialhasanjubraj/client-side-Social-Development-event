import React from "react";
import { FaLocationPin } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router";

const EventDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  console.log(data);
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
    <div className=" bg-base-200 mt-10">
      <div className="hero w-full flex pl-20 pr-25 gap-x-5 justify-between items-center lg:flex-row flex-col">
        <img
          className="h-80 w-130 rounded-2xl"
          src="https://i.postimg.cc/bdXY9Fr4/pexels-cottonbro-7097455.jpg"
          alt=""
          srcset=""
        />

        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold w-100 mb-2.5">{title}</h1>
          <h1 className="mb-2.5">Author: {name}</h1>
          <h1 className="mb-2.5">Author-Email: {email}</h1>
          <div className="location-date mt-2.5">
            <h1 className="flex gap-2 items-center">
              <FaLocationPin /> <span className="font-bold">{location}</span>
            </h1>
          </div>
        </div>
      </div>
      <p className="mt-10 text-justify px-2.5 lg:px-30">{description} </p>
    </div>
  );
};

export default EventDetails;
