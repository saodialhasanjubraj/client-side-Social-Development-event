import React from "react";
import { useLoaderData, useParams } from "react-router";

const EventDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const card = data.find((c) => c._id == id);
  console.log(card);
  return (
    <div>
      <h1>card{card.title}</h1>
    </div>
  );
};

export default EventDetails;
