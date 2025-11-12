import React from "react";
import { Link } from "react-router";

const FeatureCard = () => {
  const cards = [
    {
      img: "https://i.postimg.cc/G36vfLsK/husniati-salma-ldk-HWg5s3Ec-unsplash.jpg",
      title: "Free Educaton Platform",
      totalNumberOfVolentier: 15,
      foundationName: "Ocean Guardians",
      totalJoinUserNum: 4500,
    },
    {
      img: "https://i.postimg.cc/V5ysWHvT/pexels-ceekris-1714940.jpg",
      title: "Music and Dance",
      totalNumberOfVolentier: 22,
      foundationName: "Hope Foundation",
      totalJoinUserNum: 3258,
    },
    {
      img: "https://i.postimg.cc/jCVq4kCd/pexels-rdne-6646918.jpg",
      title: "Help Homeless People",
      totalNumberOfVolentier: 35,
      foundationName: "Green Earth Alliance",
      totalJoinUserNum: 6776,
    },
    {
      img: "https://i.postimg.cc/fWVx5tkJ/pexels-shkrabaanthony-5215000.jpg",
      title: "Free Health Treatment",
      totalNumberOfVolentier: 18,
      foundationName: "Paws & Claws Rescue",
      totalJoinUserNum: 2805,
    },
    {
      img: "https://i.postimg.cc/8k7hwJsx/the-tampa-bay-estuary-program-Ic-UQNza-Hrvg-unsplash.jpg",
      title: "Elderly Care Program",
      totalNumberOfVolentier: 25,
      foundationName: "Golden Years Foundation",
      totalJoinUserNum: 5146,
    },
    {
      img: "https://i.postimg.cc/4yQVDtcW/hossein-azarbad-1IQJ1s-B1T00-unsplash.jpg",
      title: "Education for All",
      totalNumberOfVolentier: 20,
      foundationName: "Bright Future Initiative",
      totalJoinUserNum: 3973,
    },
  ];
  return (
    <div>
      <h1 className="my-10 text-4xl text-center font-bold text-purple-600 underline">
        Feature Events
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-2">
        {cards.map((card) => (
          <div className="border-2 rounded-xl flex flex-col items-center px-10 py-3">
            <img
              className="h-30 w-40 rounded-xl"
              src={card.img}
              alt=""
              srcset=""
            />
            <h1 className="text-2xl mt-3">{card.title}</h1>
            <div className="flex flex-col gap-y-1">
              <button className="btn  bg-transparent border-none shadow-none">
                <h1 className="font-bold">Volentier: </h1>
                {card.totalJoinUserNum}
              </button>
              <button className="btn  bg-transparent border-none shadow-none">
                <h1 className="font-bold">Foundation: </h1>
                {card.foundationName}
              </button>
              <button className="btn bg-transparent border-none shadow-none">
                <h1 className="font-bold">Active user:</h1>{" "}
                {card.totalJoinUserNum}
              </button>
            </div>
            <button className="btn bg-success mt-2">
              <Link to="/register">Join Now</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
