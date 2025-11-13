import React from "react";
import * as motion from "motion/react-client";
export const Our_Gallery = () => {
  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#9911ff",
    borderRadius: 5,
  };
  const images = [
    "https://i.postimg.cc/G36vfLsK/husniati-salma-ldk-HWg5s3Ec-unsplash.jpg",
    "https://i.postimg.cc/V5ysWHvT/pexels-ceekris-1714940.jpg",
    "https://i.postimg.cc/bdXY9Fr4/pexels-cottonbro-7097455.jpg",
    "https://i.postimg.cc/PfCmKpNN/pexels-kampus-8949827.jpg",
    "https://i.postimg.cc/bYZQLDd0/pexels-ks-jay-339538217-14092191.jpg",
    "https://i.postimg.cc/05zpZMrz/pexels-pavel-danilyuk-7653088.jpg",
    "https://i.postimg.cc/d3ZtdKsj/pexels-pixabay-162540.jpg",
    "https://i.postimg.cc/pyNVJ1rg/pexels-pixabay-47863.jpg",
    "https://i.postimg.cc/T2KrQLhV/pexels-quang-nguyen-vinh-222549-6711518.jpg",
    "https://i.postimg.cc/jCVq4kCd/pexels-rdne-6646918.jpg",
    "https://i.postimg.cc/XXMNkDqR/pexels-safari-consoler-3290243-11834928.jpg",
    "https://i.postimg.cc/fWVx5tkJ/pexels-shkrabaanthony-5215000.jpg",
  ];
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <h1 className="text-5xl my-10 underline text-sky-500">Gallery </h1>
      <div className="grid grid-cols-4">
        {images.map((img) => (
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={box}
          >
            <img src={img} className="h-30 w-30 hover:rounded-xl" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
