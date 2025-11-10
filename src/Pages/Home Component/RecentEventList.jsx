import React, { useState } from "react";

const RecentEventList = () => {
  const [data, setData] = useState([]);
  fetch("http://localhost:5101/social")
    .then((res) => res.json())
    .then((result) => setData(result));

  return (
    <div>
      {data.map((d) => (
        <li>{d.name}</li>
      ))}
    </div>
  );
};

export default RecentEventList;
