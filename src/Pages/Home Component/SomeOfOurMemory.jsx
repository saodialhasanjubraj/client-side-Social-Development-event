import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const SomeOfOurMemory = () => {
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
    "https://i.postimg.cc/fWVx5tkH/pexels-shvetsa-5231224.jpg",
    "https://i.postimg.cc/8k7hwJsx/the-tampa-bay-estuary-program-Ic-UQNza-Hrvg-unsplash.jpg",

  
  ];

  return (
    <div>
      <h1>Some of our memories</h1>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
      >
        <Masonry>
       {images.map(image=> <img src={image}/>)}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default SomeOfOurMemory;
